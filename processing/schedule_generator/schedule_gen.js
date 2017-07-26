/**
 * Created by Pedro Lanzagorta M on 12/25/2016.
 */

const NUM_DAYS = 5;
const START_TIME = 7;
const END_TIME = 22;

// Prepares a clean schedule matrix.
var cleanScheduleMatrix = function () {
    var matrix = [];
    for (var i = 0; i < (END_TIME - START_TIME) * 2; i++) {
        matrix[i] = [];
        for (var j = 0; j < NUM_DAYS; j++) {
            matrix[i][j] = false;
        }
    }
    return matrix;
};

// Receives formatted input and returns true if the given class intersects any other class on schedMatrix.
var classOverlaps = function (startTime, endTime, days, schedMatrix) { //time & date as integers
    var matrix = schedMatrix;
    var sTime = (startTime - 7) / 0.5;
    var eTime = (endTime - 7) / 0.5;
    var steps = (endTime - startTime) / 0.5;
    var i = sTime;
    var overlap = false;
    var j = 0;
    while (!overlap && j < days.length) {
        i = sTime;
        while (!overlap && i < sTime + steps) {
            overlap = matrix[i][days[j]] == true;
            matrix[i][days[j]] = true;
            i++;
        }
        j++;
    }
    if (!overlap) {
        schedMatrix = matrix;
    }
    return overlap;

};

// Receives days in scraped format and returns an array with the correspinding index to each day in course.
var formatDays = function (days) {
    var daysC = ['DO','LU', 'MA', 'MI', 'JU', 'VI','SA'];
        days = days.split(',');
        var nDays = [];
        for (var i = 0; i < days.length; i++) {
            days[i] = (days[i] + '').toUpperCase();
            nDays.push(daysC.indexOf(days[i]));
        }
    
    return nDays;
};

// Receives scheduled time in scraped format and returns an array with integer from start and end time.
var formatTime = function (time) {
    time = time.split('-');
    var sTime = time[0].split(':');
    var eTime = time[1].split(':');
    if (sTime[1] == '00')
        sTime = parseInt(sTime[0]);
    else
        sTime = parseInt(sTime[0]) + 0.5;
    if (eTime[1] == '00')
        eTime = parseInt(eTime[0]);
    else
        eTime = parseInt(eTime[0]) + 0.5;

    return [sTime, eTime];

};

// Receives an array with class JSON objects and returns true if the given classes form a valid schedule.
var checkIfValidClasses = function (classes) {
    var matrix = cleanScheduleMatrix();
    var i = 0;
    var overlap = false;
    var temp;
    while (!overlap && i < classes.length) {
        temp = classes[i];
        var time = formatTime(temp.schedule);
        overlap = classOverlaps(time[0], time[1], formatDays(temp.days), matrix);
        var otherTime;
        var otherSched;
        if (temp.hasOwnProperty('laboratory')) {
            otherTime = formatTime(temp.laboratory.schedule);
            otherSched = formatDays(temp.laboratory.days);
            overlap = overlap || classOverlaps(otherTime[0], otherTime[1], otherSched, matrix);
        }
        if (temp.hasOwnProperty('alternative')) {
            if(temp.schedule!=temp.alternative.schedule||temp.days!=temp.alternative.days) {
                otherTime = formatTime(temp.alternative.schedule);
                otherSched = formatDays(temp.alternative.days);
                overlap = overlap || classOverlaps(otherTime[0], otherTime[1], otherSched, matrix);
            }
        }
        i++;
    }
    //console.log(matrix);
    //console.log('\n');
    return !overlap;
};

