/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var adm = {
    name: "Administración",
    planes: [

        {
            name: "adm_D",
            classes: [
                {
                    name: "Estrategia de Negocios I: Estrategia Competitiva",
                    key: "ADM-12107",
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
                    name: "Estrategias de Comunicación Escrita",
                    key: "LEN-10131",
                    semester: 1
                }
                ,
                {
                    name: "Estrategia de Negocios II: Análisis Estratégico",
                    key: "ADM-12108",
                    pre: ["ADM-12107"],
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
                    name: "Proceso Contable",
                    key: "CON-10001",
                    semester: 2
                }
                ,
                {
                    name: "Administración Internacional",
                    key: "ADM-11013",
                    pre: ["ADM-12108", "ECO-12102"],
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
                    name: "Contabilidad Gerencial",
                    key: "CON-14109",
                    pre: ["CON-10001"],
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
                    name: "Ideas e Instituciones Políticas y Sociales III     (A)",
                    key: "EGN-17123",
                    pre: ["EGN-17122,  EGN-17141,LEN-10131"],
                    semester: 3
                }
                ,
                {
                    name: "Comportamiento Humano I: Comportamiento Organizacion",
                    key: "ADM-14401",
                    pre: ["ADM-12108"],
                    semester: 4
                }
                ,
                {
                    name: "Innovación y Diseño de Modelos de Negocio",
                    key: "ADM-11002",
                    pre: ["ADM-12108", "CON-14109"],
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
                    name: "Matemáticas III",
                    key: "MAT-11310",
                    pre: ["MAT-11100"],
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
                    name: "Finanzas I: Finanzas Corporativas",
                    key: "ADM-15501",
                    pre: ["EST-10102, ECO-11103", "CON-14109"],
                    semester: 5
                }
                ,
                {
                    name: "Mercadotecnia I: Fundamentos de Mercadotecnia",
                    key: "ADM-16601",
                    pre: ["EST-10101"],
                    semester: 5
                }
                ,
                {
                    name: "Pronósticos de Negocios",
                    key: "ADM-11101",
                    pre: ["MAT-11310,  EST-10102"],
                    semester: 5
                }
                ,
                {
                    name: "Comportamiento Humano II: Administración de Recursos Humanos",
                    key: "ADM-14402",
                    pre: ["ADM-14401"],
                    semester: 5
                }
                ,
                {
                    name: "Derecho Empresarial I",
                    key: "DER-10018",
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
                    name: "Finanzas II: Inversiones",
                    key: "ADM-15502",
                    pre: ["ADM-15501", "ADM-11101"],
                    semester: 6
                }
                ,
                {
                    name: "Desarrollo Empresarial",
                    key: "ADM-13101",
                    pre: ["ADM-14401, ADM-16601, ADM-15501, ADM-11013", "ADM-11002"],
                    semester: 6
                }
                ,
                {
                    name: "Mercadotecnia II: Investigación de Mercados",
                    key: "ADM-16602",
                    pre: ["ADM-16601", "ADM-11101"],
                    semester: 6
                }
                ,
                {
                    name: "Derecho Empresarial II",
                    key: "DER-10019",
                    pre: ["DER-10018"],
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
                    name: "Administración de la Cadena de Suministro",
                    key: "IIO-14278",
                    pre: ["ADM-11101"],
                    semester: 6
                }
                ,
                {
                    name: "Desarrollo de Habilidades Gerenciales",
                    key: "ADM-14413",
                    pre: ["ADM-14401"],
                    semester: 7
                }
                ,
                {
                    name: "Derecho Empresarial III",
                    key: "DER-10021",
                    pre: ["DER-10019"],
                    semester: 7
                }
                ,
                {
                    name: "Economía de la Empresa",
                    key: "ECO-14501",
                    pre: ["ADM-12108, ECO-11104", "ADM-11101"],
                    semester: 7
                }
                ,
                {
                    name: "Administración y Evaluación de Proyectos",
                    key: "IIO-14180",
                    pre: ["ADM-15501", "ADM-14401"],
                    semester: 7
                }
                ,
                {
                    name: "Finanzas III: Mercados e Instituciones Financieras",
                    key: "ADM-15503",
                    pre: ["ADM-15502"],
                    semester: 8
                }
                ,
                {
                    name: "Mercadotecnia III: Gerencia de Mercadotecnia",
                    key: "ADM-16603",
                    pre: ["ADM-16602"],
                    semester: 8
                }
                ,
                {
                    name: "Seminario de Dirección",
                    key: "ADM-11018",
                    pre: ["ADM-13101"],
                    semester: 8
                }
                ,
                {
                    name: "Contabilidad Fiscal",
                    key: "CON-15125",
                    pre: ["CON-14109", "DER-10021"],
                    semester: 8
                }
            ]
        }
    ]
};