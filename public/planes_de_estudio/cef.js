/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var cef = {
    name: "Contaduría Pública y Estrategia Financiera",
    planes: [
        {
            name: "cef_D",
            classes: [
                {
                    name: "Proceso Contable",
                    key: "CON-10001",
                    semester: 1
                }
                ,
                {
                    name: "Economía I",
                    key: "ECO-11101",
                    semester: 1
                }
                ,
                {
                    name: "Ideas e Instituciones Políticas y Sociales I",
                    key: "EGN-17121",
                    semester: 1
                }
                ,
                {
                    name: "Problemas de la Civilización Contemporánea I",
                    key: "EGN-17141",
                    semester: 1
                }
                ,
                {
                    name: "Introducción a las Matemáticas",
                    key: "MAT-11001",
                    semester: 1
                }
                ,
                {
                    name: "Estrategias de Comunicación Escrita",
                    key: "LEN-10131",
                    semester: 1
                }
                ,
                {
                    name: "Contabilidad Intermedia I",
                    key: "CON-10002",
                    pre: ["CON-10001"],
                    semester: 2
                }
                ,
                {
                    name: "Economía II",
                    key: "ECO-12102",
                    pre: ["ECO-11101"],
                    semester: 2
                }
                ,
                {
                    name: "Ideas e Instituciones Políticas y Sociales II",
                    key: "EGN-17122",
                    pre: ["EGN-17121"],
                    semester: 2
                }
                ,
                {
                    name: "Problemas de la Civilización Contemporánea II",
                    key: "EGN-17142",
                    pre: ["EGN-17141"],
                    semester: 2
                }
                ,
                {
                    name: "Estrategia de Negocios I",
                    key: "ADM-12107",
                    semester: 2
                }
                ,
                {
                    name: "Matemáticas I",
                    key: "MAT-11100",
                    pre: ["MAT-11001"],
                    semester: 2
                }
                ,
                {
                    name: "Herramientas Computacionales y Algoritmos",
                    key: "COM-16301",
                    semester: 2
                }
                ,
                {
                    name: "Contabilidad Intermedia II",
                    key: "CON-10003",
                    pre: ["CON-10002", "MAT-11100"],
                    semester: 3
                }
                ,
                {
                    name: "Economía III",
                    key: "ECO-11103",
                    pre: ["ECO-12102", "MAT-11100"],
                    semester: 3
                }
                ,
                {
                    name: "Introducción al Derecho Corporativo",
                    key: "DER-10016",
                    semester: 3
                }
                ,
                {
                    name: "Matemáticas II",
                    key: "MAT-11101",
                    pre: ["MAT-11100"],
                    semester: 3
                }
                ,
                {
                    name: "Estadística I",
                    key: "EST-10101",
                    pre: ["MAT-11100", "COM-16301"],
                    semester: 3
                }
                ,
                {
                    name: "Ideas e Instituciones Políticas y Sociales III(A)",
                    key: "EGN-17123",
                    pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                    semester: 3
                }
                ,
                {
                    name: "Combinación de Negocios",
                    key: "CON-10004",
                    pre: ["CON-10003", "DER-10016"],
                    semester: 4
                }
                ,
                {
                    name: "Economía IV",
                    key: "ECO-11104",
                    pre: ["ECO-11103"],
                    semester: 4
                }
                ,
                {
                    name: "Historia Sociopolítica de México",
                    key: "EGN-17161",
                    pre: ["EGN-17123"],
                    semester: 4
                }
                ,
                {
                    name: "Derecho Corporativo",
                    key: "DER-10026",
                    pre: ["DER-10016"],
                    semester: 4
                }
                ,
                {
                    name: "Matemáticas III",
                    key: "MAT-11310",
                    pre: ["MAT-11100"],
                    semester: 4
                }
                ,
                {
                    name: "Estadística II",
                    key: "EST-10102",
                    pre: ["EST-10101"],
                    semester: 4
                }
                ,
                {
                    name: "Contabilidad Internacional",
                    key: "CON-10106",
                    pre: ["CON-10004"],
                    semester: 5
                }
                ,
                {
                    name: "Régimen Laboral Mexicano",
                    key: "DER-10008",
                    pre: ["DER-10026"],
                    semester: 5
                }
                ,
                {
                    name: "Derecho Fiscal I",
                    key: "DER-17703",
                    pre: ["DER-10026"],
                    semester: 5
                }
                ,
                {
                    name: "Probl. de la Real. Mex. Contemp.",
                    key: "EGN-17162",
                    pre: ["EGN-17142", "EGN-17161"],
                    semester: 5
                }
                ,
                {
                    name: "Pronósticos de Negocios",
                    key: "ADM-11101",
                    pre: ["MAT-11310, EST-10102"],
                    semester: 5
                }
                ,
                {
                    name: "Finanzas I",
                    key: "ADM-15501",
                    pre: ["EST-10102", "ECO-11103"],
                    semester: 5
                }
                ,
                {
                    name: "Contabilidad de Costos(A)",
                    key: "CON-12001",
                    pre: ["DER-10008", "CON-10003"],
                    semester: 6
                }
                ,
                {
                    name: "Finanzas II",
                    key: "ADM-15502",
                    pre: ["ADM-15501", "ADM-11101"],
                    semester: 6
                }
                ,
                {
                    name: "Sistemas Empresariales",
                    key: "SDI-25916",
                    pre: ["COM-16301", "CON-10106"],
                    semester: 6
                }
                ,
                {
                    name: "Impuestos Corporativos I",
                    key: "CON-15001",
                    pre: ["DER-17703"],
                    semester: 6
                }
                ,
                {
                    name: "Modelado Computacional para Negocios",
                    key: "COM-16303",
                    pre: ["COM-16301", "ADM-15501"],
                    semester: 6
                }
                ,
                {
                    name: "Financieros",
                    key: "CON-10011",
                    pre: ["CON-10106", "ADM-15501"],
                    semester: 7
                }
                ,
                {
                    name: "Contraloría",
                    key: "CON-11013",
                    pre: ["SDI-25916", "CON-10004"],
                    semester: 7
                }
                ,
                {
                    name: "Estrategia y Control de Riesgos",
                    key: "CON-18002",
                    pre: ["ADM-15502"],
                    semester: 7
                }
                ,
                {
                    name: "Impuestos Corporativos II",
                    key: "CON-15002",
                    pre: ["CON-15001"],
                    semester: 7
                }
                ,
                {
                    name: "Costos para la Toma de Decisiones",
                    key: "CON-12002",
                    pre: ["ADM-11101", "CON-12001"],
                    semester: 7
                }
                ,
                {
                    name: "Finanzas III",
                    key: "ADM-15503",
                    pre: ["ADM-15502"],
                    semester: 7
                }
                ,
                {
                    name: "Análisis Financiero de la Empresa",
                    key: "CON-10005",
                    pre: ["CON-10011", "ADM-15501"],
                    semester: 8
                }
                ,
                {
                    name: "Auditoria de Estados Financieros",
                    key: "CON-11001",
                    pre: ["CON-11013", "SDI-25916"],
                    semester: 8
                }
                ,
                {
                    name: "Impuestos para Personas Físicas",
                    key: "CON-15003",
                    pre: ["CON-15002"],
                    semester: 8
                }
                ,
                {
                    name: "Administración Estratégica de Costos",
                    key: "CON-12003",
                    pre: ["CON-12002"],
                    semester: 8
                }
            ]
        }]
};