// Receives an array with lists of available classes and returns an array with valid schedule combinations
var getValidClassCombinations = function (lists) {
    var temp;
    var validSched = [];
    if (lists[0] != null)
        for (var i = 0; i < lists[0].length; i++) {
            if (lists.length == 1) {
                temp = [lists[0][i]];
                if (checkIfValidClasses(temp))
                    validSched.push(temp);
            }
            if (lists[1] != null)
                for (var j = 0; j < lists[1].length; j++) {
                    if (lists.length == 2) {
                        temp = [lists[0][i], lists[1][j]];
                        if (checkIfValidClasses(temp)) {
                            validSched.push(temp);
                        }
                    }
                    if (lists[2] != null)
                        for (var k = 0; k < lists[2].length; k++) {
                            if (lists.length == 3) {
                                temp = [lists[0][i], lists[1][j], lists[2][k]];
                                if (checkIfValidClasses(temp))
                                    validSched.push(temp);
                            }
                            if (lists[3] != null)
                                for (var l = 0; l < lists[3].length; l++) {
                                    if (lists.length == 4) {
                                        temp = [lists[0][i], lists[1][j], lists[2][k], lists[3][l]];
                                        if (checkIfValidClasses(temp))
                                            validSched.push(temp);

                                    }
                                    if (lists[4] != null)
                                        for (var m = 0; m < lists[4].length; m++) {
                                            if (lists.length == 5) {
                                                temp = [lists[0][i], lists[1][j], lists[2][k], lists[3][l], lists[4][m]];
                                                if (checkIfValidClasses(temp))
                                                    validSched.push(temp);
                                            }
                                            if (lists[5] != null)
                                                for (var n = 0; n < lists[5].length; n++) {
                                                    if (lists.length == 6) {
                                                        temp = [lists[0][i], lists[1][j], lists[2][k], lists[3][l], lists[4][m], lists[5][n]];
                                                        if (checkIfValidClasses(temp))
                                                            validSched.push(temp);

                                                    }
                                                    if (lists[6] != null)
                                                        for (var o = 0; o < lists[6].length; o++) {
                                                            if (lists.length >= 7) {
                                                                temp = [lists[0][i], lists[1][j], lists[2][k], lists[3][l], lists[4][m], lists[5][n], lists[6][o]];
                                                                if (checkIfValidClasses(temp))
                                                                    validSched.push(temp);
                                                            }
                                                        }
                                                }
                                        }
                                }
                        }
                }
        }
    return validSched;
};

// Checks is given schedules overlap
var isTimeOutsideInterval = function (sTime1, eTime1, sTime2, eTime2) {
    return ((sTime1 > sTime2 && sTime1 >= eTime2) || (eTime1 <= sTime2 && eTime1 < eTime2));
};

var getMisProfesoresAvgScore = function (classes) {
    var k = 0;
    if(classes!=null && classes.length>0){
        var sum = 0;
        classes.forEach(function (item, i) {
            if (item.teacher.misProfesoresData != null) {
                sum += parseFloat(item.teacher.misProfesoresData.score);
                k++;
            }
            if(item.alternative!=null&&item.alternative.teacher.misProfesoresData!=null&&item.alternative.teacher.name!=item.teacher.name){
                sum += parseFloat(item.alternative.teacher.misProfesoresData.score);
                k++;
            }
            if(item.laboratory!=null&&item.laboratory.teacher.misProfesoresData!=null&&item.laboratory.teacher.name!=item.teacher.name){
                sum += parseFloat(item.laboratory.teacher.misProfesoresData.score);
                k++;
            }
        });
    }

    return (k==0)?-1:(sum/k);
}

//Given a set of classes with all available groups, return all filtered sets.

