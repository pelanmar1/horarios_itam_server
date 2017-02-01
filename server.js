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
    ultimaActualizacion = require('./reservas.js').ultimaActualizacion;
    estadoActualizacion = require('./reservas.js').estadoActualizacion;
    ultimaActualizacion=ultimaActualizacion==null?'-':ultimaActualizacion;
    estadoActualizacion=estadoActualizacion==null?'-':estadoActualizacion;
    res.send(ultimaActualizacion+'<br>'+estadoActualizacion);
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

//Test
app.get('/actualizaReservas',function (req,res) {
    actualizaReservas();
    res.redirect('/');

});



var cheerio = require('cheerio');
var request = require('request');
var async = require('async');
var fs = require('fs');
var ultimaActualizacion = 'Por definir';
var estadoActualizacion = 'Por definir';

var cronJob = require('cron').CronJob;
//'00 01 0 * * 1-7'
//'00 20 8 * * 1-7'
var trabajo = new cronJob({
    cronTime:'00 00 0 * * 1-7',
    onTick:function(){
        console.log(ultimaActualizacion);
    actualizaReservas();},
    start:true,
    timeZone:'America/Mexico_City'
});
trabajo.start();
function actualizaReservas(){
    var principalURL = 'http://hammurabi.itam.mx/';
    const LOGIN_POST = '?func=login-session&local_base=LOCAL&login_source=&bor_id=147865&bor_verification=14786519951118&x=45&y=11';
    const PAG_RESERVAS_POST='func=bor-loan&adm_library=BRB50';
    const RESERVAS = 'http://hammurabi.itam.mx:80/F/L4S1K7ALSV4BACVH2NE7PMMT7AUK1Y54DB41XA5KBPD3UMVBXA-07955?func=BOR-LOAN-RENEW&doc_number=000192666&item_sequence=000470&adm_library=BRB50&token_id=8981171752927232&ill_unit=';

    // PREPARAMOS SESIÓN
    var session = Math.round(Math.random()*1000000000);
    var sessionURL ='http://hammurabi.itam.mx/F?RN='+session;
    var pagPrincipalURL = sessionURL+'func=bor-info&local_base=ACERVOITAM';
    var loginURL;
    var pagReservasURL;
    var librosPorReservarURL=[];
    async.map([pagPrincipalURL], function (target, callback) {
        request(target, function (err, response, body) {
            if (!err && response.statusCode === 200) {
                $ = cheerio.load(body);
                loginURL = $('form[name=form1]').attr('action').split('?')[0] + LOGIN_POST;
                request(loginURL, function (err, response, body) {
                    if (!err && response.statusCode === 200) {
                        $ = cheerio.load(body);
                        pagReservasURL = $('a').filter(function () {
                            return $(this).text().trim() === 'Préstamos';
                        }).attr('href').split('\'')[1];

                        request(pagReservasURL, function (err, response, body) {
                            if (!err && response.statusCode === 200) {
                                $ = cheerio.load(body);
                                var renglonesReservas = $('table[class=indent1]').find('tr');
                                renglonesReservas.each(function (item, i) {
                                    var tempURL =$(this).find('a').attr('href');
                                    if(tempURL!=null) {
                                        librosPorReservarURL.push(tempURL);
                                    }
                                })
                                callback(null, librosPorReservarURL);
                            } else {
                                callback(err, null);
                            }

                        });
                    } else {
                        callback(err, null);
                    }

                });
            } else {
                callback(err, null);
            }

        });
    },function (err, data) {
        if (err)
            return console.log(err.message);
        data = data[0];
        data.forEach(function (url,index) {
            request(url, function (err, response, body) {
                if (!err && response.statusCode === 200) {
                    $ = cheerio.load(body);
                    var reservaLibroPost = ($('table[class=indent1] tr').eq(2).find('td').eq(1).text().split(/<|>/)[1]+'').substring(7).trim();
                    request(reservaLibroPost, function (err, response, body) {
                        if (!err && response.statusCode === 200) {
                            $ = cheerio.load(body);
                            var alertMessage = $('td[class=feedbackbar]').text().trim();
                            var d = new Date();
                            var utc = d.getTime() - (d.getTimezoneOffset() * 60000);
                            var nd = new Date(utc + (3600000*6)).toLocaleString();
                            alertMessage=alertMessage==null?'Actualización exitosa.':alertMessage;
                            writeFile('Ultima actualización: '+nd,'Informe de última actualización: '+alertMessage);

                        }

                    });
                }

            });
        });
    });


}
var writeFile = function (fecha, estado) {
    var options = {flag: 'w'};
    var exports = 'module.exports.ultimaActualizacion = ultimaActualizacion;' +
                    'module.exports.estadoActualizacion = estadoActualizacion;';
    fs.truncate("./reservas.js", 0, function () {
        fs.writeFile('./reservas.js',
            'var ultimaActualizacion = ' +'\''+ fecha +'\';'+
            'var estadoActualizacion = ' +'\''+ estado+'\';'+exports, options,
            function (err) {
                if (err) {
                    console.error('Se presentó un problema al guardar los datos.');
                }
            }
        );
    });
};



var screenScraping = require('./processing/screen_scraping/screen_scraping.js');
var schedule_generator = require('./processing/schedule_generator/schedule_gen.js');
