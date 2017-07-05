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
                        go = go && (days.indexOf(avoidDay[a]) == -1);
                        if(labDays!= null)
                            go = go && (labDays.indexOf(avoidDay[a]) == -1);
                        if(altDays!= null)
                            go = go && (altDays.indexOf(avoidDay[a]) == -1);
                        a++;
                    }
                }
                if (hoursToAvoid != null) {
                    var h = 0;
                    while (go && h < hoursToAvoid.length) {
                        if (hoursToAvoid[h].days != null && !(hoursToAvoid[h].days.length == 1 && hoursToAvoid[h].days[0] == 7)) {
                            var d = 0;
                            while (go && d < hoursToAvoid[h].days.length) {
                                if (days.indexOf(hoursToAvoid[h].days[d]) >= 0)
                                    go = go && (isTimeOutsideInterval(hoursToAvoid[h].startTime, hoursToAvoid[h].endTime, time[0], time[1]));
                                if(labDays!=null){
                                    if (labDays.indexOf(hoursToAvoid[h].days[d]) >= 0)
                                        go = go && (isTimeOutsideInterval(hoursToAvoid[h].startTime, hoursToAvoid[h].endTime, labTime[0], labTime[1]));
                                }
                                if(altDays!=null){
                                    if (altDays.indexOf(hoursToAvoid[h].days[d]) >= 0)
                                        go = go && (isTimeOutsideInterval(hoursToAvoid[h].startTime, hoursToAvoid[h].endTime, altTime[0], altTime[1]));
                                }
                                d++;
                            }
                        }
                        else if (hoursToAvoid[h].days!=null){
                            go = go && (isTimeOutsideInterval(hoursToAvoid[h].startTime, hoursToAvoid[h].endTime, time[0], time[1]));
                            if(altDays!=null){
                                    go = go && (isTimeOutsideInterval(hoursToAvoid[h].startTime, hoursToAvoid[h].endTime, altTime[0], altTime[1]));
                            }
                            if(labDays!=null){
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


var classes = [
    [{"department":"SDI","key":"11561","groupNum":"001","classType":"T","name":"PRINCIPIOS DE MECATRONICA","teacher":{"name":"MARCO ANTONIO MORALES AGUIRRE","misProfesoresData":{"name":"MARCO ANTONIO MORALES AGUIRRE","department":"SISTEMAS DIGITALES","numReviews":"10","score":"4.9","link":"http://www.misprofesores.com/profesores/Marco-Antonio-Morales-Aguirre_10872"}},"credits":"10","schedule":"09:00-11:00","days":"MA,JU","classroom":"RH301","campus":"RIO HONDO","comments":"","laboratory":{"department":"SDI","key":"11561","groupNum":"001","classType":"L","name":"PRINCIPIOS DE MECATRONICA","teacher":{"name":"MARCO ANTONIO MORALES AGUIRRE","misProfesoresData":{"name":"MARCO ANTONIO MORALES AGUIRRE","department":"SISTEMAS DIGITALES","numReviews":"10","score":"4.9","link":"http://www.misprofesores.com/profesores/Marco-Antonio-Morales-Aguirre_10872"}},"credits":"10","schedule":"14:30-16:30","days":"MA","classroom":"RHLCLMP","campus":"RIO HONDO","comments":""}},{"department":"SDI","key":"11561","groupNum":"002","classType":"T","name":"PRINCIPIOS DE MECATRONICA","teacher":{"name":"MARCO ANTONIO MORALES AGUIRRE","misProfesoresData":{"name":"MARCO ANTONIO MORALES AGUIRRE","department":"SISTEMAS DIGITALES","numReviews":"10","score":"4.9","link":"http://www.misprofesores.com/profesores/Marco-Antonio-Morales-Aguirre_10872"}},"credits":"10","schedule":"09:00-11:00","days":"MA,JU","classroom":"RH301","campus":"RIO HONDO","comments":"","laboratory":{"department":"SDI","key":"11561","groupNum":"002","classType":"L","name":"PRINCIPIOS DE MECATRONICA","teacher":{"name":"MARCO ANTONIO MORALES AGUIRRE","misProfesoresData":{"name":"MARCO ANTONIO MORALES AGUIRRE","department":"SISTEMAS DIGITALES","numReviews":"10","score":"4.9","link":"http://www.misprofesores.com/profesores/Marco-Antonio-Morales-Aguirre_10872"}},"credits":"10","schedule":"19:00-21:00","days":"JU","classroom":"RHLCLMP","campus":"RIO HONDO","comments":""}},{"department":"SDI","key":"11561","groupNum":"003","classType":"T","name":"PRINCIPIOS DE MECATRONICA","teacher":{"name":"JOSE GUADALUPE ROMERO VELAZQUEZ","misProfesoresData":{"name":"JOSÉ GUADALUPE ROMERO VELASQUEZ","department":"SISTEMAS DIGITALES","numReviews":"1","score":"5.0","link":"http://www.misprofesores.com/profesores/Jose-Guadalupe-Romero-Velasquez_81677"}},"credits":"10","schedule":"10:30-12:30","days":"LU,MI","classroom":"RH314","campus":"RIO HONDO","comments":"","laboratory":{"department":"SDI","key":"11561","groupNum":"003","classType":"L","name":"PRINCIPIOS DE MECATRONICA","teacher":{"name":""},"credits":"10","schedule":"11:30-13:30","days":"VI","classroom":"RHLCLMP","campus":"RIO HONDO","comments":""}},{"department":"SDI","key":"11561","groupNum":"004","classType":"T","name":"PRINCIPIOS DE MECATRONICA","teacher":{"name":"JOSE GUADALUPE ROMERO VELAZQUEZ","misProfesoresData":{"name":"JOSÉ GUADALUPE ROMERO VELASQUEZ","department":"SISTEMAS DIGITALES","numReviews":"1","score":"5.0","link":"http://www.misprofesores.com/profesores/Jose-Guadalupe-Romero-Velasquez_81677"}},"credits":"10","schedule":"10:30-12:30","days":"LU,MI","classroom":"RH314","campus":"RIO HONDO","comments":"","laboratory":{"department":"SDI","key":"11561","groupNum":"004","classType":"L","name":"PRINCIPIOS DE MECATRONICA","teacher":{"name":""},"credits":"10","schedule":"13:00-15:00","days":"MI","classroom":"RHLCLMP","campus":"RIO HONDO","comments":""}}],
    [{"department":"IIO","key":"13160","groupNum":"001","classType":"T","name":"MODELADO Y OPTIMIZACION II","teacher":{"name":"ALEJANDRO TERAN CASTELLANOS","misProfesoresData":{"name":"ALEJANDRO TERÁN CASTELLANOS","department":"ING. INDUSTRIAL Y OPERACIONES","numReviews":"20","score":"8.1","link":"http://www.misprofesores.com/profesores/Alejandro-Teran-Castellanos_10862"}},"credits":"6","schedule":"17:30-19:00","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13160","groupNum":"002","classType":"T","name":"MODELADO Y OPTIMIZACION II","teacher":{"name":"MIGUEL FRANCISCO DE LASCURAIN MORHAN","misProfesoresData":{"name":"MIGUEL FRANCISCO DE LASCURAIN MORHAN","department":"ING. INDUSTRIAL Y OPERACIONES","numReviews":"13","score":"8.6","link":"http://www.misprofesores.com/profesores/Miguel-Francisco-de-Lascurain-Morhan_10857"}},"credits":"6","schedule":"11:30-13:00","days":"MA,JU","classroom":"RHB-5","campus":"RIO HONDO","comments":""}],
    [{"department":"ECO","key":"12102","groupNum":"001","classType":"T","name":"ECONOMIA, II","teacher":{"name":"CHRISTIANE FABREGA CHIMALI","misProfesoresData":{"name":"CHRISTIANE FABREGA CHIMALI","department":"ECONOMÍA","numReviews":"66","score":"8.6","link":"http://www.misprofesores.com/profesores/Christiane-Fabrega-Chimali_22910"}},"credits":"7","schedule":"11:30-13:00","days":"LU,MI","classroom":"RH113","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"002","classType":"T","name":"ECONOMIA, II","teacher":{"name":"JOSE MARIA DA ROCHA ALVAREZ","misProfesoresData":{"name":"JOSE MARIA DA ROCHA ALVAREZ","department":"ECONOMIA","numReviews":"10","score":"4.0","link":"http://www.misprofesores.com/profesores/Jose-Maria-Da-Rocha-Alvarez_68162"}},"credits":"7","schedule":"11:30-13:00","days":"LU,MI","classroom":"RH317","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"003","classType":"T","name":"ECONOMIA, II","teacher":{"name":"VALERIA MOY CAMPOS","misProfesoresData":{"name":"VALERIA MOY","department":"ECONOMIA","numReviews":"97","score":"8.4","link":"http://www.misprofesores.com/profesores/Valeria-Moy_15794"}},"credits":"7","schedule":"08:30-10:00","days":"MA,JU","classroom":"RH101","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"004","classType":"T","name":"ECONOMIA, II","teacher":{"name":"VALERIA MOY CAMPOS","misProfesoresData":{"name":"VALERIA MOY","department":"ECONOMIA","numReviews":"97","score":"8.4","link":"http://www.misprofesores.com/profesores/Valeria-Moy_15794"}},"credits":"7","schedule":"10:00-11:30","days":"MA,JU","classroom":"RH103","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"005","classType":"T","name":"ECONOMIA, II","teacher":{"name":"IRENE CLARA RIVADENEYRA WOZNIAK","misProfesoresData":{"name":"IRENE CLARA RIVADENEYRA WOZNIAK","department":"ECONOMÍA","numReviews":"53","score":"7.7","link":"http://www.misprofesores.com/profesores/Irene-Clara-Rivadeneyra-Wozniak_10773"}},"credits":"7","schedule":"08:30-10:00","days":"LU,MI","classroom":"RH101","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"006","classType":"T","name":"ECONOMIA, II","teacher":{"name":"IRENE CLARA RIVADENEYRA WOZNIAK","misProfesoresData":{"name":"IRENE CLARA RIVADENEYRA WOZNIAK","department":"ECONOMÍA","numReviews":"53","score":"7.7","link":"http://www.misprofesores.com/profesores/Irene-Clara-Rivadeneyra-Wozniak_10773"}},"credits":"7","schedule":"08:30-10:00","days":"MA,JU","classroom":"RH108","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"007","classType":"T","name":"ECONOMIA, II","teacher":{"name":"FRANCISCO RAFAEL PADILLA CATALAN","misProfesoresData":{"name":"FRANCISCO RAFAEL PADILLA","department":"ECONOMIA","numReviews":"12","score":"9.2","link":"http://www.misprofesores.com/profesores/Francisco-Rafael-Padilla_56490"}},"credits":"7","schedule":"07:00-08:30","days":"MA,JU","classroom":"RH113","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"008","classType":"T","name":"ECONOMIA, II","teacher":{"name":"MISHELLE LISSETTE SEGUI PEREZ","misProfesoresData":{"name":"MICHELLE SEGUI PEREZ","department":"ECONOMIA","numReviews":"7","score":"8.3","link":"http://www.misprofesores.com/profesores/michelle-segui-perez_40715"}},"credits":"7","schedule":"10:00-11:30","days":"LU,MI","classroom":"RH103","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"009","classType":"T","name":"ECONOMIA, II","teacher":{"name":"RODRIGO SANCHEZ GAVITO PORTILLA","misProfesoresData":{"name":"RODRIGO GAVITO","department":"ECONOMÍA 2","numReviews":"2","score":"7.5","link":"http://www.misprofesores.com/profesores/Rodrigo-Gavito_71019"}},"credits":"7","schedule":"08:30-10:00","days":"MA,JU","classroom":"RH109","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"010","classType":"T","name":"ECONOMIA, II","teacher":{"name":"MARIA INES CARAZA HERRASTI","misProfesoresData":{"name":"MARÍA MARGARETA BEJAN","department":"ADMINISTRACIÓN","numReviews":"5","score":"6.2","link":"http://www.misprofesores.com/profesores/Maria-Margareta-Bejan_10745"}},"credits":"7","schedule":"17:30-19:00","days":"LU,MI","classroom":"RH312","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"011","classType":"T","name":"ECONOMIA, II","teacher":{"name":"VICTOR HUGO GOMEZ AYALA","misProfesoresData":{"name":"VICTOR HUGO GOMEZ AYALA","department":"ECONOMIA","numReviews":"","score":"","link":"http://www.misprofesores.com/profesores/Victor-hugo-gomez-ayala_72112"}},"credits":"7","schedule":"07:00-08:30","days":"MA,JU","classroom":"RH110","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"012","classType":"T","name":"ECONOMIA, II","teacher":{"name":"VICTOR HUGO GOMEZ AYALA","misProfesoresData":{"name":"VICTOR HUGO GOMEZ AYALA","department":"ECONOMIA","numReviews":"","score":"","link":"http://www.misprofesores.com/profesores/Victor-hugo-gomez-ayala_72112"}},"credits":"7","schedule":"07:00-10:00","days":"VI","classroom":"RH110","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"013","classType":"T","name":"ECONOMIA, II","teacher":{"name":"CHRISTIANE FABREGA CHIMALI","misProfesoresData":{"name":"CHRISTIANE FABREGA CHIMALI","department":"ECONOMÍA","numReviews":"66","score":"8.6","link":"http://www.misprofesores.com/profesores/Christiane-Fabrega-Chimali_22910"}},"credits":"7","schedule":"10:00-11:30","days":"LU,MI","classroom":"RH113","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"014","classType":"T","name":"ECONOMIA, II","teacher":{"name":""},"credits":"7","schedule":"07:00-08:30","days":"MA,JU","classroom":"RH103","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"015","classType":"T","name":"ECONOMIA, II","teacher":{"name":"ANTONIO BASSOLS QUIROZ","misProfesoresData":{"name":"ANTONIO BASSOLS QUIROZ","department":"ECONOMIA","numReviews":"9","score":"3.9","link":"http://www.misprofesores.com/profesores/Antonio-Bassols-Quiroz_56535"}},"credits":"7","schedule":"07:00-10:00","days":"VI","classroom":"RH304","campus":"RIO HONDO","comments":""}],
    [{"department":"COM","key":"14105","groupNum":"001","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"RAFAEL GREGORIO GAMBOA HIRALES","misProfesoresData":{"name":"RAFAEL GREGORIO GAMBOA HIRALES","department":"COMPUTACIÓN","numReviews":"19","score":"6.8","link":"http://www.misprofesores.com/profesores/Rafael-Gregorio-Gamboa-Hirales_10855"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHCC102","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"002","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"RAFAEL GREGORIO GAMBOA HIRALES","misProfesoresData":{"name":"RAFAEL GREGORIO GAMBOA HIRALES","department":"COMPUTACIÓN","numReviews":"19","score":"6.8","link":"http://www.misprofesores.com/profesores/Rafael-Gregorio-Gamboa-Hirales_10855"}},"credits":"6","schedule":"08:30-10:00","days":"LU,MI","classroom":"RHCC102","campus":"RIO HONDO","comments":""}],
    [{
        "department": "COM",
        "key": "12102",
        "groupNum": "001",
        "classType": "T",
        "name": "ANALISIS Y DIS. DE SIS.DE INFO",
        "teacher": {
            "name": "PAULINA BUSTOS ARELLANO",
            "misProfesoresData": {
                "name": "EDUARDO TOMAS ARELLANO ARJONA",
                "department": "MATEMATICAS",
                "numReviews": "84",
                "score": "6.7",
                "link": "http://www.misprofesores.com/profesores/EDUARDO-TOMAS-ARELLANO-ARJONA_17865"
            }
        },
        "credits": "6",
        "schedule": "13:00-14:30",
        "days": "MA,JU",
        "classroom": "RH213",
        "campus": "RIO HONDO",
        "comments": "",
        "alternative": {
            "department": "COM",
            "key": "12102",
            "groupNum": "001",
            "classType": "T",
            "name": "ANALISIS Y DIS. DE SIS.DE INFO",
            "teacher": {
                "name": "VICTOR MANUEL GONZALEZ Y GONZALEZ",
                "misProfesoresData": {
                    "name": "VÍCTOR MANUEL GONZÁLEZ GONZÁLEZ",
                    "department": "COMPUTACIÓN",
                    "numReviews": "7",
                    "score": "9.7",
                    "link": "http://www.misprofesores.com/profesores/Victor-Manuel-Gonzalez-Gonzalez_54207"
                }
            },
            "credits": "6",
            "schedule": "13:00-14:30",
            "days": "MA,JU",
            "classroom": "RH213",
            "campus": "RIO HONDO",
            "comments": ""
        }
    }],
    [{
        "department": "IIO",
        "key": "13180",
        "groupNum": "001",
        "classType": "T",
        "name": "SIMULACION DE SISTEMAS",
        "teacher": {
            "name": "ANA KARINA MIRANDA FLORES",
            "misProfesoresData": {
                "name": "ANA BAZUA",
                "department": "ECONOMÍA",
                "numReviews": "9",
                "score": "9.1",
                "link": "http://www.misprofesores.com/profesores/Ana-Bazua_69646"
            }
        },
        "credits": "6",
        "schedule": "07:00-08:30",
        "days": "MA,JU",
        "classroom": "RHPACE",
        "campus": "RIO HONDO",
        "comments": ""
    }, {
        "department": "IIO",
        "key": "13180",
        "groupNum": "002",
        "classType": "T",
        "name": "SIMULACION DE SISTEMAS",
        "teacher": {
            "name": "ADRIAN RAMIREZ NAFARRATE",
            "misProfesoresData": {
                "name": "ADRIAN RAMIREZ NAFARRATE",
                "department": "ING. INDUSTRIAL Y OPERACIONES",
                "numReviews": "1",
                "score": "9.0",
                "link": "http://www.misprofesores.com/profesores/Adrian-Ramirez-Nafarrate_52296"
            }
        },
        "credits": "6",
        "schedule": "16:00-17:30",
        "days": "MA,JU",
        "classroom": "RHPACE",
        "campus": "RIO HONDO",
        "comments": ""
    }]
];
//classes = [    [{"department":"ECO","key":"12102","groupNum":"001","classType":"T","name":"ECONOMIA, II","teacher":{"name":"CHRISTIANE FABREGA CHIMALI","misProfesoresData":{"name":"CHRISTIANE FABREGA CHIMALI","department":"ECONOMÍA","numReviews":"66","score":"8.6","link":"http://www.misprofesores.com/profesores/Christiane-Fabrega-Chimali_22910"}},"credits":"7","schedule":"11:30-13:00","days":"LU,MI","classroom":"RH113","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"002","classType":"T","name":"ECONOMIA, II","teacher":{"name":"JOSE MARIA DA ROCHA ALVAREZ","misProfesoresData":{"name":"JOSE MARIA DA ROCHA ALVAREZ","department":"ECONOMIA","numReviews":"10","score":"4.0","link":"http://www.misprofesores.com/profesores/Jose-Maria-Da-Rocha-Alvarez_68162"}},"credits":"7","schedule":"11:30-13:00","days":"LU,MI","classroom":"RH317","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"003","classType":"T","name":"ECONOMIA, II","teacher":{"name":"VALERIA MOY CAMPOS","misProfesoresData":{"name":"VALERIA MOY","department":"ECONOMIA","numReviews":"97","score":"8.4","link":"http://www.misprofesores.com/profesores/Valeria-Moy_15794"}},"credits":"7","schedule":"08:30-10:00","days":"MA,JU","classroom":"RH101","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"004","classType":"T","name":"ECONOMIA, II","teacher":{"name":"VALERIA MOY CAMPOS","misProfesoresData":{"name":"VALERIA MOY","department":"ECONOMIA","numReviews":"97","score":"8.4","link":"http://www.misprofesores.com/profesores/Valeria-Moy_15794"}},"credits":"7","schedule":"10:00-11:30","days":"MA,JU","classroom":"RH103","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"005","classType":"T","name":"ECONOMIA, II","teacher":{"name":"IRENE CLARA RIVADENEYRA WOZNIAK","misProfesoresData":{"name":"IRENE CLARA RIVADENEYRA WOZNIAK","department":"ECONOMÍA","numReviews":"53","score":"7.7","link":"http://www.misprofesores.com/profesores/Irene-Clara-Rivadeneyra-Wozniak_10773"}},"credits":"7","schedule":"08:30-10:00","days":"LU,MI","classroom":"RH101","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"006","classType":"T","name":"ECONOMIA, II","teacher":{"name":"IRENE CLARA RIVADENEYRA WOZNIAK","misProfesoresData":{"name":"IRENE CLARA RIVADENEYRA WOZNIAK","department":"ECONOMÍA","numReviews":"53","score":"7.7","link":"http://www.misprofesores.com/profesores/Irene-Clara-Rivadeneyra-Wozniak_10773"}},"credits":"7","schedule":"08:30-10:00","days":"MA,JU","classroom":"RH108","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"007","classType":"T","name":"ECONOMIA, II","teacher":{"name":"FRANCISCO RAFAEL PADILLA CATALAN","misProfesoresData":{"name":"FRANCISCO RAFAEL PADILLA","department":"ECONOMIA","numReviews":"12","score":"9.2","link":"http://www.misprofesores.com/profesores/Francisco-Rafael-Padilla_56490"}},"credits":"7","schedule":"07:00-08:30","days":"MA,JU","classroom":"RH113","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"008","classType":"T","name":"ECONOMIA, II","teacher":{"name":"MISHELLE LISSETTE SEGUI PEREZ","misProfesoresData":{"name":"MICHELLE SEGUI PEREZ","department":"ECONOMIA","numReviews":"7","score":"8.3","link":"http://www.misprofesores.com/profesores/michelle-segui-perez_40715"}},"credits":"7","schedule":"10:00-11:30","days":"LU,MI","classroom":"RH103","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"009","classType":"T","name":"ECONOMIA, II","teacher":{"name":"RODRIGO SANCHEZ GAVITO PORTILLA","misProfesoresData":{"name":"RODRIGO GAVITO","department":"ECONOMÍA 2","numReviews":"2","score":"7.5","link":"http://www.misprofesores.com/profesores/Rodrigo-Gavito_71019"}},"credits":"7","schedule":"08:30-10:00","days":"MA,JU","classroom":"RH109","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"010","classType":"T","name":"ECONOMIA, II","teacher":{"name":"MARIA INES CARAZA HERRASTI","misProfesoresData":{"name":"MARÍA MARGARETA BEJAN","department":"ADMINISTRACIÓN","numReviews":"5","score":"6.2","link":"http://www.misprofesores.com/profesores/Maria-Margareta-Bejan_10745"}},"credits":"7","schedule":"17:30-19:00","days":"LU,MI","classroom":"RH312","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"011","classType":"T","name":"ECONOMIA, II","teacher":{"name":"VICTOR HUGO GOMEZ AYALA","misProfesoresData":{"name":"VICTOR HUGO GOMEZ AYALA","department":"ECONOMIA","numReviews":"","score":"","link":"http://www.misprofesores.com/profesores/Victor-hugo-gomez-ayala_72112"}},"credits":"7","schedule":"07:00-08:30","days":"MA,JU","classroom":"RH110","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"012","classType":"T","name":"ECONOMIA, II","teacher":{"name":"VICTOR HUGO GOMEZ AYALA","misProfesoresData":{"name":"VICTOR HUGO GOMEZ AYALA","department":"ECONOMIA","numReviews":"","score":"","link":"http://www.misprofesores.com/profesores/Victor-hugo-gomez-ayala_72112"}},"credits":"7","schedule":"07:00-10:00","days":"VI","classroom":"RH110","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"013","classType":"T","name":"ECONOMIA, II","teacher":{"name":"CHRISTIANE FABREGA CHIMALI","misProfesoresData":{"name":"CHRISTIANE FABREGA CHIMALI","department":"ECONOMÍA","numReviews":"66","score":"8.6","link":"http://www.misprofesores.com/profesores/Christiane-Fabrega-Chimali_22910"}},"credits":"7","schedule":"10:00-11:30","days":"LU,MI","classroom":"RH113","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"014","classType":"T","name":"ECONOMIA, II","teacher":{"name":""},"credits":"7","schedule":"07:00-08:30","days":"MA,JU","classroom":"RH103","campus":"RIO HONDO","comments":""},{"department":"ECO","key":"12102","groupNum":"015","classType":"T","name":"ECONOMIA, II","teacher":{"name":"ANTONIO BASSOLS QUIROZ","misProfesoresData":{"name":"ANTONIO BASSOLS QUIROZ","department":"ECONOMIA","numReviews":"9","score":"3.9","link":"http://www.misprofesores.com/profesores/Antonio-Bassols-Quiroz_56535"}},"credits":"7","schedule":"07:00-10:00","days":"VI","classroom":"RH304","campus":"RIO HONDO","comments":""}]];


var z = filterClasses(classes,x);
//console.log(classes[0][0])
console.log(z);
//console.log(getMisProfesoresAvgScore(z[1]));

module.exports.filterClasses = filterClasses;
module.exports.getValidClassCombinations = getValidClassCombinations;