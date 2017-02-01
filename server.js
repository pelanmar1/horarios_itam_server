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
var cheerio = require('cheerio');
var request = require('request');
var async = require('async');
var ultimaActualizacion;
var estadoActualizacion;

var cronJob = require('cron').CronJob;
var trabajo = new cronJob({
    cronTime:'00 01 0 * * 1-7',
    onTick:function(){
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
                            alertMessage=alertMessage!='No puede extenderse la fecha de vencimiento.'?'Actualización exitosa.':alertMessage;
                            ultimaActualizacion = 'Ultima actualización: '+new Date().toLocaleString();
                            estadoActualizacion ='Informe de última actualización: '+alertMessage;
                        }

                    });
                }

            });
        });
    });


}




var screenScraping = require('./processing/screen_scraping/screen_scraping.js');
var schedule_generator = require('./processing/schedule_generator/schedule_gen.js');
