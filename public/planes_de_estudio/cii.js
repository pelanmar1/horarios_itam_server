/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var cii = {
    name: "Contaduría Pública e Ingeniería Industrial",
    planes: [
        {
            name: "cii_F",
            classes: [
                {
                    name: "Proceso Contable",
                    key: "CON-10001",
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
                    name: "Introducción a las Matemáticas Superiores",
                    key: "MAT-14001",
                    semester: 1
                }
                ,
                {
                    name: "Algoritmos y Programas",
                    key: "COM-11101",
                    semester: 1
                }
                ,
                {
                    name: "Geometría Analítica",
                    key: "MAT-14200",
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
                    name: "Estructura de Datos",
                    key: "COM-11102",
                    pre: ["COM-11101"],
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
                    name: "Cálculo Diferencial e Integral I",
                    key: "MAT-14100",
                    pre: ["MAT-14001"],
                    semester: 2
                }
                ,
                {
                    name: "Algebra Lineal I",
                    key: "MAT-14201",
                    pre: ["MAT-14001 Y MAT-14200"],
                    semester: 2
                }
                ,
                {
                    name: "Introducción a la Ingenieria",
                    key: "SDI-14105",
                    semester: 2
                }
                ,
                {
                    name: "Problemas de la Civilización Contemporánea I",
                    key: "EGN-17141",
                    semester: 2
                }
                ,
                {
                    name: "Contabilidad Intermedia II",
                    key: "CON-10003",
                    pre: ["CON-10002", "MAT-14100"],
                    semester: 3
                }
                ,
                {
                    name: "Desarrollo de Aplicaciones Informáticas",
                    key: "COM-16203",
                    pre: ["COM-11102"],
                    semester: 3
                }
                ,
                {
                    name: "Cálculo Diferencial e Integral II",
                    key: "MAT-14101",
                    pre: ["MAT-14100 Y MAT-14200"],
                    semester: 3
                }
                ,
                {
                    name: "Elementos de Física",
                    key: "SDI-11120",
                    pre: ["MAT-14200"],
                    semester: 3
                }
                ,
                {
                    name: "Estrategía de Negocios I",
                    key: "ADM-12107",
                    semester: 3
                }
                ,
                {
                    name: "Problemas de la Civilización Contemporánea II",
                    key: "EGN-17142",
                    pre: ["EGN-17141"],
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
                    pre: ["CON-10003"],
                    semester: 4
                }
                ,
                {
                    name: "Economía I",
                    key: "ECO-11101",
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
                    name: "Introducción Derecho Corporativo",
                    key: "DER-10016",
                    semester: 4
                }
                ,
                {
                    name: "Cálculo Diferencial e Integral III",
                    key: "MAT-14102",
                    pre: ["MAT-14101 Y MAT-14201"],
                    semester: 4
                }
                ,
                {
                    name: "Fundamentos de Química",
                    key: "IIO-15130",
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
                    name: "Economía II",
                    key: "ECO-12102",
                    pre: ["ECO-11101"],
                    semester: 5
                }
                ,
                {
                    name: "Derecho Corporativo",
                    key: "DER-10026",
                    pre: ["DER-10016"],
                    semester: 5
                }
                ,
                {
                    name: "Ciencias de los Materiales",
                    key: "IIO-15140",
                    pre: ["IIO-15130"],
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
                    name: "Probabilidad",
                    key: "EST-11101",
                    pre: ["MAT-14101"],
                    semester: 5
                }
                ,
                {
                    name: "Economía III",
                    key: "ECO-11103",
                    pre: ["ECO-12102 Y MAT-14100"],
                    semester: 6
                }
                ,
                {
                    name: "Inferencia Estadística",
                    key: "EST-11102",
                    pre: ["MAT-14102 Y EST-11101"],
                    semester: 6
                }
                ,
                {
                    name: "Derecho Fiscal I",
                    key: "DER-17703",
                    pre: ["DER-10026"],
                    semester: 6
                }
                ,
                {
                    name: "Diseño Asistido por Computadora",
                    key: "IIO-15170",
                    pre: ["SDI-11120"],
                    semester: 6
                }
                ,
                {
                    name: "Régimen Laboral Mexicano",
                    key: "DER-10008",
                    pre: ["DER-10026"],
                    semester: 6
                }
                ,
                {
                    name: "Economía IV",
                    key: "ECO-11104",
                    pre: ["ECO-11103"],
                    semester: 7
                }
                ,
                {
                    name: "Planeación y Control de la Producción",
                    key: "IIO-14161",
                    pre: ["EST-11101"],
                    semester: 7
                }
                ,
                {
                    name: "Modelado y Optimización I",
                    key: "IIO-13150",
                    pre: ["MAT-14201 Y MAT-14101"],
                    semester: 7
                }
                ,
                {
                    name: "Estructuras, Procesos y Comportamiento Org. I",
                    key: "ADM-14405",
                    pre: ["ADM-12107 Y SDI-14105"],
                    semester: 7
                }
                ,
                {
                    name: "Impuestos Corporativos I",
                    key: "CON-15001",
                    pre: ["DER-17703"],
                    semester: 7
                }
                ,
                {
                    name: "Contabilidad de Costos(A)",
                    key: "CON-12001",
                    pre: ["DER-10008 Y CON-10003"],
                    semester: 7
                }
                ,
                {
                    name: "Pronósticos de Negocios",
                    key: "ADM-11101",
                    pre: ["MAT-14102 Y EST-11102"],
                    semester: 7
                }
                ,
                {
                    name: "Diseño de Planta",
                    key: "IIO-14160",
                    pre: ["IIO-13150"],
                    semester: 8
                }
                ,
                {
                    name: "Algoritmos Numéricos por Computadora",
                    key: "COM-14105",
                    pre: ["COM-16203 Y MAT-14102"],
                    semester: 8
                }
                ,
                {
                    name: "Costos para la Toma de Decisiones",
                    key: "CON-12002",
                    pre: ["ADM-11101 Y CON-12001"],
                    semester: 8
                }
                ,
                {
                    name: "Impuestos Corporativos II",
                    key: "CON-15002",
                    pre: ["CON-15001"],
                    semester: 8
                }
                ,
                {
                    name: "Finanzas I",
                    key: "ADM-15501",
                    pre: ["EST-11102 Y ECO-11103"],
                    semester: 8
                }
                ,
                {
                    name: "Modelado y Optimización II",
                    key: "IIO-13160",
                    pre: ["MAT-14102, EST-11101", "IIO-13150"],
                    semester: 8
                }
                ,
                {
                    name: "Automatización y Control de Procesos",
                    key: "IIO-12170",
                    pre: ["COM-16203"],
                    semester: 9
                }
                ,
                {
                    name: "Logistica y Distribución",
                    key: "IIO-14170",
                    pre: ["IIO-13150 Y IIO-14161"],
                    semester: 9
                }
                ,
                {
                    name: "Finanzas II",
                    key: "ADM-15502",
                    pre: ["ADM-15501 Y ADM-11101"],
                    semester: 9
                }
                ,
                {
                    name: "Mercadotecnia",
                    key: "ADM-16601",
                    pre: ["ADM-12107 Y EST-11101"],
                    semester: 9
                }
                ,
                {
                    name: "Impuestos para Personas Físicas",
                    key: "CON-15003",
                    pre: ["CON-15002"],
                    semester: 9
                }
                ,
                {
                    name: "Administración Estrategica de Costos",
                    key: "CON-12003",
                    pre: ["CON-12002"],
                    semester: 9
                }
                ,
                {
                    name: "Sistemas Empresariales",
                    key: "SDI-25916",
                    pre: ["COM-11101 Y CON-10106"],
                    semester: 9
                }
                ,
                {
                    name: "Contraloría",
                    key: "CON-11013",
                    pre: ["SDI-25916 Y CON-10004"],
                    semester: 10
                }
                ,
                {
                    name: "Procesos de Manufactura I",
                    key: "IIO-15150",
                    pre: ["IIO-15140"],
                    semester: 10
                }
                ,
                {
                    name: "Contabilización y Valuación de Instrumentos Fin.",
                    key: "CON-10011",
                    pre: ["CON-10106 Y ADM-15501"],
                    semester: 10
                }
                ,
                {
                    name: "Diseño y Desarrollo de Producto",
                    key: "IIO-12180",
                    pre: ["IIO-15170 Y ADM-16601"],
                    semester: 10
                }
                ,
                {
                    name: "Simulación de Sistemas",
                    key: "IIO-13180",
                    pre: ["COM-16203 Y EST-11101"],
                    semester: 10
                }
                ,
                {
                    name: "Ingenieria y Control de Calidad",
                    key: "IIO-14162",
                    pre: ["EST-11102"],
                    semester: 10
                }
                ,
                {
                    name: "Seminario de Titulación I",
                    key: "IIO-16180",
                    semester: 10
                }
                ,
                {
                    name: "Auditoría de Estados Financieros",
                    key: "CON-11001",
                    pre: ["CON-11013 Y SDI 25916"],
                    semester: 11
                }
                ,
                {
                    name: "Análisis Financiero de la Empresa",
                    key: "CON-10005",
                    pre: ["ADM-15501", "CON-10011"],
                    semester: 11
                }
                ,
                {
                    name: "Administración y Evaluación de Proyectos",
                    key: "IIO-14180",
                    pre: ["EST-11101"],
                    semester: 11
                }
                ,
                {
                    name: "Ingenieria de Procesos de Negocios",
                    key: "IIO-14193",
                    pre: ["IIO-13180 Y IIO-14161"],
                    semester: 11
                }
                ,
                {
                    name: "Estrategia y Control de Riesgos",
                    key: "CON-18002",
                    pre: ["ADM-15502"],
                    semester: 11
                }
                ,
                {
                    name: "Finanzas III",
                    key: "ADM-15503",
                    pre: ["ADM-15502"],
                    semester: 11
                }
            ]
        }

    ]
};