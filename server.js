/**
 * Created by Pedro Lanzagorta M on 1/1/2017.
 */

var express = require('express');
var path = require('path');
var port = process.env.PORT || 8000;
var app = express();




// MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

// HTTP GETs
app.get('/',function (req,res) {
    res.send('Connected.');
});
app.get('/loadSchedules',function (req,res) {
    var courseName = req.param('cName');
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


app.post('/generateSchedule',function(req,res){
    var filtersJSON = JSON.parse(req.body);
    res.send('OK');
});

app.listen(port, function () {
    console.log('I\'m listening');
});

var screenScraping = require('./processing/screen_scraping/screen_scraping.js');
var schedule_generator = require('./processing/schedule_generator/schedule_gen.js');
