

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
