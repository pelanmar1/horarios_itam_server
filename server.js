/**
 * Created by Pedro Lanzagorta M on 1/1/2017.
 */

var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;
var app = express();
var async = require('async');





// MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

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
    combos = [];
    if(postCourses!=null && postCourses.length>0){
        screenScraping.courseNamesDDLScraping(function (courses) {   
            postCourses = cleanCourses(postCourses,courses,true);
            namesToCourses(postCourses,function(finalCourses){
                if(postFilters!=null && postFilters.hasOwnProperty('mustHaveGroups') && postFilters.mustHaveGroups.length > 0){
                    finalFilters=cleanCourses(postFilters.mustHaveGroups,courses,false);
                    combos = schedule_generator.filterClasses(finalCourses,finalFilters);
                }
                else{
                    combos = schedule_generator.getValidClassCombinations(finalCourses);
                }
                res.send(combos);
                    
            });
            
            
            
        });
    }
});

app.listen(port, function () {
    console.log('I\'m listening');
});

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

var namesToCourses = function(inputCourses,next){
    var courses = [];
    var url;
    async.map(inputCourses, function (target, callback) {
    url =screenScraping.createCourseURL(target);
    screenScraping.scheduleTableScraping(url,function (data) {
        courses.push(data);
        callback(null,courses)
    });

    }, function (err, data) {
        if (err)
            return console.log(err.message);
        next(data[0]);
    });
    
}


var screenScraping = require('./processing/screen_scraping/screen_scraping.js');
var schedule_generator = require('./processing/schedule_generator/schedule_gen.js');

