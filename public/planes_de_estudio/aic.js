/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var aic = {
    name: "Administración e Ingeniería en Computación",
    planes: [
        {
            name: "aic_F",
            classes: [
                {
                    name: "Algoritmos y Programas",
                    key: "COM-11101",
                    semester: 1
                }
                ,
                {
                    name: "Introducción a la Matemática Superior",
                    key: "MAT-14001",
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
                    name: "Geometría Analítica",
                    key: "MAT-14200",
                    semester: 1
                }
                ,
                {
                    name: "Estrategia de Negocios I",
                    key: "ADM-12107",
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
                    name: "Ideas e Instituciones Políticas y Sociales II",
                    key: "EGN-17122",
                    pre: ["EGN-17121"],
                    semester: 2
                }
                ,
                {
                    name: "Álgebra Lineal 1",
                    key: "MAT-14201",
                    pre: ["MAT-14200"],
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
                    name: "Estrategia de Negocios II",
                    key: "ADM-12108",
                    pre: ["ADM-12107"],
                    semester: 2
                }
                ,
                {
                    name: "Introducción a la Ingeniería (1)",
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
                    name: "Elementos de Física",
                    key: "SDI-11120",
                    pre: ["MAT-14100"],
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
                    pre: ["MAT-14100"],
                    semester: 3
                }
                ,
                {
                    name: "Estructuras de Datos Avanzadas",
                    key: "COM-11103",
                    pre: ["COM-11102"],
                    semester: 3
                }
                ,
                {
                    name: "Proceso Contable",
                    key: "CON-10001",
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
                    name: "Ideas e Instituciones Políticas y Sociales III        (A)",
                    key: "EGN-17123",
                    pre: ["EGN-17122,", "EGN-17141", "LEN-10131"],
                    semester: 3
                }
                ,
                {
                    name: "Elementos de Electrónica",
                    key: "SDI-11221",
                    pre: ["SDI-11120"],
                    semester: 4
                }
                ,
                {
                    name: "Historia Socio-Política de México",
                    key: "EGN-17161",
                    pre: ["EGN-17123"],
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
                    name: "Probabilidad",
                    key: "EST-11101",
                    pre: ["MAT-14101"],
                    semester: 4
                }
                ,
                {
                    name: "Bases de Datos",
                    key: "COM-12101",
                    pre: ["SDI-14105,  COM-16203", "COM- 11103"],
                    semester: 4
                }
                ,
                {
                    name: "Comportamiento Humano I",
                    key: "ADM-14401",
                    pre: ["ADM-12108"],
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
                    name: "Circuitos Lógicos",
                    key: "SDI-11322",
                    pre: ["SDI-11120"],
                    semester: 5
                }
                ,
                {
                    name: "Problemas de la Realidad Mexicana Contemporánea",
                    key: "EGN-17162",
                    pre: ["EGN-17142", "EGN-17161"],
                    semester: 5
                }
                ,
                {
                    name: "Algebra Superior I",
                    key: "MAT-14300",
                    pre: ["MAT-14001"],
                    semester: 5
                }
                ,
                {
                    name: "Inferencia Estadística",
                    key: "EST-11102",
                    pre: ["EST-11101", "MAT-14102"],
                    semester: 5
                }
                ,
                {
                    name: "Administración Internacional",
                    key: "ADM-11013",
                    pre: ["ADM-12108"],
                    semester: 5
                }
                ,
                {
                    name: "Comportamiento Humano II",
                    key: "ADM-14402",
                    pre: ["ADM-14401"],
                    semester: 5
                }
                ,
                {
                    name: "Principios de Mecatrónica                                (A)",
                    key: "SDI-11561",
                    pre: ["SDI-11322", "COM-11102"],
                    semester: 5
                }
                ,
                {
                    name: "Algoritmos Numéricos por Computadora",
                    key: "COM-14105",
                    pre: ["COM-16203", "MAT-14102"],
                    semester: 5
                }
                ,
                {
                    name: "Análisis y Diseño de Sistemas de Información",
                    key: "COM-12102",
                    pre: ["COM-16203"],
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
                    name: "Inteligencia Artificial",
                    key: "COM-23101",
                    pre: ["COM-16203"],
                    semester: 5
                }
                ,
                {
                    name: "Fundamentos Matemáticos  de la  Comp.",
                    key: "COM-14101",
                    pre: ["SDI-11322"],
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
                    name: "Redes de Computadoras",
                    key: "SDI-13760",
                    pre: ["MAT-14102"],
                    semester: 6
                }
                ,
                {
                    name: "Sistemas de Comercio Electrónico",
                    key: "SDI-24810",
                    pre: ["COM-12101"],
                    semester: 6
                }
                ,
                {
                    name: "Ingeniería de Software",
                    key: "COM-22104",
                    pre: ["COM-16203"],
                    semester: 6
                }
                ,
                {
                    name: "Gráficas por Computadora",
                    key: "COM-14106",
                    pre: ["COM-11103"],
                    semester: 6
                }
                ,
                {
                    name: "Algebra Superior II",
                    key: "MAT-14301",
                    pre: ["MAT-14300"],
                    semester: 6
                }
                ,
                {
                    name: "Derecho Empresarial I",
                    key: "DER-10018",
                    semester: 6
                }
                ,
                {
                    name: "Economía III",
                    key: "ECO-11103",
                    pre: ["ECO-12102", "MAT-14100"],
                    semester: 6
                }
                ,
                {
                    name: "Finanzas I",
                    key: "ADM-15501",
                    pre: ["CON-14109, ECO-11103", "EST-11102"],
                    semester: 7
                }
                ,
                {
                    name: "Mercadotecnia I",
                    key: "ADM-16601",
                    pre: ["EST-11102"],
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
                    pre: ["EST-11102", "MAT-14102"],
                    semester: 7
                }
                ,
                {
                    name: "Derecho Empresarial II",
                    key: "DER-10019",
                    pre: ["DER-10018"],
                    semester: 7
                }
                ,
                {
                    name: "Diseño y Arquitectura de Redes",
                    key: "SDI-13782",
                    pre: ["SDI-13760"],
                    semester: 7
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
                    name: "Organización y Programación de Comp.",
                    key: "COM-11107",
                    pre: ["SDI-11322"],
                    semester: 8
                }
                ,
                {
                    name: "Administración de la Cadena de Suministro",
                    key: "IIO-14278",
                    pre: ["ADM-11101"],
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
                    name: "Desarrollo Empresarial                                      (A)",
                    key: "ADM-13101",
                    pre: ["ADM-14401, ADM-16601, ADM-15501, ADM-11013", "ADM-11002"],
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
                    name: "Mercadotecnia II",
                    key: "ADM-16602",
                    pre: ["ADM-11101", "ADM-16601"],
                    semester: 8
                }
                ,
                {
                    name: "Sistemas Operativos",
                    key: "COM-14104",
                    pre: ["SDI-11561"],
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
                    name: "Derecho Empresarial III",
                    key: "DER-10021",
                    pre: ["DER-10019"],
                    semester: 9
                }
                ,
                {
                    name: "Administración y Evaluación de Proyectos",
                    key: "IIO-14180",
                    pre: ["ADM-15501", "ADM-14401"],
                    semester: 9
                }
                ,
                {
                    name: "Sistemas Distribuidos",
                    key: "COM-22105",
                    pre: ["COM-12102"],
                    semester: 9
                }
                ,
                {
                    name: "Seminario de Dirección",
                    key: "ADM-11018",
                    pre: ["ADM-13101"],
                    semester: 10
                }
                ,
                {
                    name: "Mercadotecnia III",
                    key: "ADM-16603",
                    pre: ["ADM-16602"],
                    semester: 10
                }
                ,
                {
                    name: "Contabilidad Fiscal",
                    key: "CON-15125",
                    pre: ["CON-14109", "DER-10021"],
                    semester: 10
                }
                ,
                {
                    name: "Economía de la Empresa",
                    key: "ECO-14501",
                    pre: ["ADM-12108,  ECO-11104", "ADM-11101"],
                    semester: 10
                }
            ]
        }

    ]
};