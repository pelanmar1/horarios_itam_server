/**
 * Created by Pedro Lanzagorta M on 12/22/2016.
 */

const SEMESTER_CLASSES_URL = 'http://grace.itam.mx/EDSUP/BWZKSENP.P_Horarios1?s=1259';
const CLASSES_BY_COURSE_URL = 'http://grace.itam.mx/EDSUP/BWZKSENP.P_Horarios2?s=1259'.concat('&txt_materia=');
const MIS_PROFESORES_ITAM_URL = 'http://www.misprofesores.com/escuelas/ITAM-Instituto-Tecnologico-Autonomo-de-Mexico_1003';

// module requirements
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var async = require('async');
// File requires:
var misProfesoresList = require('./mis_profesores_list.js').misProfesoresList;
var searchEngine = require('../search_engine/searchEngine.js');


// ----SCREEN SCRAPING ASYNC-----

// Saves all available courses for a given semester in a file
var courseNamesDDLScrapingAsync = function (next) {
    var courseNames = [];
    async.map([SEMESTER_CLASSES_URL], function (target, callback) {
        request(target, function (err, response, body) {
            if (!err && response.statusCode === 200) {
                $ = cheerio.load(body);
                var courseNamesDDL = $('select[name=txt_materia]').find('option');
                courseNamesDDL.each(function (index, elem) {
                    courseNames.push($(this).text());
                });
                callback(null, courseNames);
            } else {
                callback(err, null);
            }

        });

    }, function (err, data) {
        if (err)
            return console.log(err.message);
        next(data[0]);
    });

};

// Retreives a schedule table for a given url and returns an array with class JSON objects.
var scheduleTableScrapingAsync = function (url, next) {
    async.map([url], function (target, callback) {
        request(target, function (err, response, body) {
            var categories = [];
            var attrNames = ['department', 'key', 'groupNum', 'classType', 'name', 'teacher', 'credits', 'schedule', 'days', 'classroom', 'campus', 'comments'];
            var classes = [];
            if (!err && response.statusCode === 200) {
                $ = cheerio.load(body);
                var tRows = $('table[border=1]').find('tr');
                var numR = tRows.length;
                tRows.each(function (rowIndex, rowElem) {
                    var oClass = {};
                    $(this).find('td').each(function (colIndex, colElem) {
                        var data = formatScheduleTableData($(this).text(), colIndex);
                        if (rowIndex != 0) {
                            if (colIndex == 5) {
                                oClass[attrNames[colIndex]] = {name: data};
                            }
                            else
                                oClass[attrNames[colIndex]] = data;
                        }
                    });
                    var flag = true;
                    if (rowIndex > 0) {
                        if (classes.length >= 1) {
                            var prevClass = classes[classes.length - 1];
                            if (prevClass.groupNum == oClass.groupNum) {
                                if (oClass.classType == 'L') {
                                    prevClass["laboratory"] = oClass;
                                } else {
                                    prevClass["alternative"] = oClass;
                                }
                                flag = false;
                            }
                        }
                        oClass = setMisProfesoresInfo(oClass);
                        if (flag) {
                            classes.push(oClass);
                        }
                        flag = true;
                    }

                });
                callback(null, classes);


            } else
                callback(err, null);

        });

    }, function (err, data) {
        if (err)
            return console.log(err.message);
        next(data[0]);
    });
};

// Retreives all teacher information from MisProfesores.com and writes it to a file
var misProfesoresScrapingAsync = function (next) {
    var categories = ['Nombre', 'Departamento', 'Núm. Eval.', 'Calif.'];
    var teachers = [];
    var attrNames = ['name', 'department', 'numReviews', 'score', 'link'];

    async.map([MIS_PROFESORES_ITAM_URL], function (target, callback) {
        request(target, function (err, response, body) {
            if (!err && response.statusCode === 200) {
                $ = cheerio.load(body);
                var teacherTableRow = $(".table.table-striped.profesores_table").find('tr');
                teacherTableRow.each(function (rowIndex, rowElem) {
                    var teacherO = {};
                    var name;
                    var link;
                    $(this).find('td').each(function (colIndex, colElem) {
                        var data = $(this).text();
                        switch (colIndex) {
                            case 1:
                                link = $(this).find('a').attr('href');
                                name = data;
                                break;
                            case 2:
                                name = data + ' ' + name;
                                teacherO[attrNames[0]] = name.toUpperCase();
                                break;
                            case 3:
                                teacherO[attrNames[1]] = data.toUpperCase();
                                break;
                            case 4:
                                teacherO[attrNames[2]] = data;
                                break;
                            case 5:
                                teacherO[attrNames[3]] = data;
                                break;
                        }
                    });
                    teacherO[attrNames[4]] = link;
                    if (rowIndex > 0)
                        teachers.push(teacherO);
                });
                callback(null, teachers);
            }
            else {
                callback(err, null);
            }
        });
    }, function (err, data) {
        if (err)
            return console.log(err.message);
        next(data[0]);
    });

};

// ----FORMATTING FUNCTIONS-----

// Creates a url for retreving available classes for a given subject
var createCourseURL = function (courseName) {
    courseName = courseName.replace(' ', '+');
    var url = unescape(encodeURIComponent(CLASSES_BY_COURSE_URL + courseName));
    return url;
};

var formatScheduleTableData = function (data, i) {
    data = data.replace('�', 'Ñ');
    data = data.replace('\n', '');
    data = data.replace('RIO HONDO\n', 'RIO HONDO');
    data = data.trim();
    if (i === 8)
        data = data.replace(/\s+/g, ',');
    return data;
};

var setMisProfesoresInfo = function (classJSON) {
    var misProfesoresData = searchForTeacherMP(classJSON.teacher.name)[0];
    if (misProfesoresData != null) {
        if (misProfesoresData.length == 0)
            classJSON.teacher.misProfesoresData = null;
        else
            classJSON.teacher.misProfesoresData = misProfesoresData;
    }
    return classJSON;
};

// Take in data and write it to a file
var writeMPLFile = function (json) {
    var options = {flag: 'w'};
    var exports = ';module.exports.misProfesoresList = teachers;';
    fs.truncate("./mis_profesores_list.js", 0, function () {
        fs.writeFile('./mis_profesores_list.js',
            'var teachers = ' + JSON.stringify(json) + exports, options,
            function (err) {
                if (err) {
                    console.error('There was a problem writing the file.');
                }
            }
        );
    });
};

// Takes in a Class JSON object and returns an EventJSON object
var createEventJSON = function (classJSON) {
    var time = classJSON.schedule.replace('-', ':').split(':');
    var days = ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'];
    var nDays = [];
    classJSON.days.split(',').forEach(function (day) {
        nDays.push(days.indexOf(day));
    });
    var json = {
        name: classJSON.name,
        start: {hour: time[0], minute: time[1]},
        end: {hour: time[2], minute: time[3]},
        days: nDays
    };
    return json;
};


// ----MIS PROFESORES UTILITES-----

// Given a name of a teacher, returns a JSON object with the given teacher's misProfesores information
var searchForTeacherMP = function (name) {
    if (misProfesoresList != null)
        return searchEngine.searchForTeacher(name, misProfesoresList);
};

var updateMPLFile =function(){
    misProfesoresScrapingAsync(function (data) {
        writeMPLFile(data);
    });
};



//console.log(searchForTeacherMP('Pedro Matabuena Serrano'));
module.exports.createCourseURL = createCourseURL;
module.exports.scheduleTableScraping = scheduleTableScrapingAsync;
module.exports.courseNamesDDLScraping = courseNamesDDLScrapingAsync;