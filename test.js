var async = require('async');
var screenScraping = require('./processing/screen_scraping/screen_scraping.js');
var schedule_generator = require('./processing/schedule_generator/schedule_gen.js');

var namesToCourses = function(inputCourses,next){
    var courses = [];
    var url;
    async.map(inputCourses, function (target, callback) {
    url =screenScraping.createCourseURL(target);
    screenScraping.scheduleTableScraping(url,function (data) {
        if(data!=null && data.length>0)
            courses.push(data);
        callback(null,courses)
    });

    }, function (err, data) {
        if (err)
            return console.log(err.message);
        next(data[0]);
    });
    
}


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


var allCourses = ["ACT-11300-CALCULO ACTUARIAL I","ACT-11301-CALCULO ACTUARIAL II","ACT-11302-CALCULO ACTUARIAL III","ACT-11303-MODELOS ACTUARIALES","ACT-13307-ESTAD. APLICADA A LA ACTUARIA","ACT-14308-SEMINARIO DE INVESTIGACION ACT","ACT-15352-PLANES DE BENEFICIOS","ACT-15353-PRACTICA ACTUAR. Y MARCO INST.","ACT-15354-MATEMATICA DEMOGRAFICA","ACT-15357-PRINCIPIOS DEL SEGURO","ACT-15358-SISTEMAS DE SEGUROS","ACT-22305-MATEMATICAS FINANCIERAS I","ACT-22306-MATEMATICAS FINANCIERAS II","ACT-22309-MATEMATICAS FINANCIERAS, III","ACT-25354-ADMON. CUANTITATIVA DE RIESGOS","ADM-11002-INNOV Y DISEÑO DE MODEL DE NEG","ADM-11007-SEMIN. DE INVESTI. ADMVA. I","ADM-11008-SEMINARIO DE CASOS","ADM-11012-GLOBALIZAC Y EMPRESA MULTINAC.","ADM-11013-ADMON. INTERNACIONAL","ADM-11017-METODOS DE PRONOSTICO","ADM-11018-SEMINARIO DE DIRECCION","ADM-11101-PRONOSTICOS DE NEGOCIOS","ADM-12022-ESTRATEGIA GLOBAL","ADM-12092-CONSULTORIA (OP)","ADM-12103-ESTRATEGIA EMPRESARIAL","ADM-12107-ESTRATEGIA DE NEGOCIOS I","ADM-12108-ESTRATEGIA DE NEGOCIOS II","ADM-12251-PLANEAC. Y EJECUCION DE ESTRAT","ADM-13101-DESARROLLO EMPRESARIAL","ADM-13106-FINANZAS EMPRENDEDORAS","ADM-13115-ADMON. DE EMPRESAS FAMILIARES","ADM-14401-COMPORTAMIENTO HUMANO, I","ADM-14402-COMPORTAMIENTO HUMANO, II","ADM-14405-ESTRUC.,PROC. Y COMPORT.ORG I","ADM-14413-DESAR. DE HABILID. GERENCIALES","ADM-15501-FINANZAS, I","ADM-15502-FINANZAS, II","ADM-15503-FINANZAS.,III","ADM-15507-FUNDAMENTOS DE FINANZAS","ADM-15510-INVERSIONES","ADM-15514-ADMON. DE PORTAF. DE INVERSION","ADM-15517-METODOS EMPIRICOS EN FINANZAS","ADM-15522-TEORIA DE LAS FINANZAS","ADM-15528-INSTRUMENTOS FINANCIEROS","ADM-15531-MERCADOS E INSTITUCS. FINANCS.","ADM-15532-FINANZAS CORPORATIVAS","ADM-15533-MODELOS FINANCIEROS I","ADM-15534-MODELOS FINANCIEROS II","ADM-15535-DERIVADOS","ADM-15571-RENTA FIJA","ADM-15582-FINZS. CORPORA. AVANZADAS","ADM-15585-CAPITAL PRIVADO","ADM-15630-FINANCIAMIENTO DE PROYECTOS","ADM-16601-MERCADOTECNIA, I","ADM-16602-MERCADOTECNIA, II","ADM-16603-MERCADOTECNIA.,III","ADM-16610-INVESTIGACION DE MERCADOS","ADM-16699-ADM. DE LA RELAC. CON CLIENTES","ADM-16700-MERCADOTECNIA DIGITAL","CLE-10102-REDACCION INTENSIVA","CLE-10103-REDACCION AVANZADA","CLE-10201-INGLES INTENSIVO","CLE-10202-INGLES AVANZADO","CLE-10242-INGLES PARA NEGOCIOS","CLE-10251-INGLES TOEFL","CLE-10311-FRANCES, I","CLE-10312-FRANCES II","CLE-10331-ALEMAN, I","CLE-10332-ALEMAN, II","CLE-10341-JAPONES I","CLE-10342-JAPONES, II","CLE-10516-COMMUNICATION IN SPANISH I","CLE-10517-COMMUNICATION IN SPANISH II","CLE-10601-TALLER DE TECNICAS DE ESTUDIO","CLE-10603-ESTUDIA CON EXITO EN EL ITAM","COM-11101-ALGORITMOS Y PROGRAMAS","COM-11102-ESTRUCTURAS DE DATOS","COM-11103-ESTRUCTURAS DE DATOS AVANZADAS","COM-11107-ORG. Y PROGRAM.DE COMPUTADORAS","COM-11302-ALGORITMICA Y PROGRAMACION","COM-11304-PROGRAMACION AVANZADA","COM-11305-PROGRAMACION COMPETITIVA","COM-12101-BASES DE DATOS","COM-14105-ALGORITMOS NUM. POR COMPU.","COM-14106-GRAFICAS POR COMPUTADORA","COM-16203-DES. DE APLICACS. INFORMATICAS","COM-16301-HERRAMIENTAS COMPU. Y ALGORIT.","COM-16302-MET. COMPU. PARA ECO. Y FINANZ","COM-16303-MODELADO COMPUT. PARA NEGOCIOS","COM-16401-COMPUTACION I, INTENSIVA","COM-16402-COMPUTACION, II","COM-16410-PROCESOS DE NEGOCIO","COM-16412-HERR. COMP. Y PROD. EMPRESAR.","COM-16413-INTELIGENCIA DE NEGOCIOS","COM-16414-APLIC. TI EN LOS NEGOCIOS","COM-22104-INGENIERIA DE SOFTWARE","COM-23106-MINERIA DE DATOS","COM-23701-APRENDIZAJE DE MAQUINA","CON-10001-PROCESO CONTABLE","CON-10002-CONTABILIDAD INTERMEDIA, I","CON-10003-CONTABILIDAD INTERMEDIA, II","CON-10004-COMBINACION DE NEGOCIOS","CON-10005-ANAL. FINANCIERO DE LA EMPRESA","CON-10007-FUENTES DE INVER. Y FINANCIAM.","CON-10011-CONT.Y VALUAC. DE INSTR. FINAN","CON-10100-CONTABILIDAD, I","CON-10106-CONTABILIDAD INTERNACIONAL","CON-11001-AUDITORIA DE ESTADOS FINANCS.","CON-11013-CONTRALORIA","CON-12001-CONTABILIDAD DE COSTOS","CON-12002-COSTOS PARA TOMA DE DECISIONES","CON-12003-ADMON. ESTRATEGICA DE COSTOS","CON-12110-CONTABILIDAD DE COSTOS P/ING.","CON-14100-CONTABILIDAD ADMINISTRATIVA, I","CON-14101-CONTABILIDAD ADMINISTRATIVA,II","CON-14109-CONTABILIDAD GERENCIAL","CON-15001-IMPUESTOS CORPORATIVOS, I","CON-15002-IMPUESTOS CORPORATIVOS, II","CON-15003-IMPUESTOS P/ PERSONAS FISICAS","CON-15125-CONTABILIDAD FISCAL","CON-18001-PLANE.ESTRAT. Y CONTROL PRESUP","CON-18002-ESTR. Y CONTROL DE RIESGOS FIN","CON-24112-ESTRATEGIAS ADMINISTRATIVAS","CSO-10001-INTRO. A LA CIENCIA POLITICA","CSO-10003-SEMINARIO DE ANALISIS POLITICO","CSO-11011-TEORIA POLITICA CLASICA, I","CSO-11012-TEORIA POLITICA CLASICA, II","CSO-11021-TEORIA POLITICA CONTEMPORANEA","CSO-12013-HISTORIA POLITICA CONTEMPORAN.","CSO-12041-HISTORIA DE MEXICO, I","CSO-12042-HISTORIA DE MEXICO,II","CSO-12049-HISTORIA DE MEXICO III","CSO-13041-POL. MEXICANA CONTEMPORANEA","CSO-14021-POLITICA COMPARADA,I","CSO-14041-POLITICA COMPARADA,II","CSO-14042-POLITICA COMPARADA III","CSO-14045-POLITICA Y GOBIERNO DE MEXICO","CSO-14051-OPINION PUBLICA","CSO-15021-ELECCION PUBLICA,I","CSO-15022-ELECCION PUBLICA,II","CSO-15024-ELECCION PUBLICA III","CSO-15041-ECONOMIA POLITICA, I","CSO-15043-ECONOMIA POLITICA II","CSO-15074-CABILDEO Y NEGOCIAC. POLITICA","CSO-16042-POLITICAS PUBLICAS, I","CSO-16047-POLITICA EDUCATIVA","CSO-17041-METODOS DE INVEST. APLICADA","CSO-17042-METODOL. POL. AVANZADA","CSO-17051-INVESTIG CUANTITATIVA APLICADA","CSO-18045-SISTS. DE INTELIGENCIA ESTRATE","CSO-19081-SEMINARIO DE INV. POLITICA  A","CSO-19082-SEMINARIO DE INV. POLITICA B","CSO-19084-SEMINARIO DE INV. POLITICA D","CSO-19085-SEMINARIO DE INV. POLITICA E","CSO-19088-SEMINARIO DE INV. POLITICA H","DER-10003-INST. DE DERECHO PUB. MEX.,I","DER-10005-DER. INTERNACIONAL PUBLICO,I","DER-10006-DER. INTERNACIONAL PUBLICO,II","DER-10008-REGIMEN LABORAL MEXICANO","DER-10010-REGIMEN FISCAL MEXICANO (ADM)","DER-10011-REGIMEN FISCAL MEXICANO (CP)","DER-10013-FUNDAMENTOS JURIDICOS","DER-10015-DERECHO EMPRESARIAL","DER-10016-INTROD. AL DERECHO CORPORATIVO","DER-10017-CONTRATOS FINANC. COMPARADOS","DER-10018-DERECHO EMPRESARIAL I","DER-10019-DERECHO EMPRESARIAL II","DER-10021-DERECHO EMPRESARIAL III","DER-10026-DERECHO CORPORATIVO","DER-10113-DERECHO PUBLICO","DER-11013-SEM.FIL.DER. GARCIA MAYNEZ (OP","DER-11025-COMMON LAW SYSTEM: SOURCES","DER-11101-TEORIA DEL DERECHO, I","DER-11202-TEORIA DEL DERECHO II","DER-11203-INVESTIG. Y REDACCION JURIDICA","DER-11304-ARGUMENTAC. ORAL Y ESCRITA","DER-11805-FILOSOFIA DEL DERECHO","DER-11907-TECNICAS DE ARGUM. JURID.","DER-12102-INSTITUCS. DE DERECHO ROMANO","DER-12202-HISTORIA DEL DERECHO MEXICANO","DER-13024-CLIN LEGAL CTRO ACCESO  JUSTIC","DER-13203-NEGOCIO JURIDICO Y PERSONAS","DER-13302-BIENES Y DERECHOS REALES","DER-13403-OBLIGACIONES","DER-13406-TEORIA GENERAL DEL PROCESO","DER-13504-CONTRATOS","DER-13607-PROCE. CIVILES Y MERCANTILES","DER-13614-FAMILIA Y SUCESIONES","DER-14012-CLIN. DE DER. PENAL ACUSATORIO","DER-14402-TEORIAS DEL DELITO","DER-14505-DELITOS","DER-14603-DERECHO PROCESAL PENAL","DER-15040-CLIN.CONTRA TRATA DE PERSONAS","DER-15402-DERECHO CONSTITUCIONAL,I","DER-15505-DERECHO CONSTITUCIONAL, II","DER-15506-DERECHO CONSTITUCIONAL, III","DER-15704-PROCEDIM. CONSTITUCIONALES","DER-16019-DERECHO DEL SIST. FINANCIERO","DER-16039-CLIN JUR P/ DES. EMPRESA LOCAL","DER-16041-CLINICA DE FUSIONES Y ADQUISIC","DER-16043-INTR.FISCALIDAD Y AL COMER INT","DER-16050-CORP. GOVER. FOR FAMILY ENTERP","DER-16051-ENTERPRISE, COMPET. AND CONSUM","DER-16501-DERECHO MERCANTIL, I","DER-16602-DERECHO MERCANTIL, II","DER-16702-DERECHO MERCANTIL III","DER-17045-CLIN. DES. SUSTENT. Y DER AMBI","DER-17601-DERECHO ADMINISTRATIVO I","DER-17702-DERECHO ADMINISTRATIVO II","DER-17703-DERECHO FISCAL I","DER-17804-DERECHO FISCAL II","DER-18028-REGIONAL TRADE AGREEMENTS","DER-18030-LAW AND GLOBAL GOVERNANCE","DER-18701-DERECHO INTERNACIONAL PUBLICO","DER-18802-DERECHO INTERNACIONAL PRIVADO","DER-19004-CLIN. MEJORA JUSTIC.LABORAL","DER-19501-DERECHO LABORAL I","DER-19602-DERECHO LABORAL II","ECO-10202-SEM. DE INVEST. ECONOMICA II","ECO-10204-SEMINARIO DE INV. ECONOMICA","ECO-10301-HISTORIA DEL ANALISIS ECO.","ECO-10506-ECONOMETR. Y ANALISIS DE DATOS","ECO-10516-MICROECONOMETRIA APLICADA","ECO-10517-MACROECONOMETRIA APLICADA","ECO-11101-ECONOMIA, I","ECO-11103-ECONOMIA, III","ECO-11104-ECONOMIA, IV","ECO-11121-MICROECONOMIA AVANZADA I","ECO-11122-MICROECONOMIA AVANZADA II","ECO-11221-ECONOMIA DE LA INCERTIDUMBRE","ECO-12102-ECONOMIA, II","ECO-12105-ECONOMIA, V","ECO-12121-MACROECONOMIA AVANZADA","ECO-12133-MACROECONOMIA INTERMEDIA","ECO-12201-TEORIA Y POLITICA MONETARIA","ECO-13101-ECONOMIA INTERNACIONAL, I","ECO-13102-ECONOMIA INTERNACIONAL, II","ECO-13121-TOPICOS DE COMER INT. Y DESARR","ECO-14207-ANAL. ECONOMICO DEL DERECHO I","ECO-14208-ANAL. ECON. DEL DER. II","ECO-14301-ORGANIZACION INDUSTRIAL","ECO-14303-ECONOMIA DE LA REGULACION","ECO-14501-ECONOMIA DE LA EMPRESA","ECO-15101-FINANZAS PUBLICAS","ECO-15110-EVALUACION DE PROYECTOS","ECO-15111-ECONOMIA POLITICA","ECO-15305-EDO,POL,ECO,SOC: REV HISTORICA","ECO-17100-HISTORIA ECONOMICA DE MEXICO","ECO-17103-SEMINARIO DE LA ECO. DE MEX.","ECO-18101-DESARROLLO ECONOMICO I","ECO-18300-CRECIMIENTO ECONOMICO","ECO-19211-ECONOMIA DE LOS ENERGETICOS","ECO-20514-MACROECONOMETRIA AVANZADA","ECO-21103-ECONOMIA III","ECO-21104-ECONOMÍA IV","ECO-21111-TEO. DEL PROD. Y CONSUMIDOR","ECO-21112-EQUILIBRIO GENERAL","ECO-22105-ECONOMIA V","ECO-22113-MACROECONOMIA DINAMICA II","EGN-11117-ETICA PARA COMPUTACION","EGN-11147-HISTORIA DEL ARTE EN MEXICO","EGN-11155-NVA VIS. HIST. MEX 1810-2000","EGN-17121-IDEAS E INST. POL. Y SOC. I","EGN-17122-IDEAS E INST. POL. Y SOC. II","EGN-17123-IDEAS E INST. POL. Y SOC. III","EGN-17141-PROB. DE LA CIV. CONTEMP., I","EGN-17142-PROB. DE LA CIV. CONTEMP., II","EGN-17161-HISTORIA SOC.-POL. DE MEXICO","EGN-17162-PROBLEMAS DE LA REALIDAD MEX.","EIN-11101-INT. A LAS R. INTERNACIONALES","EIN-12201-HIST. DE LAS RELACS. INTER. I","EIN-13104-METODOS DE INV. EN REL. INT.","EIN-13202-HISTORIA DE LAS R.I. II","EIN-14102-TEORIA DE LAS REL. INT.","EIN-14302-HISTORIA DE E.U.A.","EIN-15105-POL. DE LAS REL. ECONOM. INT.","EIN-15302-PROCESO POL. EN E.U.A.:DIMENS.","EIN-16402-EUROPA CONTEMPORANEA","EIN-16403-AMERICA LATINA","EIN-17303-RELACIONES MEXICO-E.U.A.-CANAD","EIN-17304-FORMUL. DE LA POL. EXT. DE MEX","EIN-17403-JAPON, CHINA Y EL SUDESTE ASIA","EIN-18602-SEMINARIO DE TITULACION","EIN-19135-SOC.CIVIL EN MEX: TEO. Y PRAC.","EIN-19405-INDIA CONT.UNA LECTURA CRITICA","EIN-19414-MEDIO ORIENTE","EIN-19536-POL. NAL. E INT DE CAMBIO CLIM","EIN-19545-VALORES, CULTURA Y DESARROLLO","EST-10101-ESTADISTICA.,I","EST-10102-ESTADISTICA.,II","EST-11101-PROBABILIDAD","EST-11102-INFERENCIA ESTADISTICA","EST-11103-ECONOMETRIA I","EST-11104-ECONOMETRIA","EST-13101-MET. ESTADIST. P/C.POL. Y R.I.","EST-14101-CALCULO DE PROBABILIDADES.,I","EST-14102-CALCULO DE PROBABILIDADES.,II","EST-14103-ESTADISTICA MATEMATICA","EST-14107-PROCESOS ESTOCASTICOS,I","EST-21104-FUNDAMENTOS DE ECONOMETRIA","EST-24101-ESTADISTICA NO PARAMETRICA(OP)","EST-24104-ESTADISTICA APLICADA, I","EST-24105-ESTADISTICA APLICADA, II","EST-24106-ESTADISTICA APLICADA, III","EST-24107-SIMULACION","EST-24118-PROCESOS ESTOCASTICOS (OP)","EST-25146-ECONOMET. FINANCIERA ACTUARIAL","IIO-12170-AUTOMAT. Y CONTROL DE PROCESOS","IIO-12180-DISEÑO Y DES. DE PRODUCTO","IIO-12190-MANUFACTURA INTEGRADA P/COMP.","IIO-13150-MODELADO Y OPTIMIZACION I","IIO-13160-MODELADO Y OPTIMIZACION II","IIO-13180-SIMULACION DE SISTEMAS","IIO-14160-DISEÑO DE PLANTA","IIO-14161-PLANEAC. Y CONTROL DE PRODUC.","IIO-14162-ING. Y CONTROL DE LA CALIDAD","IIO-14170-LOGISTICA Y DISTRIBUCION","IIO-14180-ADMON. Y EVALUA. DE PROYECTOS","IIO-14193-ING. DE PROCESOS DE NEGOCIOS","IIO-14260-ADMON. DE OPERACIONES, I","IIO-14270-ADMON. DE OPERACIONES, II","IIO-14278-ADMON. CADENA DE SUMINISTRO","IIO-15130-FUNDAMENTOS DE QUIMICA","IIO-15140-CIENCIAS DE LOS MATERIALES","IIO-15170-DISEÑO ASISTIDO POR COMPUTAD.","IIO-15183-DISEÑO DE MECANISM ROBOTICOS","IIO-16180-SEMINARIO DE TITULACION","LEN-10131-ESTRATEGIAS DE COMUNIC. ESCRIT","LEN-10132-SEM. DE COMUNICACION ESCRITA","LEN-15532-COMUN.ESCRITA PARA DIR. FINANC","LEN-17103-COMUNICAC. ESCRITA PARA ECONOM","MAT-10101-MET. CUANTITATIVOS PARA DER.","MAT-11100-MATEMATICAS, I","MAT-11101-MATEMATICAS, II","MAT-11310-MATEMATICAS, III","MAT-12100-CALCULO I","MAT-12101-CALCULO, II","MAT-12102-CALCULO, III","MAT-12210-SIST. DINAMICOS","MAT-12310-ALGEBRA MATRICIAL","MAT-14011-INTRO. A LAS MATEM.-MODULO I","MAT-14012-INTRO. A LAS MATEM.-MODULO II","MAT-14013-INTRO. A LAS MATEM.-MODULO III","MAT-14014-INTRO. A LAS MATEM.-MODULO IV","MAT-14015-INTRO. A LAS MATEM.-MODULO V","MAT-14100-CALCULO DIF. E INT., I","MAT-14101-CALCULO DIF. E INT., II","MAT-14102-CALCULO DIF. E INT., III","MAT-14200-GEOMETR. ANALIT. (GEOM ANAL I)","MAT-14201-ALGEB. LINEAL, I (GEO ANA. II)","MAT-14300-ALGEBRA SUPERIOR, I","MAT-14301-ALGEBRA SUPERIOR, II","MAT-14310-ALG. LINEAL, II (ALG. LINEAL)","MAT-14390-MATEMATICA COMPUTACIONAL","MAT-14400-CALCULO  NUMERICO,I","MAT-22600-MATEMATICAS FINANCIERAS I","MAT-24110-ANALISIS MATEMATICO, I","MAT-24111-ANALISIS MATEMATICO II","MAT-24150-TEMAS SELECTOS DE ANALISIS I","MAT-24210-SISTEMAS DINAMICOS,I","MAT-24211-SISTEMAS DINAMICOS,II","MAT-24311-ALGEBRA LINEAL AVANZADA","MAT-24410-PROGRAMACION LINEAL","MAT-24430-ANALISIS APLICADO, I","MAT-24431-OPTIMIZACION NUMERICA, I","MAT-24500-INVESTIGACION DE OPER.,I","MAT-24610-TEORIA DE JUEGOS (OP)","MAT-24630-MATEM. APLICADAS A LA ECONOMIA","MAT-24720-TEMAS SELECTOS DE MAT. APL. I","SDI-11120-ELEMENTOS DE FISICA","SDI-11221-ELEMENTOS DE ELECTRONICA","SDI-11322-CIRCUITOS LOGICOS","SDI-11911-ROBOTICA","SDI-12515-SEÑALES Y SISTEMAS","SDI-12726-COMUNICACIONES DIGITALES","SDI-12761-ANTENAS Y RADIACION","SDI-13739-TELEFONIA","SDI-13760-REDES DE COMPUTADORAS","SDI-13789-REDES CONVERGENTES","SDI-14105-INTRODUCCION A LA INGENIERIA","SDI-15816-SEMINARIO DE TITULACION","SDI-15888-SEMINARIO DE INVESTIGACION","SDI-21911-TEMAS SELECTOS DE ROBOTICA","SDI-24810-SISTS.DE COMERCIO ELECTRONICO","SDI-25916-SISTEMAS EMPRESARIALES"];

