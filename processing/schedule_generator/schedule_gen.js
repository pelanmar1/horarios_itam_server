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

// filter sets by json object conditions
var checkValidSet = function(set,filter) {
    if(filter == null) return true;

    var go = true;
    var i = 0;

    var laboratory,alternative;

    var misProfMinAvg,sum=0,avg=0,numRated=0;

    if(filter!= null && filter.hasOwnProperty('misProfMinAvgScore') && filter.misProfMinAvgScore!= null){
        misProfMinAvg = parseFloat(filter.misProfMinAvgScore);
    }
    while(go && i<set.length){
        // Check class
        go = go && checkAllFilters(set[i],filter);
        sum += sumScore(set[i]);
        numRated++;
        // Check laboratory
        if(set[i].hasOwnProperty('laboratory') && set[i].laboratory != null){
            laboratory = set[i].laboratory;
            go = go && checkAllFilters(laboratory,filter);
            sum += sumScore(laboratory);
            numRated++;
        }
        // Check alternative
        if(set[i].hasOwnProperty('alternative') && set[i].alternative != null){
            alternative = set[i].alternative;
            go = go && checkAllFilters(alternative,filter);
            sum += sumScore(alternative);
            numRated++;
        }
        i++;
    }
    
    if(misProfMinAvg != null && sum>0){
        avg = sum/numRated;
        go = go && avg>=misProfMinAvg;
    }
    return go;
}

var sumScore= function(course){
    var score=0;
    if(course.hasOwnProperty('teacher') && course.teacher != null 
        && course.teacher.hasOwnProperty('misProfesoresData') && course.teacher.misProfesoresData!= null 
        && course.teacher.misProfesoresData.hasOwnProperty('score') && course.teacher.misProfesoresData.score!= null){
        score = parseFloat(course.teacher.misProfesoresData.score);
        if(isNaN(score))
            score = 0;
        
    }
    return score;

}


// CHECK ALL

var checkAllFilters = function(courseObj,filterObj){
    var goodDays,goodTimes,mustGroups;
    goodDays = checkAvoidDay(courseObj,filterObj);
    goodTimes = checkAvoidHours(courseObj,filterObj);
    mustGroups = checkMustHaveGroups(courseObj,filterObj);
    return goodDays && goodTimes && mustGroups;


}

// AVOID HOURS

// Checks if a single course is good against single avoid hours filter
var courseInValidHours = function(course,filtDays,filtHours){
    if(course==null || filtDays == null || filtHours == null) return true;

    var i = 0;
    var go = true;
    
    var courseDays = formatDays(course.days);
    var courseTime = formatTime(course.schedule);
    var isUnwantedDay=false;
    var isUnwantedTime=false;
    while(go && i<filtDays.length){
        isUnwantedDay = courseDays.indexOf(filtDays[i])>-1 || filtDays[i] == 7;
        if(isUnwantedDay){
            isUnwantedTime = !isTimeOutsideInterval(courseTime[0],courseTime[1],filtHours[0],filtHours[1]);
            go = go && !isUnwantedTime;
        }
        i++;
    }
    return go;
}

// Checks if a single course is good against ALL avoid hours filters
var checkAvoidHours= function(course,filter){
    if (course== null || filter == null
        || filter.hasOwnProperty('avoidHours')== false 
        || filter.avoidHours instanceof Array == false 
            || filter.avoidHours.length == 0) return true;

    var go = true;
    var i = 0;
    var currElem,currDays,currHours;
    while(go && i<filter.avoidHours.length){
        currElem = filter.avoidHours[i];
        go = go && courseInValidHours(course,currElem.days,[currElem.startTime,currElem.endTime])
        i++;
    }

    return go;
}

// AVOID DAY

// Checks if a single course is good against single avoid hours filter
var checkAvoidDay = function(course,filter){
    if (course== null || filter == null
        || filter.hasOwnProperty('avoidDay')==false 
            || filter.avoidDay instanceof Array == false 
                || filter.avoidDay.length == 0) return true;

    var filtDays = filter.avoidDay;
    var i = 0;
    var go = true;
    var courseDays = formatDays(course.days);

    var isUnwantedDay=false;
    while(go && i<filtDays.length){
        isUnwantedDay = courseDays.indexOf(filtDays[i])>-1 || filtDays[i] == 7;
        go = go && !isUnwantedDay;
        i++;
    }
    return go;
}

// MUST HAVE GROUPS

var checkMustHaveGroups = function(course,filter){
    if (course== null || filter == null
        || filter.hasOwnProperty('mustHaveGroups')==false 
            || filter.mustHaveGroups instanceof Array == false 
                || filter.mustHaveGroups.length == 0) return true;

    var i = 0;
    var go = true;
    var groups = filter.mustHaveGroups;
    var dep,cNum,curr;
    var go = true;

    var isWantedClass=false;
    while(go && i<groups.length){
        curr = groups[i].split('-');
        if(curr.length<3) return true;
        dep = curr[0];
        cNum = curr[1];
        groupNum = curr[2];
        isWantedClass = (dep == course.department && cNum == course.key);
        if(isWantedClass){
            go = groupNum == course.groupNum
        }
        i++;
    }
    return go;
}

module.exports.getValidClassCombinations = getValidClassCombinations;
module.exports.checkValidSet = checkValidSet;