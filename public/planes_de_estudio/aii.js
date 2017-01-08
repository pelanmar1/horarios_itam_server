/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */
var aii = {
    name: "Administración e Ingeniería Industrial",
    planes: [
        {
            name: "aii_F",
            classes: [
                {
                    name: "Estrategia de Negocios I",
                    key: "ADM-12107",
                    semester: 1
                }
                ,
                {
                    name: "Introducción a las Matemáticas Superior",
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
                    name: "Ideas e Instituciones Políticas y Sociales I",
                    key: "EGN-17121",
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
                    name: "Estructuras de Datos",
                    key: "COM-11102",
                    pre: ["COM-11101"],
                    semester: 2
                }
                ,
                {
                    name: "Estrategia de Negocios II",
                    key: "ADM-12108",
                    pre: ["ADM-12107"],
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
                    name: "Álgebra Lineal I",
                    key: "MAT-14201",
                    pre: ["MAT-14200"],
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
                    name: "Problemas de la Civilización Contemporánea  I",
                    key: "EGN-17141",
                    semester: 2
                }
                ,
                {
                    name: "Introducción a la Ingeniería",
                    key: "SDI-14105",
                    semester: 2
                }
                ,
                {
                    name: "Cálculo Diferencial e Integral II",
                    key: "MAT-14101",
                    pre: ["MAT-14100", "MAT-14200"],
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
                    name: "Elementos de Física",
                    key: "SDI-11120",
                    pre: ["MAT-14200"],
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
                    name: "Problemas de la Civilización Contemporánea II",
                    key: "EGN-17142",
                    pre: ["EGN-17141"],
                    semester: 3
                }
                ,
                {
                    name: "Ideas e Instituciones Políticas y Sociales III",
                    key: "EGN-17123",
                    pre: ["EGN-17122,  EGN-17141", "LEN-10131"],
                    semester: 3
                }
                ,
                {
                    name: "Fundamentos de Química",
                    key: "IIO-15130",
                    semester: 4
                }
                ,
                {
                    name: "Cálculo Diferencial e Integral III",
                    key: "MAT-14102",
                    pre: ["MAT-14101", "MAT-14201"],
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
                    name: "Administración Internacional",
                    key: "ADM-11013",
                    pre: ["ADM-12108"],
                    semester: 4
                }
                ,
                {
                    name: "Proceso Contable",
                    key: "CON-10001",
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
                    name: "Modelado y Optimización I",
                    key: "IIO-13150",
                    pre: ["MAT-14201", "MAT-14101"],
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
                    pre: ["ECO-12102", "MAT-14100"],
                    semester: 5
                }
                ,
                {
                    name: "Contabilidad Gerencial",
                    key: "CON-14109",
                    pre: ["CON-10001"],
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
                    name: "Probl. De la Real. Mex. Contemp",
                    key: "EGN-17162",
                    pre: ["EGN-17161", "EGN-17142"],
                    semester: 5
                }
                ,
                {
                    name: "Comportamiento Humano I",
                    key: "ADM-14401",
                    pre: ["ADM-12108", "SDI-14105"],
                    semester: 6
                }
                ,
                {
                    name: "Inferencia Estadística",
                    key: "EST-11102",
                    pre: ["MAT-14102", "EST-11101"],
                    semester: 6
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
                    name: "Procesos de Manufactura",
                    key: "IIO-15150",
                    pre: ["IIO-15140"],
                    semester: 6
                }
                ,
                {
                    name: "Algoritmos Numéricos por Computadora",
                    key: "COM-14105",
                    pre: ["COM-16203", "MAT-14102"],
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
                    name: "Comportamiento Humano II",
                    key: "ADM-14402",
                    pre: ["ADM-14401"],
                    semester: 7
                }
                ,
                {
                    name: "Mercadotecnia I",
                    key: "ADM-16601",
                    pre: ["EST-11101"],
                    semester: 7
                }
                ,
                {
                    name: "Finanzas I",
                    key: "ADM-15501",
                    pre: ["EST-11102, ECO-11103", "CON-14109"],
                    semester: 7
                }
                ,
                {
                    name: "Innovación y Diseño de Modelos de Negocio",
                    key: "ADM-11002",
                    pre: ["ADM-12108", "CON-14109"],
                    semester: 7
                }
                ,
                {
                    name: "Pronósticos de Negocios",
                    key: "ADM-11101",
                    pre: ["MAT-14102", "EST-11102"],
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
                    name: "Derecho Empresarial I",
                    key: "DER-10018",
                    semester: 7
                }
                ,
                {
                    name: "Mercadotecnia II",
                    key: "ADM-16602",
                    pre: ["ADM-16601", "ADM-11101"],
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
                    name: "Derecho Empresarial II",
                    key: "DER-10019",
                    pre: ["DER-10018"],
                    semester: 8
                }
                ,
                {
                    name: "Modelado y Optimización II",
                    key: "IIO-13160",
                    pre: ["MAT-14102, IIO-13150", "EST-11101"],
                    semester: 8
                }
                ,
                {
                    name: "Simulación de Sistemas",
                    key: "IIO-13180",
                    pre: ["EST-11101", "COM-16203"],
                    semester: 8
                }
                ,
                {
                    name: "Diseño y Desarrollo de Producto",
                    key: "IIO-12180",
                    pre: ["ADM-16601, IIO-15170", "EST-11101"],
                    semester: 8
                }
                ,
                {
                    name: "Desarrollo de Habilidades Gerenciales",
                    key: "ADM-14413",
                    pre: ["ADM-14401"],
                    semester: 8
                }
                ,
                {
                    name: "Mercadotecnia III",
                    key: "ADM-16603",
                    pre: ["ADM-16602"],
                    semester: 9
                }
                ,
                {
                    name: "Desarrollo Empresarial",
                    key: "ADM-13101",
                    pre: ["ADM-14401, ADM-16601, ADM-15501,ADM-11013", "ADM-11002"],
                    semester: 9
                }
                ,
                {
                    name: "Logística y Distribución",
                    key: "IIO-14170",
                    pre: ["IIO-14161", "IIO-13150"],
                    semester: 9
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
                    name: "Ingeniería de Procesos de Negocios",
                    key: "IIO-14193",
                    pre: ["IIO-13180", "IIO-14161"],
                    semester: 9
                }
                ,
                {
                    name: "Economía de la Empresa",
                    key: "ECO-14501",
                    pre: ["ADM-12108, ECO-11104", "ADM-11101"],
                    semester: 9
                }
            ]
        }
    ]
};