var courses = ["IIO-14161-PLANEAC. Y CONTROL DE PRODUC.","COM-11107-ORG. Y PROGRAM.DE COMPUTADORAS","SDI-13760-REDES DE COMPUTADORAS","MAT-14300-ALGEBRA SUPERIOR, I","IIO-14193-ING. DE PROCESOS DE NEGOCIOS","COM-14106-GRAFICAS POR COMPUTADORA"];
var postCourses = ["IIO-14161","COM-11107","SDI-13760","MAT-14300","IIO-14193","COM-14106"];

var x = {
    avoidHours: [
        {
            days: [2,4],//[TODOS LOS DÍAS]
            startTime: 16,
            endTime: 18
        }
    ]
    
};

/*
var availableGroups = namesToCourses(courses,function(data){
    var res = schedule_generator.getValidClassCombinations(data);
    var res2 = schedule_generator.filterClasses(data,x);
    console.log(res);
    console.log(res2.length)
})
*/






var x = {
    avoidHours: [
        {
            days: [2,4],//[TODOS LOS DÍAS]
            startTime: new Date(),
            endTime: new Date()
        }
    ]
    
};


var json1 = {"carreras":[{"name":"Ingeniería Industrial","planes":[{"name":"ind_F","index":21}],"enabled":true,"$$hashKey":"object:61"}],"courses":["COM-14105","IIO-15150","IIO-13180","EST-11101"],"filters":{"avoidDay":[],"avoidHours":[{"days":[1,3],"startTime":"2017-07-25T14:00:56.041Z","endTime":"2017-07-25T15:00:56.041Z","$$hashKey":"object:589"}],"mustHaveGroups":[]}};

