/**
 * Created by Pedro Lanzagorta M on 1/1/2017.
 */

var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;
var app = express();
var async = require('async');
var cors = require('cors');





// MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

var bodyParser = require('body-parser')
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// HTTP GETs
app.get('/',function (req,res) {
    res.send('Connected.');
});
app.get('/loadSchedules',function (req,res) {
    var courseName = req.query.cName;
    var url =screenScraping.createCourseURL(courseName);
    screenScraping.scheduleTableScraping(url,function (data) {
        res.send(data);
    });
});
app.get('/loadCourses',function (req,res) {
    screenScraping.courseNamesDDLScraping(function (data) {
        res.send(data);
    });
});




// HTTP POSTs
app.post('/generateSchedule',function(req,res){
    postCourses = req.body.courses;
    postFilters = req.body.filters;
    postFilters = formatAvoidHours(postFilters);
    combos = [];
    if(postCourses!=null && postCourses.length>0){
        screenScraping.courseNamesDDLScraping(function (courses) {   
            postCourses = cleanCourses(postCourses,courses,true);
            if(postCourses!=null && postCourses.length>0){
                namesToCourses(postCourses,function(finalCourses){
                    if(postFilters!=null){
                        finalFilters = postFilters;
                        if(postFilters.hasOwnProperty('mustHaveGroups') && postFilters.mustHaveGroups.length > 0){
                            finalFilters.mustHaveGroups =cleanCourses(postFilters.mustHaveGroups,courses,false);
                        }
                        if (finalFilters!=null)
                            combos = schedule_generator.filterClasses(finalCourses,finalFilters);
                        else
                            combos = schedule_generator.getValidClassCombinations(finalCourses);
                    }
                    else{
                        combos = schedule_generator.getValidClassCombinations(finalCourses);
                    }
                    res.send(combos);
                        
                });
            }
            else{
                res.send(403, {error: "Los cursos ingresados no se encuentran disponibles este periodo."});
            }
            
            
            
        });
    }
});

app.listen(port, function () {
    console.log('I\'m listening');
});

// Takes in an array of simple KEY-GROUP courses and returns formatted available courses
// if coursesFormat = true, the resulting format will be the official (Group-less)
// if coursesFormat = false, the resulting format will be as given in the input

var cleanCourses = function(inputCourses,courses,coursesFormat){
    postCourses =[]
    for(i=0;i<inputCourses.length;i++){
        postCourses[i]=inputCourses[i].split('-').slice(0,2).join('-');
    }
    temp=[]
    for(i=0;i<courses.length;i++){
        courseKey = courses[i].split('-');
        if(courseKey.length>1){
            courseKey = courseKey.slice(0,2).join('-');
            if (postCourses.indexOf(courseKey)>=0){
                if(coursesFormat == true)
                    temp.push(courses[i]);
                else
                    temp.push(inputCourses[postCourses.indexOf(courseKey)])
            }
        } 
    }
    return temp;
}

// Takes in an array with course names in the format KEY-NAME and returns an 2D array of options
var namesToCourses = function(inputCourses,next){
    var courses = [];
    var url;
    async.map(inputCourses, function (target, callback) {
    url =screenScraping.createCourseURL(target);
    screenScraping.scheduleTableScraping(url,function (data) {
        if(data!=null && data.length>0)
            courses.push(data);
        callback(null,courses)
    });

    }, function (err, data) {
        if (err)
            return console.log(err.message);
        next(data[0]);
    });
    
}


var formatAvoidHours = function(filters){
    if (filters!=null){
        if (filters.hasOwnProperty('avoidHours') && filters.avoidHours!=null && filters.avoidHours.length>0){
            for (var i =0;i<filters.avoidHours.length;i++){
                var temp = filters.avoidHours[i];
                temp.startTime = formatHours(new Date(temp.startTime));
                temp.endTime = formatHours(new Date(temp.endTime));
                filters.avoidHours[i] = temp;
            }
        }
    }
    return filters;
}

var formatHours = function(dateObject){
    var hour = parseInt(dateObject.getHours());
    var minutes = parseInt(dateObject.getMinutes());
    if (minutes != 0)
        hour+=0.5
    return hour
}




var screenScraping = require('./processing/screen_scraping/screen_scraping.js');
var schedule_generator = require('./processing/schedule_generator/schedule_gen.js');

