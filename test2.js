var fs = require('fs');

function readData(srcPath) { 
    fs.readFile(srcPath, 'utf8', function (err, data) {
            if (err) throw err;
            console.log(data);
            }
            
        );
}


function writeData(savPath, data) {
        fs.writeFile (savPath, data, function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
}


var data = 
[[{"department":"EST","key":"11101","groupNum":"001","classType":"T","name":"PROBABILIDAD","teacher":{"name":"ERNESTO JUVENAL BARRIOS ZAMUDIO","misProfesoresData":{"name":"ERNESTO JUVENAL BARRIOS ZAMUDIO","department":"ESTADÍSTICA","numReviews":"50","score":"7.6","link":"http://www.misprofesores.com/profesores/Ernesto-Juvenal-Barrios-Zamudio_10689"}},"credits":"8","schedule":"16:00-18:00","days":"MA,JU","classroom":"RHB-1","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"001","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"08:30-10:00","days":"LU,MI","classroom":"RHCC202","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"001","classType":"T","name":"PROBABILIDAD","teacher":{"name":"ERNESTO JUVENAL BARRIOS ZAMUDIO","misProfesoresData":{"name":"ERNESTO JUVENAL BARRIOS ZAMUDIO","department":"ESTADÍSTICA","numReviews":"50","score":"7.6","link":"http://www.misprofesores.com/profesores/Ernesto-Juvenal-Barrios-Zamudio_10689"}},"credits":"8","schedule":"16:00-18:00","days":"MA,JU","classroom":"RHB-1","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"002","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"17:30-19:00","days":"LU,MI","classroom":"RHCC101","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"002","classType":"T","name":"PROBABILIDAD","teacher":{"name":"CARLOS ARTURO SERNA GARCINI","misProfesoresData":{"name":"CARLOS ARTURO SERNA GARCINI","department":"ESTADISTICA","numReviews":"86","score":"7.6","link":"http://www.misprofesores.com/profesores/Carlos-Arturo-Serna-Garcini_35622"}},"credits":"8","schedule":"15:30-17:30","days":"LU,MI","classroom":"RH315","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"001","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"08:30-10:00","days":"LU,MI","classroom":"RHCC202","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"002","classType":"T","name":"PROBABILIDAD","teacher":{"name":"CARLOS ARTURO SERNA GARCINI","misProfesoresData":{"name":"CARLOS ARTURO SERNA GARCINI","department":"ESTADISTICA","numReviews":"86","score":"7.6","link":"http://www.misprofesores.com/profesores/Carlos-Arturo-Serna-Garcini_35622"}},"credits":"8","schedule":"15:30-17:30","days":"LU,MI","classroom":"RH315","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"002","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"17:30-19:00","days":"LU,MI","classroom":"RHCC101","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"003","classType":"T","name":"PROBABILIDAD","teacher":{"name":"GUADALUPE EUNICE CAMPIRAN GARCIA","misProfesoresData":{"name":"CÉSAR LUIS GARCÍA GARCÍA","department":"MATEMÁTICAS","numReviews":"28","score":"9.0","link":"http://www.misprofesores.com/profesores/Cesar-Luis-Garcia-Garcia_10701"}},"credits":"8","schedule":"16:00-18:00","days":"LU,MI","classroom":"RHPB1","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"001","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"08:30-10:00","days":"LU,MI","classroom":"RHCC202","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"004","classType":"T","name":"PROBABILIDAD","teacher":{"name":"CARLOS ARTURO SERNA GARCINI","misProfesoresData":{"name":"CARLOS ARTURO SERNA GARCINI","department":"ESTADISTICA","numReviews":"86","score":"7.6","link":"http://www.misprofesores.com/profesores/Carlos-Arturo-Serna-Garcini_35622"}},"credits":"8","schedule":"18:00-20:00","days":"LU,MI","classroom":"RH309","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"001","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"08:30-10:00","days":"LU,MI","classroom":"RHCC202","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"005","classType":"T","name":"PROBABILIDAD","teacher":{"name":"VERONICA ELIZABETH ROHEN ORTEGA","misProfesoresData":{"name":"VERONICA ELIZABETH ROHEN ORTEGA","department":"ESTADISTICA","numReviews":"25","score":"6.5","link":"http://www.misprofesores.com/profesores/Veronica-Elizabeth-Rohen-Ortega_17602"}},"credits":"8","schedule":"07:00-09:00","days":"MA,JU","classroom":"RHB-2","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"001","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"08:30-10:00","days":"LU,MI","classroom":"RHCC202","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"005","classType":"T","name":"PROBABILIDAD","teacher":{"name":"VERONICA ELIZABETH ROHEN ORTEGA","misProfesoresData":{"name":"VERONICA ELIZABETH ROHEN ORTEGA","department":"ESTADISTICA","numReviews":"25","score":"6.5","link":"http://www.misprofesores.com/profesores/Veronica-Elizabeth-Rohen-Ortega_17602"}},"credits":"8","schedule":"07:00-09:00","days":"MA,JU","classroom":"RHB-2","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"002","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"17:30-19:00","days":"LU,MI","classroom":"RHCC101","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"006","classType":"T","name":"PROBABILIDAD","teacher":{"name":"LUIS ANTONIO ANDRADE ROSAS","misProfesoresData":{"name":"LUIS ANTONIO ANDRADE ROSAS","department":"ECONOMIA","numReviews":"42","score":"6.0","link":"http://www.misprofesores.com/profesores/Luis-Antonio-Andrade-Rosas_35594"}},"credits":"8","schedule":"09:00-11:00","days":"MA,JU","classroom":"RH317","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"001","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"08:30-10:00","days":"LU,MI","classroom":"RHCC202","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"006","classType":"T","name":"PROBABILIDAD","teacher":{"name":"LUIS ANTONIO ANDRADE ROSAS","misProfesoresData":{"name":"LUIS ANTONIO ANDRADE ROSAS","department":"ECONOMIA","numReviews":"42","score":"6.0","link":"http://www.misprofesores.com/profesores/Luis-Antonio-Andrade-Rosas_35594"}},"credits":"8","schedule":"09:00-11:00","days":"MA,JU","classroom":"RH317","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"002","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"17:30-19:00","days":"LU,MI","classroom":"RHCC101","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"007","classType":"T","name":"PROBABILIDAD","teacher":{"name":"FEDERICO JOSE KUHLMANN RODRIGUEZ","misProfesoresData":{"name":"FEDERICO JOSÉ KUHLMANN RODRÍGUEZ","department":"SISTEMAS DIGITALES","numReviews":"22","score":"7.5","link":"http://www.misprofesores.com/profesores/Federico-Jose-Kuhlmann-Rodriguez_10875"}},"credits":"8","schedule":"11:00-13:00","days":"MA,JU","classroom":"RH103","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"001","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"08:30-10:00","days":"LU,MI","classroom":"RHCC202","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"007","classType":"T","name":"PROBABILIDAD","teacher":{"name":"FEDERICO JOSE KUHLMANN RODRIGUEZ","misProfesoresData":{"name":"FEDERICO JOSÉ KUHLMANN RODRÍGUEZ","department":"SISTEMAS DIGITALES","numReviews":"22","score":"7.5","link":"http://www.misprofesores.com/profesores/Federico-Jose-Kuhlmann-Rodriguez_10875"}},"credits":"8","schedule":"11:00-13:00","days":"MA,JU","classroom":"RH103","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"002","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"17:30-19:00","days":"LU,MI","classroom":"RHCC101","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"008","classType":"T","name":"PROBABILIDAD","teacher":{"name":"LUIS ANTONIO ANDRADE ROSAS","misProfesoresData":{"name":"LUIS ANTONIO ANDRADE ROSAS","department":"ECONOMIA","numReviews":"42","score":"6.0","link":"http://www.misprofesores.com/profesores/Luis-Antonio-Andrade-Rosas_35594"}},"credits":"8","schedule":"11:00-13:00","days":"MA,JU","classroom":"RHB-2","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"001","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"08:30-10:00","days":"LU,MI","classroom":"RHCC202","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"008","classType":"T","name":"PROBABILIDAD","teacher":{"name":"LUIS ANTONIO ANDRADE ROSAS","misProfesoresData":{"name":"LUIS ANTONIO ANDRADE ROSAS","department":"ECONOMIA","numReviews":"42","score":"6.0","link":"http://www.misprofesores.com/profesores/Luis-Antonio-Andrade-Rosas_35594"}},"credits":"8","schedule":"11:00-13:00","days":"MA,JU","classroom":"RHB-2","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"002","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"17:30-19:00","days":"LU,MI","classroom":"RHCC101","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"009","classType":"T","name":"PROBABILIDAD","teacher":{"name":"MARIA DE LOS DOLORES SANCHEZ CASTAÑEDA","misProfesoresData":{"name":"MARÍA DE LOS DOLORES SÁNCHEZ CASTAÑEDA","department":"ESTADÍSTICA","numReviews":"1","score":"9.0","link":"http://www.misprofesores.com/profesores/Maria-de-los-Dolores-Sanchez-Castaneda_90250"}},"credits":"8","schedule":"16:00-18:00","days":"MA,JU","classroom":"RH103","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"001","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"08:30-10:00","days":"LU,MI","classroom":"RHCC202","campus":"RIO HONDO","comments":""}],[{"department":"EST","key":"11101","groupNum":"009","classType":"T","name":"PROBABILIDAD","teacher":{"name":"MARIA DE LOS DOLORES SANCHEZ CASTAÑEDA","misProfesoresData":{"name":"MARÍA DE LOS DOLORES SÁNCHEZ CASTAÑEDA","department":"ESTADÍSTICA","numReviews":"1","score":"9.0","link":"http://www.misprofesores.com/profesores/Maria-de-los-Dolores-Sanchez-Castaneda_90250"}},"credits":"8","schedule":"16:00-18:00","days":"MA,JU","classroom":"RH103","campus":"RIO HONDO","comments":""},{"department":"IIO","key":"13180","groupNum":"001","classType":"T","name":"SIMULACION DE SISTEMAS","teacher":{"name":"ANA KARINA MIRANDA FLORES","misProfesoresData":{"name":"ANA BAZUA","department":"ECONOMÍA","numReviews":"10","score":"9.2","link":"http://www.misprofesores.com/profesores/Ana-Bazua_69646"}},"credits":"6","schedule":"07:00-08:30","days":"LU,MI","classroom":"RHPACE","campus":"RIO HONDO","comments":""},{"department":"COM","key":"14105","groupNum":"002","classType":"T","name":"ALGORITMOS NUM. POR COMPU.","teacher":{"name":"MARCELO CARLOS MEJIA OLVERA","misProfesoresData":{"name":"MARCELO MEJÍA","department":"COMPUTACIÓN","numReviews":"24","score":"7.6","link":"http://www.misprofesores.com/profesores/Marcelo-Mejia_17115"}},"credits":"6","schedule":"17:30-19:00","days":"LU,MI","classroom":"RHCC101","campus":"RIO HONDO","comments":""}]];



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


// Checks is given schedules overlap
var isTimeOutsideInterval = function (sTime1, eTime1, sTime2, eTime2) {
    return ((sTime1 > sTime2 && sTime1 >= eTime2) || (eTime1 <= sTime2 && eTime1 < eTime2));
};






function checkValidSet(set,filter) {

    var go = true;
    var i = 0;

    var laboratory,alternative;

    var misProfMinAvg,sum=0,avg=0,numRated=0;

    if(filter!= null && filter.hasOwnProperty('misProfMinAvgScore') && filter.misProfMinAvgScore!= null){
        misProfMinAvg = parseInt(filter.misProfMinAvgScore);
    }

    while(go && i<set.length){
        sum=0;
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
    if(sum>0){
        avg = sum/numRated;
        go = go && avg>=misProfMinAvg;
    }
    return go;
}

function sumScore(course){
    var score=0;
    if(course.hasOwnProperty('teacher') && course.teacher != null 
        && course.teacher.hasOwnProperty('misProfesoresData') && course.teacher.misProfesoresData!= null 
        && course.teacher.misProfesoresData.hasOwnProperty('score') && course.teacher.misProfesoresData.score!= null){
        score = parseInt(course.teacher.misProfesoresData.score);
    }
    return score;

}


// CHECK ALL

function checkAllFilters(courseObj,filterObj){
    var goodDays,goodTimes;
    goodDays = checkAvoidDay(courseObj,filterObj);
    goodTimes = checkAvoidHours(courseObj,filterObj);

    return goodDays && goodTimes;


}

// AVOID HOURS

// Checks if a single course is good against single avoid hours filter
function courseInValidHours(course,filtDays,filtHours){
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
function checkAvoidHours(course,filter){
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
function checkAvoidDay(course,filter){
    if (course== null || filter == null
        || filter.hasOwnProperty('avoidDay')==false 
            || filter.avoidDay instanceof Array == false 
                || filter.avoidDay.length == 0) return true;

    filtDays = filter.avoidDay;
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





var filter = {
    avoidDay: [], // EVITA CLASES EL DÍA VIERNES
    avoidHours: [
        {
            days: [7],//[TODOS LOS DÍAS]
            startTime: 15,
            endTime: 16
        },
        {
            days: [1,2], //[LUNES,MIÉRCOLES]
            startTime: 17, // 4 PM
            endTime: 18.5    // 6 PM
        }
    ],
     // DEPARTAMENTO-CLAVE-GRUPO
    misProfMinAvgScore: 5
};





var filtered = data.filter(function(set){
    return checkValidSet(set,filter);
});
console.log('Length data: '+ data.length +'\n'+'Length filtered: '+filtered.length);
//console.log(filtered);