var test1 = function(json){
    postCourses = json.courses;
    postFilters = json.filters;
    postFilters = formatAvoidHours(postFilters);
    combos = [];
    if(postCourses!=null && postCourses.length>0){
        screenScraping.courseNamesDDLScraping(function (courses) {   
            postCourses = cleanCourses(postCourses,courses,true);
            if(postCourses!=null && postCourses.length>0){
                namesToCourses(postCourses,function(finalCourses){
                    if(postFilters!=null){
                        finalFilters = postFilters;
                        if(postFilters.hasOwnProperty('mustHaveGroups') && postFilters.mustHaveGroups.length > 0){
                            finalFilters.mustHaveGroups =cleanCourses(postFilters.mustHaveGroups,courses,false);
                        }
                        if (finalFilters!=null){
                            console.log(JSON.stringify(finalFilters))
                            combos = schedule_generator.filterClasses(finalCourses,finalFilters);
                        }else{
                            combos = schedule_generator.getValidClassCombinations(finalCourses);
                            }
                    }
                    else{
                        combos = schedule_generator.getValidClassCombinations(finalCourses);
                    }
                    console.log('COMBOS: '+combos.length);
                        
                });
            }
            else{
                console.log("Los cursos ingresados no se encuentran disponibles este periodo.");
            }
            
            
            
        });

    }
}

var formatAvoidHours = function(filters){
    if (filters!=null){
        if (filters.hasOwnProperty('avoidHours') && filters.avoidHours!=null && filters.avoidHours.length>0){
            for (var i =0;i<filters.avoidHours.length;i++){
                var temp = filters.avoidHours[i];
                temp.startTime = formatHours(new Date(temp.startTime));
                temp.endTime = formatHours(new Date(temp.endTime));
                filters.avoidHours[i] = temp;
            }
        }
    }
    return filters;
}

var formatHours = function(dateObject){
    var hour = parseInt(dateObject.getHours());
    var minutes = parseInt(dateObject.getMinutes());
    if (minutes != 0)
        hour+=0.5
    return hour
}

test1(json1);