var filterClasses = function (classes, filters) {
    var final = [];
    if (filters!= null && classes!= null){
        var temp = getValidClassCombinations(classes);
        var k = 0;
        var go = true;
        //Filters
        var avoidDay = null;
        var hoursToAvoid = null;
        var mustGroups = null;
        var misProfMinAvgScore =null;        
        if (filters.hasOwnProperty('avoidDay') && filters.avoidDay.length > 0)
            avoidDay = filters.avoidDay;
        if (filters.hasOwnProperty('avoidHours') && filters.avoidHours.length > 0)
            hoursToAvoid = filters.avoidHours;
        if (filters.hasOwnProperty('mustHaveGroups') && filters.mustHaveGroups!=null && filters.mustHaveGroups.length > 0)
            mustGroups = filters.mustHaveGroups
        if(filters.hasOwnProperty('misProfMinAvgScore') && filters.misProfMinAvgScore>0)
            misProfMinAvgScore= filters.misProfMinAvgScore;
        for (var j = 0; j < temp.length; j++) {
            k = 0;
            var time,days;
            var altTime, altDays;
            var labTime, labDays;
            while (go && k < temp[j].length) {
                time = formatTime(temp[j][k].schedule);
                days = formatDays(temp[j][k].days);
                if (temp[j][k].hasOwnProperty('alternative') && temp[j][k].alternative!=null){
                    altDays = formatDays(temp[j][k].alternative.days);
                    altTime = formatTime(temp[j][k].alternative.schedule);
                }
                if (temp[j][k].hasOwnProperty('laboratory') && temp[j][k].laboratory!=null){
                    labDays = formatDays(temp[j][k].laboratory.days);
                    labTime = formatTime(temp[j][k].laboratory.schedule);
                }
                if (avoidDay != null) {
                    var a =0;
                    while(go&&a<avoidDay.length) {
                        go = go && (days.indexOf(avoidDay[a]) == -1) && avoidDay[a]!=7;
                        if(go && labDays!= null)
                            go = go && (labDays.indexOf(avoidDay[a]) == -1) && avoidDay[a]!=7;
                        if(go && altDays!= null)
                            go = go && (altDays.indexOf(avoidDay[a]) == -1) && avoidDay[a]!=7;
                        a++;
                    }
                }
                if (hoursToAvoid != null) {
                    var h = 0;
                    while (go && h < hoursToAvoid.length) {
                        if (hoursToAvoid[h].days != null && !(hoursToAvoid[h].days.length == 1 && hoursToAvoid[h].days[0] == 7)) {
                            var d = 0;
                            while (go && d < hoursToAvoid[h].days.length) {
            
                                if (days.indexOf(hoursToAvoid[h].days[d]) >= 0){
                                    go = go && (isTimeOutsideInterval(hoursToAvoid[h].startTime, hoursToAvoid[h].endTime, time[0], time[1]));
                                }
                                if(go && labDays!=null){
                                    if (labDays.indexOf(hoursToAvoid[h].days[d]) >= 0)
                                        go = go && (isTimeOutsideInterval(hoursToAvoid[h].startTime, hoursToAvoid[h].endTime, labTime[0], labTime[1]));
                                }
                                if(go && altDays!=null){
                                    if (altDays.indexOf(hoursToAvoid[h].days[d]) >= 0)
                                        go = go && (isTimeOutsideInterval(hoursToAvoid[h].startTime, hoursToAvoid[h].endTime, altTime[0], altTime[1]));
                                }
                                d++;
                            }
                        }
                        else if (hoursToAvoid[h].days!=null){
                            go = go && (isTimeOutsideInterval(hoursToAvoid[h].startTime, hoursToAvoid[h].endTime, time[0], time[1]));
                            if(go && altDays!=null){
                                    go = go && (isTimeOutsideInterval(hoursToAvoid[h].startTime, hoursToAvoid[h].endTime, altTime[0], altTime[1]));
                            }
                            if(go && labDays!=null){
                                    go = go && (isTimeOutsideInterval(hoursToAvoid[h].startTime, hoursToAvoid[h].endTime, labTime[0], labTime[1]));
                            }
                        }
                        h++;
                    }
                }
                if (mustGroups != null) {
                    var g = 0;
                    while (go && g < mustGroups.length) {
                        var tempCode = (mustGroups[g] + '').split('-');
                        if (temp[j][k].department == tempCode[0] && temp[j][k].key == tempCode[1]) {
                            go = go && temp[j][k].groupNum == tempCode[2];
                        }
                        g++;
                    }
                }
                k++;
            }
            if (go) {
                if(misProfMinAvgScore !=null){
                    var score = getMisProfesoresAvgScore(temp[j]);
                    go= go && (score ==-1 ||score>=misProfMinAvgScore);
                }
                if(go){
                    final.push(temp[j]);
                }
            }
            else
                go = true;
        }
    }
    return final;

};


var x = {
    avoidDay: [5], // EVITA CLASES EL DÍA VIERNES
    avoidHours: [
        {
            days: [7],//[TODOS LOS DÍAS]
            startTime: 7,
            endTime: 8
        },
        {
            days: [1,3], //[LUNES,MIÉRCOLES]
            startTime: 10, // 4 PM
            endTime: 11.5    // 6 PM
        }
    ],
     // DEPARTAMENTO-CLAVE-GRUPO
    misProfMinAvgScore: 0
};




module.exports.filterClasses = filterClasses;
module.exports.getValidClassCombinations = getValidClassCombinations;