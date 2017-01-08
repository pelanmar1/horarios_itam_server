/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */


var cpd = {
    name: "Contaduría Pública y Derecho",
    planes: [
        {
            name: "cpd_E",
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
                    name: "Introducción a las Matemáticas",
                    key: "MAT-11001",
                    semester: 1
                }
                ,
                {
                    name: "Teoría del Derecho I",
                    key: "DER-11101",
                    semester: 1
                }
                ,
                {
                    name: "Seminario Teoría del Derecho I",
                    key: "DER-11101",
                    semester: 1
                }
                ,
                {
                    name: "Instituciones de Derecho Romano",
                    key: "DER-12102",
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
                    name: "Ideas e Instituciones Políticas y Sociales II",
                    key: "EGN-17122",
                    pre: ["EGN-17121"],
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
                    name: "Teoría del Derecho II",
                    key: "DER-11202",
                    pre: ["DER-11101"],
                    semester: 2
                }
                ,
                {
                    name: "Negocio Jurídico y Personas",
                    key: "DER-13203",
                    pre: ["DER-11101"],
                    semester: 2
                }
                ,
                {
                    name: "Inv. y Redacción Jurídica",
                    key: "DER-11203",
                    pre: ["DER-11101", "LEN-10131"],
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
                    pre: ["CON-10002", "MAT-11100"],
                    semester: 3
                }
                ,
                {
                    name: "Economía I",
                    key: "ECO-11101",
                    semester: 3
                }
                ,
                {
                    name: "Herramientas Computacionales y Algoritmos",
                    key: "COM-16301",
                    semester: 3
                }
                ,
                {
                    name: "Argumentación Oral y Escrita",
                    key: "DER-11304",
                    pre: ["DER-11203"],
                    semester: 3
                }
                ,
                {
                    name: "Bienes y Derechos Reales",
                    key: "DER-13302",
                    pre: ["DER-13203"],
                    semester: 3
                }
                ,
                {
                    name: "Historia del Derecho Mexicano",
                    key: "DER-12202",
                    pre: ["DER-11202", "DER-11203"],
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
                    name: "Combinación de Negocios",
                    key: "CON-10004",
                    pre: ["CON-10003"],
                    semester: 4
                }
                ,
                {
                    name: "Economía II",
                    key: "ECO-12102",
                    pre: ["ECO-11101"],
                    semester: 4
                }
                ,
                {
                    name: "Estrategia de Negocios I",
                    key: "ADM-12107",
                    semester: 4
                }
                ,
                {
                    name: "Matemáticas II",
                    key: "MAT-11101",
                    pre: ["MAT-11100"],
                    semester: 4
                }
                ,
                {
                    name: "Obligaciones",
                    key: "DER-13403",
                    pre: ["DER-13302"],
                    semester: 4
                }
                ,
                {
                    name: "Teoría Política Clásica I",
                    key: "CSO-11011",
                    pre: ["DER-11101"],
                    semester: 4
                }
                ,
                {
                    name: "Ideas e Instituciones Políticas y Sociales III",
                    key: "EGN-17123",
                    pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                    semester: 4
                }
                ,
                {
                    name: "Economía III",
                    key: "ECO-11103",
                    pre: ["MAT-11100", "ECO-12102"],
                    semester: 5
                }
                ,
                {
                    name: "Matemáticas III",
                    key: "MAT-11310",
                    pre: ["MAT-11100"],
                    semester: 5
                }
                ,
                {
                    name: "Estadística I",
                    key: "EST-10101",
                    pre: ["MAT-11100", "COM-16301"],
                    semester: 5
                }
                ,
                {
                    name: "Contratos",
                    key: "DER-13504",
                    pre: ["DER-13403"],
                    semester: 5
                }
                ,
                {
                    name: "Derecho Mercantil I",
                    key: "DER-16501",
                    pre: ["DER-13403"],
                    semester: 5
                }
                ,
                {
                    name: "Teoría Política Clásica II",
                    key: "CSO-11012",
                    pre: ["CSO-11011"],
                    semester: 5
                }
                ,
                {
                    name: "Historia Sociopolítica de México",
                    key: "EGN-17161",
                    pre: ["EGN-17123"],
                    semester: 5
                }
                ,
                {
                    name: "Economía IV",
                    key: "ECO-11104",
                    pre: ["ECO-11103"],
                    semester: 6
                }
                ,
                {
                    name: "Estadística II",
                    key: "EST-10102",
                    pre: ["EST-10101"],
                    semester: 6
                }
                ,
                {
                    name: "Derecho Constitucional I",
                    key: "DER-15402",
                    pre: ["DER-11304"],
                    semester: 6
                }
                ,
                {
                    name: "Familia y Sucesiones",
                    key: "DER-13614",
                    pre: ["DER-13504"],
                    semester: 6
                }
                ,
                {
                    name: "Derecho Mercantil II",
                    key: "DER-16602",
                    pre: ["DER-16501"],
                    semester: 6
                }
                ,
                {
                    name: "Teorías del Delito",
                    key: "DER-14402",
                    pre: ["DER-11304"],
                    semester: 6
                }
                ,
                {
                    name: "Problemas de la Realidad Mexicana Contemporánea",
                    key: "EGN-17162",
                    pre: ["EGN-17161", "EGN-17142"],
                    semester: 6
                }
                ,
                {
                    name: "Contabilidad Internacional",
                    key: "CON-10106",
                    pre: ["CON-10004"],
                    semester: 7
                }
                ,
                {
                    name: "Derecho Laboral I",
                    key: "DER-19501",
                    pre: ["DER-13504"],
                    semester: 7
                }
                ,
                {
                    name: "Prónosticos de Negocios",
                    key: "ADM-11101",
                    pre: ["EST-10102", "MAT-11310"],
                    semester: 7
                }
                ,
                {
                    name: "Finanzas I",
                    key: "ADM-15501",
                    pre: ["EST-10102", "ECO-11103"],
                    semester: 7
                }
                ,
                {
                    name: "Derecho Constitucional II",
                    key: "DER-15505",
                    pre: ["DER-15402"],
                    semester: 7
                }
                ,
                {
                    name: "Derecho Internacional Público",
                    key: "DER-18701",
                    pre: ["DER-13403"],
                    semester: 7
                }
                ,
                {
                    name: "Delitos",
                    key: "DER-14505",
                    pre: ["DER-14402"],
                    semester: 7
                }
                ,
                {
                    name: "Contabilidad de Costos",
                    key: "CON-12001",
                    pre: ["CON-10003", "DER-19501"],
                    semester: 8
                }
                ,
                {
                    name: "Finanzas II",
                    key: "ADM-15502",
                    pre: ["ADM-15501", "ADM-11101"],
                    semester: 8
                }
                ,
                {
                    name: "Derecho Administrativo I",
                    key: "DER-17601",
                    pre: ["DER-15505"],
                    semester: 8
                }
                ,
                {
                    name: "Teoría General del Proceso",
                    key: "DER-13406",
                    pre: ["DER-15505"],
                    semester: 8
                }
                ,
                {
                    name: "Derecho Constitucional III",
                    key: "DER-15506",
                    pre: ["DER-15505"],
                    semester: 8
                }
                ,
                {
                    name: "Análisis Económico del Derecho II",
                    key: "ECO-14208",
                    pre: ["ECO-11104"],
                    semester: 8
                }
                ,
                {
                    name: "Modelado Computacional para Negocios",
                    key: "COM-16303",
                    pre: ["COM-16301", "ADM-15"],
                    semester: 8
                }
                ,
                {
                    name: "Derecho Fiscal I",
                    key: "DER-17703",
                    pre: ["DER-17601"],
                    semester: 9
                }
                ,
                {
                    name: "Costos para la Toma de Decisiones",
                    key: "CON-12002",
                    pre: ["CON-12001", "ADM-11101"],
                    semester: 9
                }
                ,
                {
                    name: "Finanzas III",
                    key: "ADM-15503",
                    pre: ["ADM-15502"],
                    semester: 9
                }
                ,
                {
                    name: "Derecho Administrativo II",
                    key: "DER-17702",
                    pre: ["DER-17601"],
                    semester: 9
                }
                ,
                {
                    name: "Procedimientos Civiles y Mercantiles",
                    key: "DER-13607",
                    pre: ["DER-13406"],
                    semester: 9
                }
                ,
                {
                    name: "Derecho Procesal Penal",
                    key: "DER-14603",
                    pre: ["DER-14505", "DER-13406"],
                    semester: 9
                }
                ,
                {
                    name: "Contabilización y Valuación de Instrumentos Financieros",
                    key: "CON-10011",
                    pre: ["CON-10106", "ADM-15501"],
                    semester: 10
                }
                ,
                {
                    name: "Administración Estratégica de Costos",
                    key: "CON-12003",
                    pre: ["CON-12002"],
                    semester: 10
                }
                ,
                {
                    name: "Procedimientos Constitucionales",
                    key: "DER-15704",
                    pre: ["DER-15506, DER-13607", "DER-14603"],
                    semester: 10
                }
                ,
                {
                    name: "Derecho Internacional Privado",
                    key: "DER-18802",
                    pre: ["DER-13607"],
                    semester: 10
                }
                ,
                {
                    name: "Estrategia y Control de Riesgos",
                    key: "CON-18002",
                    pre: ["ADM-15502"],
                    semester: 10
                }
                ,
                {
                    name: "Impuestos Corporativos I",
                    key: "CON-15001",
                    pre: ["DER-17703"],
                    semester: 10
                }
                ,
                {
                    name: "Contraloría",
                    key: "CON-11013",
                    pre: ["CON-10004"],
                    semester: 11
                }
                ,
                {
                    name: "Técnicas de Argumentación Jurídica",
                    key: "DER-11907",
                    pre: ["ECO-14208", "DER-13607"],
                    semester: 11
                }
                ,
                {
                    name: "Derecho Fiscal II",
                    key: "DER-17804",
                    pre: ["DER-17703"],
                    semester: 11
                }
                ,
                {
                    name: "Derecho Mercantil III",
                    key: "DER-16702",
                    pre: ["DER-16602"],
                    semester: 11
                }
                ,
                {
                    name: "Derecho Laboral II",
                    key: "DER-19602",
                    pre: ["DER-19501"],
                    semester: 11
                }
                ,
                {
                    name: "Impuestos Corporativos II",
                    key: "CON-15002",
                    pre: ["CON-15001"],
                    semester: 11
                }
                ,
                {
                    name: "Impuestos para Personas Físicas",
                    key: "CON-15003",
                    pre: ["CON-15002"],
                    semester: 12
                }
                ,
                {
                    name: "Auditoría de Estados Financieros",
                    key: "CON-11001",
                    pre: ["CON-11013"],
                    semester: 12
                }
                ,
                {
                    name: "Análisis Financiero de la Empresa",
                    key: "CON-10005",
                    pre: ["CON-10011", "ADM-15501"],
                    semester: 12
                }
                ,
                {
                    name: "Filosofía del Derecho",
                    key: "DER-11805",
                    pre: ["DER-13607"],
                    semester: 12
                }
            ]
        }]
};