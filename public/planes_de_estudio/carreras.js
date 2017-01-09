/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var carreras = [

    {
        name: "Administración y Actuaría",
        planes: [
            {
                name: "aac_C",
                classes: [
                    {
                        name: "Estrategia de Negocios I",
                        key: "ADM-12107",
                        semester: 1
                    }
                    ,
                    {
                        name: "Proceso Contable",
                        key: "CON-10001",
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
                        name: "Herramientas Computacionales y Algoritmos",
                        key: "COM-16301",
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
                        name: "Geometría Analítica",
                        key: "MAT-14200",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Álgebra Superior I",
                        key: "MAT-14300",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Economía I",
                        key: "ECO-11101",
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
                        name: "Cálculo Diferencial e Integral II",
                        key: "MAT-14101",
                        pre: ["MAT-14100", "MAT-14200"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Álgebra Lineal I",
                        key: "MAT-14201",
                        pre: ["MAT-14200"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Álgebra Superior II",
                        key: "MAT-14301",
                        pre: ["MAT-14300"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Economía II",
                        key: "ECO-12102",
                        pre: ["ECO-11101"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Algorítmica y Programación",
                        key: "COM-11302",
                        pre: ["COM-16301", "MAT-14300"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instituciones Políticas y Sociales III",
                        key: "EGN-17123",
                        pre: ["EGN-17122", "EGN-17141"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Administración Internacional",
                        key: "ADM-11013",
                        pre: ["ADM-12108", "ECO-12102"],
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
                        name: "Álgebra Lineal II",
                        key: "MAT-14310",
                        pre: ["MAT-14301", "MAT-14201"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Economía III",
                        key: "ECO-11103",
                        pre: ["MAT-14100 Y ECO-12102"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Cálculo de Probabilidades I",
                        key: "EST-14101",
                        pre: ["MAT-14301", "MAT-14101"],
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
                        name: "Comportamiento Humano I",
                        key: "ADM-14401",
                        pre: ["ADM-12108"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Principios del Seguro",
                        key: "ACT-15357",
                        pre: ["ECO-11101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Matemáticas Financieras I",
                        key: "MAT-22600",
                        pre: ["MAT-14101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Economía IV",
                        key: "ECO-11104",
                        pre: ["ECO-11103"],
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
                        name: "Cálculo de Probabilidades II",
                        key: "EST-14102",
                        pre: ["EST-14101", "MAT-14102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Comportamiento Humano II",
                        key: "ADM-14402",
                        pre: ["ADM-14401"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Pronósticos de Negocios",
                        key: "ADM-11101",
                        pre: ["EST-14102", "MAT-14310"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Cálculo Actuarial I",
                        key: "ACT-11300",
                        pre: ["MAT-22600, ACT-15357", "EST-14101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Procesos Estocásticos I",
                        key: "EST-14107",
                        pre: ["EST-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Estadística Aplicada I",
                        key: "EST-24104",
                        pre: ["EST-14101"],
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
                        name: "Probl. de la Real. Mex. Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Mercadotecnia I",
                        key: "ADM-16601",
                        pre: ["EST-14101"],
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
                        name: "Sistemas de Seguros",
                        key: "ACT-15358",
                        pre: ["ACT-15357"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Cálculo Actuarial II",
                        key: "ACT-11301",
                        pre: ["ACT-11300", "EST-14102"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Estadística Matemática",
                        key: "EST-14103",
                        pre: ["EST-14102", "EST-24104"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Optativa",
                        key: "EST-14103",
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
                        name: "Desarrollo Empresarial",
                        key: "ADM-13101",
                        pre: ["ADM-14401, ADM-16601, ADM-11013", "ADM-11002", "MAT-22600"],
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
                        name: "Cálculo Numérico I",
                        key: "MAT-14400",
                        pre: ["COM-11302, MAT-14102", "MAT-14310"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Matemáticas Financieras II",
                        key: "ACT-22306",
                        pre: ["MAT-22600, EST-14103", "CON-10001"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Estadística Aplicada II",
                        key: "EST-24105",
                        pre: ["EST-14103"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Derecho Empresarial III",
                        key: "DER-10021",
                        pre: ["DER-10019"],
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
                        name: "Administración y Evaluación de Proyectos",
                        key: "IIO-14180",
                        pre: ["MAT-22600", "ADM-14401"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Modelos Actuariales",
                        key: "ACT-11303",
                        pre: ["ACT-11301"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Cálculo Actuarial III",
                        key: "ACT-11302",
                        pre: ["EST-14103, ACT-15358", "MAT-14400"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Economía de la Incertidumbre",
                        key: "ECO-11221",
                        pre: ["ECO-11104, MAT-22600", "EST-14101"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Beneficios de Pensiones y Seguridad Social",
                        key: "ACT-15359",
                        pre: ["ACT-11301"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Contabilidad Fiscal",
                        key: "CON-15125",
                        pre: ["DER-10021", "CON-14109"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Finanzas III",
                        key: "ADM-15503",
                        pre: ["ACT-22306"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Desarrollo de Habilidades Gerenciales",
                        key: "ADM-14413",
                        pre: ["ADM-14401"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Finanzas Corporativas Avanzadas",
                        key: "ADM-15582",
                        pre: ["ECO-11103", "ACT-22306"],
                        semester: 10
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
                        name: "Estadística Aplicada a la Actuaría",
                        key: "ACT-13307",
                        pre: ["EST-24105, EST-14107"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Administración Cuantitativa de Riesgos",
                        key: "ACT-25354",
                        pre: ["ACT-15357", "EST-14103"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Práctica Actuarial y Marco Institucional",
                        key: "ACT-15353",
                        pre: ["ACT-11302", "ACT-11303"],
                        semester: 10
                    }
                ]
            }]
    },

    {
        name: "Administración y Contaduría Pública y Estrategia Financiera",
        planes: [
            {
                name: "acf_D",
                classes: [
                    {
                        name: "Proceso Contable",
                        key: "CON-10001",
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
                        name: "Introducción a las Matemáticas",
                        key: "MAT-11001",
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
                        name: "Problemas de la Civilización Contemporánea  I",
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
                        name: "Contabilidad Intermedia I",
                        key: "CON-10002",
                        pre: ["CON-10001"],
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
                        name: "Matemáticas I",
                        key: "MAT-11100",
                        pre: ["MAT-11001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Economía I",
                        key: "ECO-11101",
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
                        name: "Herramientas Computacionales y Algorítmos",
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
                        name: "Economía II",
                        key: "ECO-12102",
                        pre: ["ECO-11101"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Estadística I",
                        key: "EST-10101",
                        pre: ["COM-16301", "MAT-11100"],
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
                        name: "Introducción al Derecho Corporativo",
                        key: "DER-10016",
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instituciones Políticas y Sociales III        (A)",
                        key: "EGN-17123",
                        pre: ["EGN-17122,  EGN-17141", "LEN-10131"],
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
                        name: "Administración Internacional",
                        key: "ADM-11013",
                        pre: ["ADM-12108"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Economía III",
                        key: "ECO-11103",
                        pre: ["ECO-12102", "MAT-11100"],
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
                        name: "Derecho Corporativo",
                        key: "DER-10026",
                        pre: ["DER-10016"],
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
                        name: "Pronósticos de Negocios",
                        key: "ADM-11101",
                        pre: ["EST-10102", "MAT-11310"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Comportamiento Humano I",
                        key: "ADM-14401",
                        pre: ["ADM-12108"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Mercadotecnia I",
                        key: "ADM-16601",
                        pre: ["EST-10101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Economía IV",
                        key: "ECO-11104",
                        pre: ["ECO-11103"],
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
                        name: "Desarrollo de Habilidades Gerenciales",
                        key: "ADM-14413",
                        pre: ["ADM-14401"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Innovación y Diseño de Modelos de Negocio",
                        key: "ADM-11002",
                        pre: ["ADM-12108", "CON-10003"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Finanzas I",
                        key: "ADM-15501",
                        pre: ["EST-10102", "ECO-11103"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Mercadotecnia II",
                        key: "ADM-16602",
                        pre: ["ADM-16601", "ADM-11101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Comportamiento Humano II",
                        key: "ADM-14402",
                        pre: ["ADM-14401"],
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
                        name: "Mercadotecnia III",
                        key: "ADM-16603",
                        pre: ["ADM-16602"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Finanzas II",
                        key: "ADM-15502",
                        pre: ["ADM-15501", "ADM-11101"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Modelado Computacional para Negocios",
                        key: "COM-16303",
                        pre: ["COM-16301", "ADM-15501"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Régimen Laboral Mexicano",
                        key: "DER-10008",
                        pre: ["DER-10026"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Sistemas Empresariales",
                        key: "SDI-25916",
                        pre: ["COM-16301", "CON-10106"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Derecho Fiscal I",
                        key: "DER-17703",
                        pre: ["DER-10026"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Impuestos Corporativos I",
                        key: "CON-15001",
                        pre: ["DER-17703"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Contabilidad de Costos                        (A)",
                        key: "CON-12001",
                        pre: ["DER-10008 Y CON-10003"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Contabilización y Valuación de Instrumentos Financieros",
                        key: "CON-10011",
                        pre: ["CON-10106", "ADM-15501"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Finanzas III",
                        key: "ADM-15503",
                        pre: ["ADM-15502 ADM-14401, ADM-11013"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Desarrollo Empresarial                       (A)",
                        key: "ADM-13101",
                        pre: ["ADM-16601, ADM-11002", "ADM-15501"],
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
                        name: "Contraloría",
                        key: "CON-11013",
                        pre: ["SDI-25916", "CON-10004"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Economía de la Empresa",
                        key: "ECO-14501",
                        pre: ["ECO-11104,  ADM-12108", "ADM-11101"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Estrategia y Control de Riesgos Financieros",
                        key: "CON-18002",
                        pre: ["ADM-15502"],
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
                        name: "Costos para la Toma de Decisiones",
                        key: "CON-12002",
                        pre: ["CON-12001", "ADM-11101"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Impuestos Corporativos II",
                        key: "CON-15002",
                        pre: ["CON-15001"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Auditoría de Estados Financieros",
                        key: "CON-11001",
                        pre: ["CON-11013", "SDI-25916"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Impuestos para Personas Físicas",
                        key: "CON-15003",
                        pre: ["CON-15002"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Análisis Financiero de la Empresa",
                        key: "CON-10005",
                        pre: ["CON-10011", "ADM-15501"],
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
                        name: "Seminario de Dirección",
                        key: "ADM-11018",
                        pre: ["ADM-13101"],
                        semester: 10
                    }
                ]
            }
        ]
    },

    {
        name: "Actuaría y Matemáticas Aplicadas",
        planes: [

            {
                name: "acm_C",
                classes: [
                    {
                        name: "Ideas e Instit. Polít. y Soc. I",
                        key: "EGN-17121",
                        semester: 1
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. I",
                        key: "EGN-17141",
                        semester: 1
                    }
                    ,
                    {
                        name: "Contabilidad I",
                        key: "CON-10100",
                        semester: 1
                    }
                    ,
                    {
                        name: "Herramientas Comp. y Algoritmos",
                        key: "COM-16301",
                        semester: 1
                    }
                    ,
                    {
                        name: "Introd. a la Matemática Superior",
                        key: "MAT-14001",
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
                        name: "Ideas e Instit. Polít. y Soc. II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Álgebra Superior I",
                        key: "MAT-14300",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Geometría Analítica",
                        key: "MAT-14200",
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
                        name: "Economía I",
                        key: "ECO-11101",
                        semester: 2
                    }
                    ,
                    {
                        name: "Algoritmica y Programación",
                        key: "COM-11302",
                        pre: ["COM-16301", "MAT-14300"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Álgebra Superior II",
                        key: "MAT-14301",
                        pre: ["MAT-14300"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Algebra Lineal I",
                        key: "MAT-14201",
                        pre: ["MAT-14200"],
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
                        name: "Economía II",
                        key: "ECO-12102",
                        pre: ["ECO-11101"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polít. y Soc. III",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                        semester: 3
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
                        name: "Cálculo de Probabilidades I",
                        key: "EST-14101",
                        pre: ["MAT-14301", "MAT-14101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Matemática Computacional",
                        key: "MAT-14390",
                        pre: ["COM-11302, MAT-14201", "MAT-14101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Álgebra Lineal II",
                        key: "MAT-14310",
                        pre: ["MAT-14201", "MAT-14301"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Economía III",
                        key: "ECO-11103",
                        pre: ["ECO-12102", "MAT-14100"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Probs. De la Real. Mex. Contemporánea",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Sistemas Dinámicos I",
                        key: "MAT-24210",
                        pre: ["MAT-14102", "MAT-14310"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Análisis Matemático I",
                        key: "MAT-24110",
                        pre: ["MAT-14102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Cálculo de Probabilidades II",
                        key: "EST-14102",
                        pre: ["MAT-14102", "EST-14101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Estadística Aplicada I",
                        key: "EST-24104",
                        pre: ["EST-14101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Economía IV",
                        key: "ECO-11104",
                        pre: ["ECO-11103"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Procesos Estocásticos I",
                        key: "EST-14107",
                        pre: ["EST-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Análisis Matemático II",
                        key: "MAT-24111",
                        pre: ["MAT-24110"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Cálculo Numérico I",
                        key: "MAT-14400",
                        pre: ["MAT-14102, MAT-14310, MAT-14390", "COM-11302"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Estadística Matemática",
                        key: "EST-14103",
                        pre: ["EST-14102", "EST-24104"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Principios del Seguro",
                        key: "ACT-15357",
                        pre: ["ECO-11101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Matemáticas Financieras I",
                        key: "MAT-22600",
                        pre: ["MAT-14101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Sistemas Dinámicos II                    (A)",
                        key: "MAT-24211",
                        pre: ["MAT-24210"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Programación Lineal",
                        key: "MAT-24410",
                        pre: ["MAT-14400"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Estadística Aplicada II",
                        key: "EST-24105",
                        pre: ["EST-14103"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Sistemas de Seguros                       (A)",
                        key: "ACT-15358",
                        pre: ["ACT-15357"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Cálculo Actuarial I",
                        key: "ACT-11300",
                        pre: ["EST-14101, ACT-15357", "MAT-22600"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Matemáticas Financieras II",
                        key: "ACT-22306",
                        pre: ["EST-14103"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Investigación de Operaciones I",
                        key: "MAT-24500",
                        pre: ["MAT-24410"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Análisis Aplicado I",
                        key: "MAT-24430",
                        pre: ["MAT-24410", "MAT-24111"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Estadística Aplicada III",
                        key: "EST-24106",
                        pre: ["EST-14103"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Simulación",
                        key: "EST-24107",
                        pre: ["EST-14102"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Estrategia de Negocios I",
                        key: "ADM-12107",
                        semester: 8
                    }
                    ,
                    {
                        name: "Cálculo Actuarial II",
                        key: "ACT-11301",
                        pre: ["EST-14102", "ACT-11300"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Modelos Actuariales",
                        key: "ACT-11303",
                        pre: ["ACT-11301"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Cálculo Actuarial III",
                        key: "ACT-11302",
                        pre: ["MAT-14400, EST-14103", "ACT-15358"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Beneficios de Pensiones y Seguridad Social",
                        key: "ACT-15359",
                        pre: ["ACT-11301"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Administración Cuantitativa de Riesgos",
                        key: "ACT-25354",
                        pre: ["ACT-15357", "EST-14103"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Optativa",
                        key: "ACT-25354",
                        semester: 9
                    }
                    ,
                    {
                        name: "Optativa",
                        key: "ACT-25354",
                        semester: 9
                    }
                    ,
                    {
                        name: "Optimización Numérica I",
                        key: "MAT-24431",
                        pre: ["MAT-24430"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Estadística Aplicada a la Actuaría",
                        key: "ACT-13307",
                        pre: ["EST-24105", "EST-14107"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Práctica Act. y Marco Institucional",
                        key: "ACT-15353",
                        pre: ["ACT-11303", "ACT-11302"],
                        semester: 10
                    }
                ]
            }


        ]
    },

    {
        name: "Administración y Contaduría Pública",
        planes: [
            {
                name: "acp_C",
                classes: [
                    {
                        name: "Proceso Contable",
                        key: "CON-10001",
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
                        name: "Introd. a las Matemáticas",
                        key: "MAT-11001",
                        semester: 1
                    }
                    ,
                    {
                        name: "Herr. Comput. y Algoritmos",
                        key: "COM-16301",
                        semester: 1
                    }
                    ,
                    {
                        name: "Ideas e Instituciones Polit. y Soc. I",
                        key: "EGN-17121",
                        semester: 1
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. I",
                        key: "EGN-17141",
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
                        name: "Estrategia de Negocios II",
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
                        name: "Introducción al Derecho Corporat.",
                        key: "DER-10016",
                        semester: 2
                    }
                    ,
                    {
                        name: "Ideas e Instituciones Polit. y Soc. II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
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
                        name: "Administración Internacional",
                        key: "ADM-11013",
                        pre: ["ADM-12108"],
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
                        name: "Derecho Corporativo",
                        key: "DER-10026",
                        pre: ["DER-10016"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Inst.  Polts. y  Sociales III",
                        key: "EGN-17123",
                        pre: ["EGN-17122", "EGN-17141"],
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
                        name: "Combinación de Negocios",
                        key: "CON-10004",
                        pre: ["CON-10003", "DER-10026"],
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
                        name: "Economía II",
                        key: "ECO-12102",
                        pre: ["ECO-11101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Computación II",
                        key: "COM-16402",
                        pre: ["COM-16301"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Estadística I",
                        key: "EST-10101",
                        pre: ["COM-16301", "MAT-11100"],
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
                        name: "Contabilidad Internacional",
                        key: "CON-10106",
                        pre: ["CON-10004"],
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
                        name: "Economía III",
                        key: "ECO-11103",
                        pre: ["MAT-11100", "ECO-12102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Régimen Fiscal Mexicano  p/C.P.",
                        key: "DER-10011",
                        pre: ["DER-10026"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Estadística II",
                        key: "EST-10102",
                        pre: ["EST-10101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Hist. Socio-Política de México",
                        key: "EGN-17161",
                        pre: ["EGN-17123"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Mercadotecnia  I",
                        key: "ADM-16601",
                        pre: ["EST-10101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Pronósticos de  Negocios",
                        key: "ADM-11101",
                        pre: ["EST-10102", "MAT-11310"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Dir. de Tecnologías de Información",
                        key: "COM-16101",
                        pre: ["CON-10004", "COM-16402"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Finanzas I",
                        key: "ADM-15501",
                        pre: ["EST-10102", "ECO-11103"],
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
                        name: "Desar. de Habilidades Gerencs.",
                        key: "ADM-14413",
                        pre: ["ADM-14401"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Mercadotecnia II",
                        key: "ADM-16602",
                        pre: ["ADM-16601", "ADM-11101"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Contabilidad de Costos",
                        key: "CON-12001",
                        pre: ["CON-10003"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Impuestos  Corporativos I",
                        key: "CON-15001",
                        pre: ["DER-10011"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Finanzas II",
                        key: "ADM-15502",
                        pre: ["ADM-15501", "ADM-11101"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Probls.de la Real. Mex. Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Régimen  Laboral Mexicano",
                        key: "DER-10008",
                        pre: ["DER-10026"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Mercadotecnia III",
                        key: "ADM-16603",
                        pre: ["ADM-16602"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Costos para la Toma de Decisiones",
                        key: "CON-12002",
                        pre: ["CON-12001", "ADM-11101"],
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
                        name: "Finanzas III",
                        key: "ADM-15503",
                        pre: ["ADM-15502"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Desarrollo Empresarial",
                        key: "ADM-13101",
                        pre: ["ADM-14401, ADM-11013,ADM-16601", "ADM-15501"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Auditoría de Estados Financieros",
                        key: "CON-11001",
                        pre: ["CON-10106,  COM-16101", "EST-10102"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Administ. Estratégica de Costos",
                        key: "CON-12003",
                        pre: ["CON-12002"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Impuestos para Personas Físicas",
                        key: "CON-15003",
                        pre: ["CON-15001"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Economía de la Empresa",
                        key: "ECO-14501",
                        pre: ["ECO-11104,  ADM-12108", "ADM-11101"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Administración de Operaciones I",
                        key: "IIO-14260",
                        pre: ["MAT-11310, EST-10102", "COM-16402"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Análisis  Financ.  de la  Empresa",
                        key: "CON-10005",
                        pre: ["CON-11001"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Administración de Operaciones II",
                        key: "IIO-14270",
                        pre: ["IIO-14260", "ADM-11101"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Seminario de Investig. Admva. I",
                        key: "ADM-11007",
                        pre: ["ADM-15502, ADM-16602,ADM-13101"],
                        semester: 10
                    }
                ]
            }
        ]
    },

    {
        name: "Actuaría",
        planes: [

            {
                name: "act_E",
                classes: [
                    {
                        name: "Ideas e Instit. Polít. y Soc. I",
                        key: "EGN-17121",
                        semester: 1
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. I",
                        key: "EGN-17141",
                        semester: 1
                    }
                    ,
                    {
                        name: "Contabilidad I",
                        key: "CON-10100",
                        semester: 1
                    }
                    ,
                    {
                        name: "Herramientas Comp. y Algoritmos",
                        key: "COM-16301",
                        semester: 1
                    }
                    ,
                    {
                        name: "Introd. a las Matemáticas Superiores",
                        key: "MAT-14001",
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
                        name: "Ideas e Instit. Polít. y Soc. II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Álgebra Superior I",
                        key: "MAT-14300",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Geometría Analítica I",
                        key: "MAT-14200",
                        pre: ["MAT-14001"],
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
                        name: "Economía I",
                        key: "ECO-11101",
                        semester: 2
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polít. y Soc. III",
                        key: "EGN-17123",
                        pre: ["EGN-17122", "EGN-17141,LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Economía II",
                        key: "ECO-12102",
                        pre: ["ECO-11101"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Álgebra Superior II",
                        key: "MAT-14301",
                        pre: ["MAT-14300"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Geometría Analítica II",
                        key: "MAT-14201",
                        pre: ["MAT-14200"],
                        semester: 3
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
                        name: "Estrategia de Negocios I",
                        key: "ADM-12107",
                        semester: 3
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
                        name: "Economía III",
                        key: "ECO-11103",
                        pre: ["MAT-14100", "ECO-12102"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Cálculo de Probabilidades I",
                        key: "EST-14101",
                        pre: ["MAT-14301", "MAT-14101"],
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
                        name: "Matemáticas Financieras I",
                        key: "MAT-22600",
                        pre: ["MAT-14101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Álgebra Lineal",
                        key: "MAT-14310",
                        pre: ["MAT-14201", "MAT-14301"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Probs. de la Real. Mex. Contemporánea",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Economía IV",
                        key: "ECO-11104",
                        pre: ["ECO-11103"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Cálculo de Probabilidades II",
                        key: "EST-14102",
                        pre: ["MAT-14102", "EST-14101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Cálculo Actuarial I",
                        key: "ACT-11300",
                        pre: ["MAT-22600, ACT-15357", "EST-14101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Algorítmica y Programación",
                        key: "COM-11302",
                        pre: ["MAT-14300", "COM-16301"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Estadística Aplicada I",
                        key: "EST-24104",
                        pre: ["EST-14101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Cálculo Actuarial II",
                        key: "ACT-11301",
                        pre: ["EST-14102", "ACT-11300"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Procesos Estocásticos I",
                        key: "EST-14107",
                        pre: ["EST-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Cálculo Numérico I",
                        key: "MAT-14400",
                        pre: ["COM-11302, MAT-14102", "MAT-14310"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Estadística Matemática",
                        key: "EST-14103",
                        pre: ["EST-14102", "EST-24104"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Cálculo Actuarial III",
                        key: "ACT-11302",
                        pre: ["ACT-15358, EST-14103", "MAT-14400"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Modelos Actuariales",
                        key: "ACT-11303",
                        pre: ["ACT-11301"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Estadística Aplicada II",
                        key: "EST-24105",
                        pre: ["EST-14103"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Estadística Aplicada a la Actuaría",
                        key: "ACT-13307",
                        pre: ["EST-24105", "EST-14107"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Seminario de Investigación Actuarial",
                        key: "ACT-14308",
                        semester: 8
                    }
                    ,
                    {
                        name: "Práctica Actuarial y Marco Institucional",
                        key: "ACT-15353",
                        pre: ["ACT-11302", "ACT-11303"],
                        semester: 8
                    }
                ]
            }
        ]
    },

    {
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
    },

    {
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
    },

    {
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
    },

    {
        name: "Contaduría Pública y Actuaría",
        planes: [
            {
                name: "cat_D",
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
                        name: "Problemas de la Civilización Contemporánea I",
                        key: "EGN-17141",
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
                        name: "Herramientas Computacionales y Algorítmos",
                        key: "COM-16301",
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
                        name: "Economía I",
                        key: "ECO-11101",
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
                        name: "Geometría Analítica",
                        key: "MAT-14200",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Algebra Superior I",
                        key: "MAT-14300",
                        pre: ["MAT-14001"],
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
                        name: "Contabilidad Intermedia II",
                        key: "CON-10003",
                        pre: ["CON-10002"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Economía II",
                        key: "ECO-12102",
                        pre: ["ECO-11101"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instituciones Políticas y Sociales III",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Algebra Superior II",
                        key: "MAT-14301",
                        pre: ["MAT-14300"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Algebra Lineal I",
                        key: "MAT-14201",
                        pre: ["MAT-14200"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Cálculo Diferencial e Integral  I",
                        key: "MAT-14100",
                        pre: ["MAT-14001"],
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
                        name: "Economía III",
                        key: "ECO-11103",
                        pre: ["ECO-12102 Y MAT-14100"],
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
                        name: "Algebra lineal II",
                        key: "MAT-14310",
                        pre: ["MAT-14201", "MAT-14301"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Cálculo Diferencial e Integral  II",
                        key: "MAT-14101",
                        pre: ["MAT-14100 Y MAT-14200"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Principios del Seguro",
                        key: "ACT-15357",
                        pre: ["ECO-11101"],
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
                        name: "Economía IV",
                        key: "ECO-11104",
                        pre: ["ECO-11103"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Cálculo de Probabilidades I",
                        key: "EST-14101",
                        pre: ["MAT-14301 Y MAT-14101"],
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
                        name: "Introducción al Derecho Corporativo",
                        key: "DER-10016",
                        semester: 5
                    }
                    ,
                    {
                        name: "Cálculo Diferencial e Integral III",
                        key: "MAT-14102",
                        pre: ["MAT-14101 Y MAT-14201"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Sistemas Empresariales",
                        key: "SDI-25916",
                        pre: ["COM-16301 Y CON-10106"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Matemáticas Financieras I",
                        key: "MAT-22600",
                        pre: ["MAT-14101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Cálculo de Probabilidades II",
                        key: "EST-14102",
                        pre: ["MAT-14102 Y EST-14101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Derecho Corporativo",
                        key: "DER-10026",
                        pre: ["DER-10016"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Estadística Aplicada I",
                        key: "EST-24104",
                        pre: ["EST-14101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Estadística Matematica",
                        key: "EST-14103",
                        pre: ["EST-14102 Y EST-24104"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Algoritmica y Programación",
                        key: "COM-11302",
                        pre: ["COM-16301 Y MAT-14300"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Cálculo Actuarial I",
                        key: "ACT-11300",
                        pre: ["EST-14101 , ACT-15357", "MAT-22600"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Modelado  Computacional para Negocios",
                        key: "COM-16303",
                        pre: ["COM-16301", "MAT-22600"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Derecho Fiscal I",
                        key: "DER-17703",
                        pre: ["DER-10026"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Sistemas de Seguros",
                        key: "ACT-15358",
                        pre: ["ACT-15357"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Contabilización y Valuación de Instrumentos Fin.",
                        key: "CON-10011",
                        pre: ["CON-10106", "MAT-22600"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Contraloría",
                        key: "CON-11013",
                        pre: ["CON-10004 Y SDI-25916"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Cálculo Actuarial II",
                        key: "ACT-11301",
                        pre: ["ACT-11300 Y EST-14102"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Impuestos Corporativos I",
                        key: "CON-15001",
                        pre: ["DER-17703"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Régimen Laboral Mexicano",
                        key: "DER-10008",
                        pre: ["DER-10026"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Matemáticas Financieras II",
                        key: "ACT-22306",
                        pre: ["MAT-22600 Y EST-14103"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Modelos Actuariales",
                        key: "ACT-11303",
                        pre: ["ACT-11301"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Auditoría de Estados Financieros",
                        key: "CON-11001",
                        pre: ["CON-11013", "SDI-25916"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Procesos Estocásticos I",
                        key: "EST-14107",
                        pre: ["EST-14102"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Impuestos Corporativos II",
                        key: "CON-15002",
                        pre: ["CON-15001"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Contabilidad de Costos",
                        key: "CON-12001",
                        pre: ["CON-10003 Y DER-10008"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Cálculo Numérico I",
                        key: "MAT-14400",
                        pre: ["MAT-14310, MAT-14102", "COM-11302"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Estadística Aplicada II",
                        key: "EST-24105",
                        pre: ["EST-14103"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Finanzas Corporativas Avanzadas",
                        key: "ADM-15582",
                        pre: ["ACT-22306"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Cálculo Actuarial III",
                        key: "ACT-11302",
                        pre: ["EST-14103,  MAT-14400", "ACT-15358"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Impuestos para Personas Físicas",
                        key: "CON-15003",
                        pre: ["CON-15002"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Costos para la Toma de Decisiones",
                        key: "CON-12002",
                        pre: ["CON-12001"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Administración Cuantitativa de Riesgos",
                        key: "ACT-25354",
                        pre: ["EST-14103 Y ACT-15357"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Análisis Financiero de la Empresa",
                        key: "CON-10005",
                        pre: ["CON-10011", "MAT-22600"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Práctica Actuarial y Marco Institucional",
                        key: "ACT-15353",
                        pre: ["ACT-11303 Y ACT-11302"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Beneficios de Pensiones y Seguridad Social",
                        key: "ACT-15359",
                        pre: ["ACT-11301"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Matemáticas Financieras III",
                        key: "ACT-22309",
                        pre: ["ACT-22306"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Administración Estrategica de Costos",
                        key: "CON-12003",
                        pre: ["CON-12002"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Estadística Aplicada a la Actuaria",
                        key: "ACT-13307",
                        pre: ["EST-24105 ,EST-14107"],
                        semester: 11
                    }
                ]
            }
        ]
    },

    {
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
    },

    {
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
    },

    {
        name: "Ingeniería en Computación",
        planes: [
            {
                name: "com_G",
                classes: [
                    {
                        name: "Introducción a la Ingeniería(1)",
                        key: "SDI-14105",
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
                        name: "Introd. a la Matemática Superior",
                        key: "MAT-14001",
                        semester: 1
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polts y Soc. I",
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
                        name: "Estrategias de Comunicación Escrita",
                        key: "LEN-10131",
                        semester: 1
                    }
                    ,
                    {
                        name: "Fundamentos de Química",
                        key: "IIO-15130",
                        semester: 2
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
                        name: "Ideas e Inst. Polts. y Sociales II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
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
                        name: "Cálculo Diferencial e Integral I",
                        key: "MAT-14100",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probl. de la Civilización Contemp. I",
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
                        name: "Contabilidad I",
                        key: "CON-10100",
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
                        name: "Probl. de la Civilización Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Inst. Polts. y Sociales III(A)",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
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
                        pre: ["SDI-14105, COM-16203", "COM- 11103"],
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
                        name: "Circuitos Lógicos",
                        key: "SDI-11322",
                        pre: ["SDI-11120"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Probls. de la Real. Mexicana Contemp.",
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
                        name: "Gráficas por Computadora",
                        key: "COM-14106",
                        pre: ["COM-11103"],
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
                        name: "Principios de Mecatrónica",
                        key: "SDI-11561",
                        pre: ["SDI-11322", "COM-11102"],
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
                        name: "Anál. y Diseño de Sistemas de Infor.",
                        key: "COM-12102",
                        pre: ["COM-16203"],
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
                        name: "Inteligencia Artificial",
                        key: "COM-23101",
                        pre: ["COM-16203"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Fundamentos Matemáticos de la Comp.",
                        key: "COM-14101",
                        pre: ["SDI-11322"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Redes de Computadoras",
                        key: "SDI-13760",
                        pre: ["MAT-14102"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Sistemas de Comercio Electrónico",
                        key: "SDI-24810",
                        pre: ["COM-12101"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Organización y Programación de Comp.",
                        key: "COM-11107",
                        pre: ["SDI-11322"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Ingeniería de Software",
                        key: "COM-22104",
                        pre: ["COM-16203"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Diseño y Arquitectura de Redes",
                        key: "SDI-13782",
                        pre: ["SDI-13760"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Sistemas Operativos",
                        key: "COM-14104",
                        pre: ["SDI-11561"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Sistemas Distribuidos",
                        key: "COM-22105",
                        pre: ["COM-12102"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Seminario de Titulación",
                        key: "SDI-15816",
                        semester: 8
                    }
                ]
            }]
    },

    {
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
    },

    {
        name: "Ciencia Política",
        planes: [
            {
                name: "cpl_E",
                classes: [
                    {
                        name: "Introducción a la Ciencia Política",
                        key: "CSO-10001",
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
                        name: "Ideas e Instit. Politic. y Soc. I",
                        key: "EGN-17121",
                        semester: 1
                    }
                    ,
                    {
                        name: "Problemas de la Civ. Contemp. I",
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
                        name: "Elección Pública I",
                        key: "CSO-15021",
                        pre: ["CSO-10001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Seminario de Análisis Político****",
                        key: "CSO-10003",
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
                        name: "Matemáticas I",
                        key: "MAT-11100",
                        pre: ["MAT-11001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Ideas e Instit. Politic. y Soc. II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Problemas de la Civ. Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Computación I",
                        key: "COM-16401",
                        semester: 2
                    }
                    ,
                    {
                        name: "Política Comparada I",
                        key: "CSO-14021",
                        pre: ["CSO-10001"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Teoría Política Clásica I",
                        key: "CSO-11011",
                        semester: 3
                    }
                    ,
                    {
                        name: "Economía III",
                        key: "ECO-11103",
                        pre: ["ECO-12102-MAT-11100"],
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
                        pre: ["MAT-11100, COM-16401"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Historia Política Contemporánea",
                        key: "CSO-12013",
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polític. y Soc. III(A)",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Teoría Política Clásica II",
                        key: "CSO-11012",
                        pre: ["CSO-11011"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Política Comparada II",
                        key: "CSO-14041",
                        pre: ["CSO-14021"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Elección Pública II",
                        key: "CSO-15022",
                        pre: ["CSO-15021"],
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
                        name: "Estadística II",
                        key: "EST-10102",
                        pre: ["EST-10101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Historia de México I",
                        key: "CSO-12041",
                        semester: 4
                    }
                    ,
                    {
                        name: "Teoría Política Contemporánea",
                        key: "CSO-11021",
                        pre: ["CSO-11012"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Política Comparada III",
                        key: "CSO-14042",
                        pre: ["CSO-14041"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Elección Pública III",
                        key: "CSO-15024",
                        pre: ["CSO-15022"],
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
                        name: "Métodos de Investigación Aplicada",
                        key: "CSO-17041",
                        pre: ["EST-10102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Historia de México II",
                        key: "CSO-12042",
                        pre: ["CSO-12041"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Políticas Públicas",
                        key: "CSO-16042",
                        pre: ["CSO-15021"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Política y Gobierno de México",
                        key: "CSO-14045",
                        pre: ["CSO-14041"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Historia de México III",
                        key: "CSO-12049",
                        pre: ["CSO-12042"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Opinión Pública",
                        key: "CSO-14051",
                        pre: ["CSO-17041"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Economía V",
                        key: "ECO-12105",
                        pre: ["MAT-11101, ECO-11103"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Mét. Estad. para C. Pol. y R.I.",
                        key: "EST-13101",
                        pre: ["MAT-11310, EST-10102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Economía Política I",
                        key: "CSO-15041",
                        pre: ["ECO-11103"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Metodología Política Avanzada",
                        key: "CSO-17042",
                        pre: ["EST-13101"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Instit. de Derecho Público Mex. I",
                        key: "DER-10003",
                        semester: 7
                    }
                    ,
                    {
                        name: "Probs. de la Real. Mex. Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17142, CSO-12042"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Economía Política II",
                        key: "CSO-15043",
                        pre: ["ECO-11103"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Seminario de Titulación I",
                        key: "CSO-19075",
                        pre: ["CSO-17041"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Seminario de Titulación II",
                        key: "CSO-19076",
                        pre: ["CSO-17041"],
                        semester: 8
                    }
                ]
            }]
    },

    {
        name: "Derecho",
        planes: [
            {
                name: "der_E",
                classes: [
                    {
                        name: "Introducción a las matemáticas",
                        key: "MAT-11001",
                        semester: 1
                    }
                    ,
                    {
                        name: "Teoria del Derecho I",
                        key: "DER-11101",
                        semester: 1
                    }
                    ,
                    {
                        name: "Seminario de Teoria del Derecho I",
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
                        name: "Problemas de la Civilización Contemporánea I",
                        key: "EGN-17141",
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
                        name: "Matemáticas I",
                        key: "MAT-11100",
                        pre: ["MAT-11001"],
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
                        name: "Teoría del Derecho II",
                        key: "DER-11202",
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
                        name: "Teoría Política Clásica I",
                        key: "CSO-11011",
                        pre: ["DER-11101"],
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
                        name: "Economía I",
                        key: "ECO-11101",
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
                        name: "Métodos Cuantitativos para Derecho",
                        key: "MAT-10101",
                        pre: ["MAT-11100"],
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
                        name: "Argumentación oral y escrita",
                        key: "DER-11304",
                        pre: ["DER-11203"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Teoria Política Clásica II",
                        key: "CSO-11012",
                        pre: ["CSO-11011"],
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
                        name: "Economía II",
                        key: "ECO-12102",
                        pre: ["ECO-11101"],
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
                        name: "Derecho Constitucional I",
                        key: "DER-15402",
                        pre: ["DER-11304"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Teorías del Delito",
                        key: "DER-14402",
                        pre: ["DER-11304"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Contabilidad",
                        key: "CON-10100",
                        semester: 4
                    }
                    ,
                    {
                        name: "Historia Socio Política de México",
                        key: "EGN-17161",
                        pre: ["EGN-17123"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Computación I",
                        key: "COM-16401",
                        semester: 4
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
                        name: "Derecho Constitucional II",
                        key: "DER-15505",
                        pre: ["DER-15402"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Delitos",
                        key: "DER-14505",
                        pre: ["DER-14402"],
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
                        name: "Problemas de la Realidad Mexicana Contemporánea",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Derecho Internacional Publico",
                        key: "DER-18701",
                        pre: ["DER-13403"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Derecho Laboral I",
                        key: "DER-19501",
                        pre: ["DER-13504"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Análisis Economico del Derecho I",
                        key: "ECO-14207",
                        pre: ["ECO-12102", "MAT-10101"],
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
                        name: "Derecho Administrativo I",
                        key: "DER-17601",
                        pre: ["DER-15505"],
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
                        name: "Teoria General del Proceso",
                        key: "DER-13406",
                        pre: ["DER-15505"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Derecho Constitucional III",
                        key: "DER-15506",
                        pre: ["DER-15505"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Derecho Laboral II",
                        key: "DER-19602",
                        pre: ["DER-19501"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Derecho Fiscal I",
                        key: "DER-17703",
                        pre: ["DER-17601", "CON-10100"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Procedimientos Civiles y Mercantiles",
                        key: "DER-13607",
                        pre: ["DER-13406"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Derecho Administrativo II",
                        key: "DER-17702",
                        pre: ["DER-17601"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Derecho Mercantil III",
                        key: "DER-16702",
                        pre: ["DER-16602"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Derecho Procesal Penal",
                        key: "DER-14603",
                        pre: ["DER-14505, DER-13406"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Procedimientos Constitucionales",
                        key: "DER-15704",
                        pre: ["DER-15506, DER-13607", "DER-14603"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Derecho Internacional Privado",
                        key: "DER-18802",
                        pre: ["DER-13607"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Derecho Fiscal II",
                        key: "DER-17804",
                        pre: ["DER-17703"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Análisis Económico del Derecho II",
                        key: "ECO-14208",
                        pre: ["ECO-14207"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Filosofía del Derecho",
                        key: "DER-11805",
                        pre: ["DER-13607"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Técnicas de Argumentación Jurídica",
                        key: "DER-11907",
                        pre: ["DER-13607", "ECO-14208"],
                        semester: 9
                    }
                ]
            }
        ]
    },

    {
        name: "Economía",
        planes: [
            {
                name: "eco_F",
                classes: [
                    {
                        name: "Ideas e Inst. Políticas y Sociales I",
                        key: "EGN-17121",
                        semester: 1
                    }
                    ,
                    {
                        name: "Probl. de la Civ. Contemporánea I",
                        key: "EGN-17141",
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
                        name: "Introd. a la Matemática Superior",
                        key: "MAT-14001",
                        semester: 1
                    }
                    ,
                    {
                        name: "Estrategias de Comunicac. Escrita",
                        key: "LEN-10131",
                        semester: 1
                    }
                    ,
                    {
                        name: "Ideas e Instit. Políticas y Sociales II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probl. de la Civ. Contemporánea II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
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
                        name: "Contabilidad I",
                        key: "CON-10100",
                        semester: 2
                    }
                    ,
                    {
                        name: "Cálculo I",
                        key: "MAT-12100",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Herramientas Comput. y Algoritmos",
                        key: "COM-16301",
                        semester: 3
                    }
                    ,
                    {
                        name: "Álgebra Matricial",
                        key: "MAT-12310",
                        pre: ["MAT-12100"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Economía III",
                        key: "ECO-21103",
                        pre: ["ECO-12102", "MAT-12100"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Cálculo II",
                        key: "MAT-12101",
                        pre: ["MAT-12100"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Derecho Público",
                        key: "DER-10113",
                        pre: ["ECO-12102", "MAT-12100"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polít. y Sociales III (A)",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Historia Socio-política de México",
                        key: "EGN-17161",
                        pre: ["EGN-17123"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Economía IV",
                        key: "ECO-21104",
                        pre: ["ECO-21103", "MAT-12101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Economía V",
                        key: "ECO-22105",
                        pre: ["ECO-21103", "MAT-12101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Probabilidad",
                        key: "EST-11101",
                        pre: ["MAT-12101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Cálculo III",
                        key: "MAT-12102",
                        pre: ["MAT-12101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Historia del Análisis Económico",
                        key: "ECO-10301",
                        pre: ["ECO-12102", "EGN-17123"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Probl. de la Real. Mex. Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17161", "EGN-17142"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Inferencia Estadística",
                        key: "EST-11102",
                        pre: ["EST-11101", "MAT-12102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Seminario de la Econ. de México",
                        key: "ECO-17103",
                        pre: ["ECO-21104, ECO-22105"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Economía Internacional I",
                        key: "ECO-13101",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Organización Industrial",
                        key: "ECO-14301",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Teoría y Política Monetaria",
                        key: "ECO-12201",
                        pre: ["ECO-22105"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Historia Económica de México",
                        key: "ECO-17100",
                        pre: ["ECO-22105", "EGN-17162"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Finanzas Públicas",
                        key: "ECO-15101",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Desarrollo Económico",
                        key: "ECO-18101",
                        pre: ["ECO-21104, ECO-15101"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Seminario de Investig. Econ. I",
                        key: "ECO-10204",
                        pre: ["ECO-22105", "ECO-21104"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Economía Internacional II",
                        key: "ECO-13102",
                        pre: ["ECO-13101", "ECO-12201"],
                        semester: 9
                    }
                ]
            }]
    },

    {
        name: "Economía y Derecho",
        planes: [
            {
                name: "ede_C",
                classes: [
                    {
                        name: "Ideas e Instit. Polít. y Soc. I",
                        key: "EGN-17121",
                        semester: 1
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. I",
                        key: "EGN-17141",
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
                        name: "Introd. a la Matemática Superior",
                        key: "MAT-14001",
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
                        name: "Ideas e Instit. Polít. y Soc. II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
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
                        name: "Cálculo I",
                        key: "MAT-12100",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Inv. y Redacción jurídica",
                        key: "DER-11203",
                        pre: ["DER-11101", "LEN-10131"],
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
                        name: "Ideas e Instit. Polít. y Soc. III(A)",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Algebra Matricial",
                        key: "MAT-12310",
                        pre: ["MAT-12100"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Economía III",
                        key: "ECO-21103",
                        pre: ["ECO-12102", "MAT-12100"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Cálculo II",
                        key: "MAT-12101",
                        pre: ["MAT-12100"],
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
                        name: "Contabilidad I",
                        key: "CON-10100",
                        semester: 3
                    }
                    ,
                    {
                        name: "Herramientas Comp. y Algoritmos",
                        key: "COM-16301",
                        semester: 3
                    }
                    ,
                    {
                        name: "Historia del Análisis Económico",
                        key: "ECO-10301",
                        pre: ["ECO-12102", "EGN-17123"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Cálculo III",
                        key: "MAT-12102",
                        pre: ["MAT-12101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Probabilidad",
                        key: "EST-11101",
                        pre: ["MAT-12101"],
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
                        name: "Historia Sociopolítica de México",
                        key: "EGN-17161",
                        pre: ["EGN-17123"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Teoría política clásica I",
                        key: "CSO-11011",
                        pre: ["DER-11101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Economía IV",
                        key: "ECO-21104",
                        pre: ["ECO-21103", "MAT-12101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Economía V",
                        key: "ECO-22105",
                        pre: ["ECO-21103", "MAT-12101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Inferencia Estadística",
                        key: "EST-11102",
                        pre: ["EST-11101", "MAT-12102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Mat. Aplic. a la Economía",
                        key: "MAT-24630",
                        pre: ["MAT-12102"],
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
                        name: "Historia Der. Mex.",
                        key: "DER-12202",
                        pre: ["DER-11202", "DER-11203"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Teoría política clásica II",
                        key: "CSO-11012",
                        pre: ["CSO-11011"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Argumentación Oral y Escrita",
                        key: "DER-11304",
                        pre: ["DER-11203"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Problemas de la Real. Mex. Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Economía Internacional I",
                        key: "ECO-13101",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Derecho Laboral I",
                        key: "DER-19501",
                        pre: ["DER-13504"],
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
                        name: "Teorías del Delito",
                        key: "DER-14402",
                        pre: ["DER-11304"],
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
                        name: "Finanzas Públicas",
                        key: "ECO-15101",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Econometría",
                        key: "EST-11104",
                        pre: ["EST-11102", "MAT-12310"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Microeconomía Avanzada I",
                        key: "ECO-11121",
                        pre: ["ECO-21104, MAT-24630", "ECO-22105"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Organización Industrial",
                        key: "ECO-14301",
                        pre: ["ECO-21104", "ECO-22105"],
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
                        name: "Derecho Mercantil I",
                        key: "DER-16501",
                        pre: ["DER-13403"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Derecho Laboral II",
                        key: "DER-19602",
                        pre: ["DER-19501"],
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
                        name: "Seminario de Derecho Constit. II",
                        key: "DER-15505",
                        semester: 7
                    }
                    ,
                    {
                        name: "Teoría y Política Monetaria",
                        key: "ECO-12201",
                        pre: ["ECO-22105"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Microeconomía Avanzada II",
                        key: "ECO-11122",
                        pre: ["ECO-11121"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Crecimiento Económico",
                        key: "ECO-18300",
                        pre: ["ECO-22105, MAT-24630", "ECO-21104"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Sem. de la Economía de México",
                        key: "ECO-17103",
                        pre: ["ECO-21104", "ECO-22105"],
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
                        name: "Derecho Constitucional III",
                        key: "DER-15506",
                        pre: ["DER-15505"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Seminario de Derecho Constitucional III",
                        key: "DER-15506",
                        semester: 8
                    }
                    ,
                    {
                        name: "Teoría Gral. del Proceso",
                        key: "DER-13406",
                        pre: ["DER-15505"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Análisis Económico del Derecho II",
                        key: "ECO-14208",
                        pre: ["ECO-21104"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Microeconometría Aplicada",
                        key: "ECO-10516",
                        pre: ["EST-11104, ECO-21104", "ECO-22105"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Historia Económica de México",
                        key: "ECO-17100",
                        pre: ["ECO-22105", "EGN-17162"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Derecho Proc. Penal",
                        key: "DER-14603",
                        pre: ["DER-14505, DER-13406"],
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
                        name: "Proced. Civ. y Mercantil.",
                        key: "DER-13607",
                        pre: ["DER-13406"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Economía Internacional II",
                        key: "ECO-13102",
                        pre: ["ECO-12201", "ECO-13101"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Desarrollo Económico",
                        key: "ECO-18101",
                        pre: ["ECO-21104", "ECO-15101"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Procedimientos Constitucionales",
                        key: "DER-15704",
                        pre: ["DER-15506, DER-13607, DER-14603"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Derecho Mercantil II",
                        key: "DER-16602",
                        pre: ["DER-16501"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Economía de la Regulación",
                        key: "ECO-14303",
                        pre: ["ECO-14301"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Macroeconomía Avanzada",
                        key: "ECO-12121",
                        pre: ["ECO-11121, ECO-13102", "ECO-18300"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Economía Política",
                        key: "ECO-15111",
                        pre: ["ECO-21104"],
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
                        name: "Derecho Fiscal I",
                        key: "DER-17703",
                        pre: ["CON-10100", "DER-17601"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Derecho Internacional Público",
                        key: "DER-18701",
                        pre: ["DER-13403"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Filosofía del Derecho",
                        key: "DER-11805",
                        pre: ["DER-13607"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Der. Mercantil III",
                        key: "DER-16702",
                        pre: ["DER-16602"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Derecho Internacional Privado",
                        key: "DER-18802",
                        pre: ["DER-13607"],
                        semester: 12
                    }
                    ,
                    {
                        name: "Derecho Fiscal II",
                        key: "DER-17804",
                        pre: ["DER-17703"],
                        semester: 12
                    }
                    ,
                    {
                        name: "Seminario de Inv. Económica",
                        key: "ECO-10204",
                        pre: ["ECO-22105", "ECO-21104"],
                        semester: 12
                    }
                ]
            }

        ]
    },

    {
        name: "Economía y Matemáticas Aplicadas",
        planes: [
            {
                name: "ema_C",
                classes: [
                    {
                        name: "Introd. a la Matemática Superior",
                        key: "MAT-14001",
                        semester: 1
                    }
                    ,
                    {
                        name: "Herramientas Com. y Algorit.",
                        key: "COM-16301",
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
                        name: "Estrategias de Comunicación Escrita",
                        key: "LEN-10131",
                        semester: 1
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polít. y Soc. I",
                        key: "EGN-17121",
                        semester: 1
                    }
                    ,
                    {
                        name: "Probs.de la Civ. Contemp. I",
                        key: "EGN-17141",
                        semester: 1
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
                        name: "Geometría Analítica",
                        key: "MAT-14200",
                        semester: 2
                    }
                    ,
                    {
                        name: "Algebra Superior I",
                        key: "MAT-14300",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Ideas e Instituc.Politic.y Soc. II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
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
                        name: "Contabilidad I",
                        key: "CON-10100",
                        semester: 2
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
                        name: "Algebra Lineal I",
                        key: "MAT-14201",
                        pre: ["MAT-14200"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Algebra Superior II",
                        key: "MAT-14301",
                        pre: ["MAT-14300"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instituc.Politic.y Soc.III(A)",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Algorítmica y Programación",
                        key: "COM-11302",
                        pre: ["COM-16301"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Economía III",
                        key: "ECO-21103",
                        pre: ["ECO-12102", "MAT-14100"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Cálculo Diferencial e Integral III",
                        key: "MAT-14102",
                        pre: ["MAT-14201", "MAT-14101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Algebra Lineal II",
                        key: "MAT-14310",
                        pre: ["MAT-14201"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Cálculo de Probabilidades I",
                        key: "EST-14101",
                        pre: ["MAT-14301", "MAT-14101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Matemática Computacional",
                        key: "MAT-14390",
                        pre: ["COM-11302, MAT-14201", "MAT-14101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Economía IV",
                        key: "ECO-21104",
                        pre: ["ECO-21103", "MAT-14101"],
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
                        name: "Sistemas Dinámicos I",
                        key: "MAT-24210",
                        pre: ["MAT-14102", "MAT-14310"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Análisis Matemático I",
                        key: "MAT-24110",
                        pre: ["MAT-14102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Cálculo de Probabilidades II",
                        key: "EST-14102",
                        pre: ["EST-14101", "MAT-14102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Probs. de la Real. Mex. Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Economía V",
                        key: "ECO-22105",
                        pre: ["ECO-21103", "MAT-14101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Derecho Público",
                        key: "DER-10113",
                        pre: ["ECO-12102", "MAT-14100"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Análisis Matemático II",
                        key: "MAT-24111",
                        pre: ["MAT-24110"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Estadística Matemática",
                        key: "EST-14103",
                        pre: ["EST-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Optimización",
                        key: "MAT-22211",
                        pre: ["MAT-24110", "MAT-24210"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Historia del Análisis Económico",
                        key: "ECO-10301",
                        pre: ["ECO-12102", "EGN-17123"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Seminario de la Economía de México",
                        key: "ECO-17103",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Economía Internacional I",
                        key: "ECO-13101",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Sistemas Dinámicos II(A)",
                        key: "MAT-24211",
                        pre: ["MAT-24210"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Cálculo Numérico I",
                        key: "MAT-14400",
                        pre: ["MAT-14102, MAT-14310", "MAT-14390"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Estadística Aplicada II",
                        key: "EST-24105",
                        pre: ["EST-14103"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Teoría y Política Monetaria",
                        key: "ECO-12201",
                        pre: ["ECO-22105"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Finanzas Públicas",
                        key: "ECO-15101",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Historia Económica de México",
                        key: "ECO-17100",
                        pre: ["ECO-22105", "EGN-17162"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Procesos Estocásticos I",
                        key: "EST-14107",
                        pre: ["EST-14102"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Programación Lineal",
                        key: "MAT-24410",
                        pre: ["MAT-14400"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Estadística Aplicada III",
                        key: "EST-24106",
                        pre: ["EST-14103"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Teoría del Prod. y el Consumidor",
                        key: "ECO-21111",
                        pre: ["ECO-21104, ECO-22105", "MAT-24110"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Organización Industrial",
                        key: "ECO-14301",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Macroeconometría Avanzada",
                        key: "ECO-20514",
                        pre: ["EST-24105"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Análisis Aplicado I",
                        key: "MAT-24430",
                        pre: ["MAT-24410", "MAT-24111"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Investigación de Operaciones I",
                        key: "MAT-24500",
                        pre: ["MAT-24410"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Equilibrio General",
                        key: "ECO-21112",
                        pre: ["ECO-21111"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Macroeconomía Dinámica I",
                        key: "ECO-22112",
                        pre: ["ECO-21111, ECO-22105", "MAT-24210"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Microeconometría Avanzada",
                        key: "ECO-20513",
                        pre: ["ECO-21104, ECO-22105", "EST-24105"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Desarrollo Económico",
                        key: "ECO-18101",
                        pre: ["ECO-21104", "ECO-15101"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Optimización Numérica I",
                        key: "MAT-24431",
                        pre: ["MAT-24430"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Teoría de Juegos",
                        key: "ECO-21113",
                        pre: ["ECO-21111"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Macroeconomía Dinámica II",
                        key: "ECO-22113",
                        pre: ["ECO-22112"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Economía Internacional II",
                        key: "ECO-13102",
                        pre: ["ECO-13101", "ECO-12201"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Seminario de Inv. Económica I",
                        key: "ECO-10204",
                        pre: ["ECO-22105", "ECO-21104"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Seminario de Inv. Económica II",
                        key: "ECO-10202",
                        pre: ["ECO-22113"],
                        semester: 11
                    }
                ]
            }
        ]
    },

    {
        name: "Economía y Ciencia Política",
        planes: [
            {
                name: "epl_F",
                classes: [
                    {
                        name: "Introducción a la Ciencia Política",
                        key: "CSO-10001",
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
                        name: "Economía I",
                        key: "ECO-11101",
                        semester: 1
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polític. y Soc. I",
                        key: "EGN-17121",
                        semester: 1
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemporánea I",
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
                        name: "Elección Pública I",
                        key: "CSO-15021",
                        pre: ["CSO-10001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Seminario de Análisis Político",
                        key: "CSO-10003",
                        semester: 2
                    }
                    ,
                    {
                        name: "Contabilidad I",
                        key: "CON-10100",
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
                        name: "Cálculo I",
                        key: "MAT-12100",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polític. y Soc. II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemporánea II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Política Comparada I",
                        key: "CSO-14021",
                        pre: ["CSO-10001"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Teoría Política Clásica I",
                        key: "CSO-11011",
                        semester: 3
                    }
                    ,
                    {
                        name: "Economía III",
                        key: "ECO-21103",
                        pre: ["ECO-12102, MAT-12100"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Cálculo II",
                        key: "MAT-12101",
                        pre: ["MAT-12100"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Algebra Matricial",
                        key: "MAT-12310",
                        pre: ["MAT-12100"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Herramientas Com. y Algorit.",
                        key: "COM-16301",
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polític. y Soc. III",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Teoría Política Clásica II",
                        key: "CSO-11012",
                        pre: ["CSO-11011"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Elección Pública II",
                        key: "CSO-15022",
                        pre: ["CSO-15021"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Cálculo III",
                        key: "MAT-12102",
                        pre: ["MAT-12101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Economía IV",
                        key: "ECO-21104",
                        pre: ["ECO-21103", "MAT-12101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Economía V",
                        key: "ECO-22105",
                        pre: ["ECO-21103", "MAT-12101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Historia Socio Política de México",
                        key: "EGN-17161",
                        pre: ["EGN-17123"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Derecho Público",
                        key: "DER-10113",
                        semester: 5
                    }
                    ,
                    {
                        name: "Política Comparada II",
                        key: "CSO-14041",
                        pre: ["CSO-14021"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Elección Pública III",
                        key: "CSO-15024",
                        pre: ["CSO-15022"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Seminario de la Economía de México",
                        key: "ECO-17103",
                        pre: ["ECO-21104, ECO-22105"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Economía Política I",
                        key: "CSO-15041",
                        pre: ["ECO-21103"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Probabilidad",
                        key: "EST-11101",
                        pre: ["MAT-12101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Teoría Política Contemporánea",
                        key: "CSO-11021",
                        pre: ["CSO-11012"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Política Comparada III",
                        key: "CSO-14042",
                        pre: ["CSO-14041"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Historia de México I",
                        key: "CSO-12041",
                        semester: 6
                    }
                    ,
                    {
                        name: "Historia del Análisis Económico",
                        key: "ECO-10301",
                        pre: ["ECO-12102, EGN-17123"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Inferencia Estadística",
                        key: "EST-11102",
                        pre: ["EST-11101, MAT-12102"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Historia de México II",
                        key: "CSO-12042",
                        pre: ["CSO-12041"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Economía Internacional I",
                        key: "ECO-13101",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Política y Gobierno de México",
                        key: "CSO-14045",
                        pre: ["CSO-14041"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Finanzas Públicas",
                        key: "ECO-15101",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Probs. de la Realidad Mex. Contemporánea",
                        key: "EGN-17162",
                        pre: ["EGN-17142, EGN-17161,CSO-12042"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Métodos de Investigación Aplicada",
                        key: "CSO-17041",
                        pre: ["EST-11102"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Teoría y Política Monetaria",
                        key: "ECO-12201",
                        pre: ["ECO-22105"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Historia Económica de México",
                        key: "ECO-17100",
                        pre: ["ECO-22105, EGN-17162"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Opinión Pública",
                        key: "CSO-14051",
                        pre: ["CSO-17041"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Economía Politica II",
                        key: "CSO-15043",
                        pre: ["ECO-21103"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Organización Industrial",
                        key: "ECO-14301",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Economía Internacional II",
                        key: "ECO-13102",
                        pre: ["ECO-13101, ECO-12201"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Desarrollo Económico",
                        key: "ECO-18101",
                        pre: ["ECO-21104, ECO-15101"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Evaluación de Proyectos",
                        key: "ECO-15110",
                        pre: ["ECO-21104", "ECO-22105"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Seminario de Titulación I",
                        key: "CSO-19075",
                        pre: ["CSO-17041"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Seminario de Investigación Económica I",
                        key: "ECO-10204",
                        pre: ["ECO-22105, ECO-21104"],
                        semester: 11
                    }
                ]
            }]
    },

    {
        name: "Ingeniería Industrial e Ingeniería en Computación",
        planes: [
            {
                name: "ici_E",
                classes: [
                    {
                        name: "Algoritmos y Programas",
                        key: "COM-11101",
                        semester: 1
                    }
                    ,
                    {
                        name: "Introducción a la Ingeniería(1)",
                        key: "SDI-14105",
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
                        name: "Introd. a la Matemática Superior",
                        key: "MAT-14001",
                        semester: 1
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polít. y Soc. I",
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
                        name: "Cálculo Diferencial e Integral I",
                        key: "MAT-14100",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Ideas e Instituc.Politic.y Soc. II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Fundamentos de Química",
                        key: "IIO-15130",
                        semester: 2
                    }
                    ,
                    {
                        name: "Algebra Lineal I",
                        key: "MAT-14201",
                        pre: ["MAT-14200"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probs.de la Civ. Contemp. I",
                        key: "EGN-17141",
                        semester: 2
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
                        name: "Desarrollo de Aplicaciones Informáticas",
                        key: "COM-16203",
                        pre: ["COM-11102"],
                        semester: 3
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
                        name: "Cálculo Diferencial e Integral II",
                        key: "MAT-14101",
                        pre: ["MAT-14100"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ciencias de los Materiales",
                        key: "IIO-15140",
                        pre: ["IIO-15130"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instituc.Politic.y Soc.III",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Bases de Datos",
                        key: "COM-12101",
                        pre: ["SDI-14105 , COM-16203", "COM- 11103"],
                        semester: 4
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
                        name: "Probabilidad",
                        key: "EST-11101",
                        pre: ["MAT-14101"],
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
                        name: "Historia Socio-Política de México",
                        key: "EGN-17161",
                        pre: ["EGN-17123"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Diseño Asistido por Computadora",
                        key: "IIO-15170",
                        pre: ["SDI-11120"],
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
                        name: "Inferencia Estadística",
                        key: "EST-11102",
                        pre: ["EST-11101", "MAT-14102"],
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
                        name: "Probs. de la Real. Mex. Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 5
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
                        name: "Planeación y Control de la Producción",
                        key: "IIO-14161",
                        pre: ["EST-11101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Economía I",
                        key: "ECO-11101",
                        semester: 5
                    }
                    ,
                    {
                        name: "Principios de Mecatrónica(A)",
                        key: "SDI-11561",
                        pre: ["SDI-11322", "COM-11102"],
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
                        name: "Análisis y Diseño de Sist. de Información",
                        key: "COM-12102",
                        pre: ["COM-16203"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Procesos de Manufactura I",
                        key: "IIO-15150",
                        pre: ["IIO-15140"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Modelado y Optimización II",
                        key: "IIO-13160",
                        pre: ["EST-11101, IIO-13150", "MAT-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Simulación de Sistemas(A)",
                        key: "IIO-13180",
                        pre: ["COM-16203", "EST-11101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Economía II",
                        key: "ECO-12102",
                        pre: ["ECO-11101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Redes de Computadoras",
                        key: "SDI-13760",
                        pre: ["MAT-14102"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Organización y Programación de Comp.",
                        key: "COM-11107",
                        pre: ["SDI-11322"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Mercadotecnia I",
                        key: "ADM-16601",
                        semester: 7
                    }
                    ,
                    {
                        name: "Automatización y Control de Proc.",
                        key: "IIO-12170",
                        pre: ["COM-16203"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Logística y Distribución",
                        key: "IIO-14170",
                        pre: ["IIO-13150", "IIO-14161"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Ingeniería de Proc. de Negocios",
                        key: "IIO-14193",
                        pre: ["IIO-13180"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Ingeniería y Control de la Calidad",
                        key: "IIO-14162",
                        pre: ["EST-11102"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Sistemas Operativos",
                        key: "COM-14104",
                        pre: ["SDI-11561"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Estruct. Proc. y Comp. Org. I",
                        key: "ADM-14405",
                        pre: ["SDI-14105"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Fundamentos Matemáticos de la Comp.",
                        key: "COM-14101",
                        pre: ["SDI-11322"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Inteligencia Artificial",
                        key: "COM-23101",
                        pre: ["COM-16203"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Contabilidad I",
                        key: "CON-10100",
                        semester: 8
                    }
                    ,
                    {
                        name: "Sistemas de Comercio Electrónico",
                        key: "SDI-24810",
                        pre: ["COM-12102"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Ingeniería de Software",
                        key: "COM-22104",
                        pre: ["COM-16203"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Gráficas por Computadora",
                        key: "COM-14106",
                        pre: ["COM-11103"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Contabilidad de Costos para Ingenieros",
                        key: "CON-12110",
                        pre: ["CON-10100"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Finanzas I",
                        key: "ADM-15501",
                        pre: ["ECO-11101, CON-10100", "EST-11102"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Administración y Evaluación de Proy.",
                        key: "IIO-14180",
                        pre: ["EST-11101"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Sistemas Distribuidos",
                        key: "COM-22105",
                        pre: ["COM-12102"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Diseño de Planta",
                        key: "IIO-14160",
                        pre: ["IIO-13150"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Diseño y Desarrollo de Producto",
                        key: "IIO-12180",
                        pre: ["IIO-15170", "ADM-16601"],
                        semester: 10
                    }

                ]
            }]
    },

    {
        name: "Ingeniería en Computación y Matemáticas Aplicadas",
        planes: [
            {
                name: "icm_E",
                classes: [
                    {
                        name: "Introducción a la Ingeniería",
                        key: "SDI-14105",
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
                        name: "Introd. a la Matemática Superior",
                        key: "MAT-14001",
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
                        name: "Ideas e Instit. Polts y Soc. I",
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
                        name: "Fundamentos de Química",
                        key: "IIO-15130",
                        semester: 2
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
                        name: "Cálculo Diferencial e Integral I",
                        key: "MAT-14100",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Algebra Superior I",
                        key: "MAT-14300",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Ideas e Inst. Polts. y Sociales II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
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
                        name: "Probl. de la Civilización Contemp. I",
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
                        name: "Estructuras de Datos Avanzadas",
                        key: "COM-11103",
                        pre: ["COM-11102"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Probl. de la Civilización Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
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
                        name: "Algebra Superior II",
                        key: "MAT-14301",
                        pre: ["MAT-14300"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Inst. Polts. y Sociales III(A)",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
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
                        name: "Bases de Datos",
                        key: "COM-12101",
                        pre: ["SDI-14105, COM-16203", "COM- 11103"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Matemática Computacional",
                        key: "MAT-14390",
                        pre: ["COM-11102, MAT-14201", "MAT-14101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Cálculo de Probabilidades I",
                        key: "EST-14101",
                        pre: ["MAT-14301", "MAT-14101"],
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
                        name: "Historia Socio-Política de México",
                        key: "EGN-17161",
                        pre: ["EGN-17123"],
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
                        name: "Cálculo de Probabilidades II",
                        key: "EST-14102",
                        pre: ["EST-14101", "MAT-14102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Algebra Lineal II",
                        key: "MAT-14310",
                        pre: ["MAT-14201"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Economía I",
                        key: "ECO-11101",
                        semester: 5
                    }
                    ,
                    {
                        name: "Probs. de la Real. Mex. Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Principios de Mecatrónica(A)",
                        key: "SDI-11561",
                        pre: ["SDI-11322", "COM-11102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Anál. y Diseño de Sistemas de Infor.",
                        key: "COM-12102",
                        pre: ["COM-16203"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Economía II",
                        key: "ECO-12102",
                        pre: ["ECO-11101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Fundamentos Matemáticos de la Comp.",
                        key: "COM-14101",
                        pre: ["SDI-11322"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Análisis Matemático I",
                        key: "MAT-24110",
                        pre: ["MAT-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Cálculo Numérico I",
                        key: "MAT-14400",
                        pre: ["MAT-14102, MAT-14310, MAT-14390", "COM-16203"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Inteligencia Artificial",
                        key: "COM-23101",
                        pre: ["COM-16203"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Organización y Programación de Comp.",
                        key: "COM-11107",
                        pre: ["SDI-11322"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Sistemas de Comercio Electrónico",
                        key: "SDI-24810",
                        pre: ["COM-12101", "COM-12102"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Ingeniería de Software",
                        key: "COM-22104",
                        pre: ["COM-16203"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Gráficas por Computadora",
                        key: "COM-14106",
                        pre: ["COM-11103"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Programación Lineal",
                        key: "MAT-24410",
                        pre: ["MAT-14400"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Sistemas Dinámicos I",
                        key: "MAT-24210",
                        pre: ["MAT-14102", "MAT-14310"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Sistemas Operativos",
                        key: "COM-14104",
                        pre: ["SDI-11561"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Sistemas Distribuidos",
                        key: "COM-22105",
                        pre: ["COM-12102"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Sistemas Dinámicos II(A)",
                        key: "MAT-24211",
                        pre: ["MAT-24210"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Análisis Matemático II",
                        key: "MAT-24111",
                        pre: ["MAT-24110"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Estadística Matemática",
                        key: "EST-14103",
                        pre: ["EST-14102"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Procesos Estocásticos I",
                        key: "EST-14107",
                        pre: ["EST-14102"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Redes de Computadoras",
                        key: "SDI-13760",
                        pre: ["MAT-14102"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Análisis Aplicado I",
                        key: "MAT-24430",
                        pre: ["MAT-24410", "MAT-24111"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Investigación de Operaciones I",
                        key: "MAT-24500",
                        pre: ["MAT-24410"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Estadística Aplicada II",
                        key: "EST-24105",
                        pre: ["EST-14103"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Estadística Aplicada III",
                        key: "EST-24106",
                        pre: ["EST-14103"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Contabilidad I",
                        key: "CON-10100",
                        semester: 9
                    }
                    ,
                    {
                        name: "Diseño y Arquitectura de Redes",
                        key: "SDI-13782",
                        pre: ["SDI-13760"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Optimización Numérica I",
                        key: "MAT-24431",
                        pre: ["MAT-24430"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Seminario de Titulación",
                        key: "SDI-15816",
                        semester: 10
                    }
                ]
            }]
    },

    {
        name: "Ingeniería Industrial",
        planes: [
            {
                name: "ind_F",
                classes: [
                    {
                        name: "Introducción a la Matemática Sup.",
                        key: "MAT-14001",
                        semester: 1
                    }
                    ,
                    {
                        name: "Introducción a la Ingeniería",
                        key: "SDI-14105",
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
                        name: "Estrategias de Comunicación Escrita",
                        key: "LEN-10131",
                        semester: 1
                    }
                    ,
                    {
                        name: "Fundamentos de Química",
                        key: "IIO-15130",
                        semester: 2
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
                        name: "Ideas e Instit. Polít. y Sociales II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
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
                        name: "Cálculo Diferencial e Integral I",
                        key: "MAT-14100",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probl. de la Civ. Contemporánea I",
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
                        name: "Des. de Aplicaciones Informáticas",
                        key: "COM-16203",
                        pre: ["COM-11102"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Contabilidad I",
                        key: "CON-10100",
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
                        name: "Ciencias de los Materiales",
                        key: "IIO-15140",
                        pre: ["IIO-15130"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Probl. de la Civ. Contemporánea II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polít. y Sociales III (A)",
                        key: "EGN-17123",
                        pre: ["EGN-17141, EGN-17122", "LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Contab. de Costos para Ingenieros",
                        key: "CON-12110",
                        pre: ["CON-10100"],
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
                        name: "Diseño Asistido por Computadora",
                        key: "IIO-15170",
                        pre: ["SDI-11120"],
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
                        name: "Modelado y Optimización I",
                        key: "IIO-13150",
                        pre: ["MAT-14101", "MAT-14201"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Probls. Realidad Mexicana Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Planeación y Control de la Producción",
                        key: "IIO-14161",
                        pre: ["EST-11101"],
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
                        name: "Estrs. Procs. y Comp. Organizac. I",
                        key: "ADM-14405",
                        pre: ["SDI-14105"],
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
                        name: "Algoritmos Numéricos por Computad.",
                        key: "COM-14105",
                        pre: ["COM-16203", "MAT-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Modelado y Optimización II",
                        key: "IIO-13160",
                        pre: ["EST-11101, IIO-13150", "MAT-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Procesos de Manufactura I",
                        key: "IIO-15150",
                        pre: ["IIO-15140"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Simulación de Sistemas(A)",
                        key: "IIO-13180",
                        pre: ["COM-16203", "EST-11101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Ingeniería y Control de la Calidad",
                        key: "IIO-14162",
                        pre: ["EST-11102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Finanzas I",
                        key: "ADM-15501",
                        pre: ["CON-10100, ECO-11101", "EST-11102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Ingeniería de Procesos de Negocios",
                        key: "IIO-14193",
                        pre: ["IIO-13180"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Automatización y Control de Procesos",
                        key: "IIO-12170",
                        pre: ["COM-16203"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Logística y Distribución",
                        key: "IIO-14170",
                        pre: ["IIO-13150", "IIO-14161"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Mercadotecnia I",
                        key: "ADM-16601",
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
                        name: "Admón. y Evaluación de Proyectos",
                        key: "IIO-14180",
                        pre: ["EST-11101"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Diseño y Desarrollo de Producto",
                        key: "IIO-12180",
                        pre: ["ADM-16601", "IIO-15170"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Seminario de Titulación",
                        key: "IIO-16180",
                        semester: 8
                    }
                ]
            }

        ]
    },

    {
        name: "Matemáticas Aplicadas",
        planes: [
            {
                name: "ma_C",
                classes: [
                    {
                        name: "Introducción a la Matemática Superior",
                        key: "MAT-14001",
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
                        name: "Economía I",
                        key: "ECO-11101",
                        semester: 1
                    }
                    ,
                    {
                        name: "Contabilidad I",
                        key: "CON-10100",
                        semester: 1
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polít. y Soc. I",
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
                        name: "Cálculo Diferencial e Integral I",
                        key: "MAT-14100",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Algebra Superior I",
                        key: "MAT-14300",
                        pre: ["MAT-14001"],
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
                        name: "Ideas e Instituc.Politic.y Soc. II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probs.de la Civ. Contemp. I",
                        key: "EGN-17141",
                        semester: 2
                    }
                    ,
                    {
                        name: "Herramientas Com. y Algorit.",
                        key: "COM-16301",
                        semester: 2
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
                        name: "Algebra Lineal I",
                        key: "MAT-14201",
                        pre: ["MAT-14200"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Algebra Superior II",
                        key: "MAT-14301",
                        pre: ["MAT-14300"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Algorítmica y Programación",
                        key: "COM-11302",
                        pre: ["COM-16301"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instituc.Politic.y Soc.III",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Matemática Computacional",
                        key: "MAT-14390",
                        pre: ["MAT-14201, COM-11302", "MAT-14101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Cálculo Diferencial e Integral III",
                        key: "MAT-14102",
                        pre: ["MAT-14201", "MAT-14101"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Algebra Lineal II",
                        key: "MAT-14310",
                        pre: ["MAT-14201"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Cálculo de Probabilidades I",
                        key: "EST-14101",
                        pre: ["MAT-14301", "MAT-14101"],
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
                        name: "Cálculo Numérico I",
                        key: "MAT-14400",
                        semester: 5
                    }
                    ,
                    {
                        name: "Sistemas Dinámicos I",
                        key: "MAT-24210",
                        pre: ["MAT-14102", "MAT-14310"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Análisis Matemático I",
                        key: "MAT-24110",
                        pre: ["MAT-14102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Cálculo de Probabilidades II",
                        key: "EST-14102",
                        pre: ["EST-14101", "MAT-14102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Probs. de la Real. Mex. Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Programación Lineal",
                        key: "MAT-24410",
                        pre: ["MAT-14400"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Sistemas Dinámicos II",
                        key: "MAT-24211",
                        pre: ["MAT-24210"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Análisis Matemático II",
                        key: "MAT-24111",
                        pre: ["MAT-24110"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Procesos Estocásticos I",
                        key: "EST-14107",
                        pre: ["EST-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Estadística Matemática",
                        key: "EST-14103",
                        pre: ["EST-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Investigación de Operaciones I",
                        key: "MAT-24500",
                        pre: ["MAT-24410"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Análisis Aplicado I",
                        key: "MAT-24430",
                        pre: ["MAT-24410", "MAT-24111"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Estadística Aplicada II",
                        key: "EST-24105",
                        pre: ["EST-14103"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Estadística Aplicada III",
                        key: "EST-24106",
                        pre: ["EST-14103"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Optimización Numérica I",
                        key: "MAT-24431",
                        pre: ["MAT-24430"],
                        semester: 8
                    }
                ]
            }
        ]
    },

    {
        name: "Ingeniería en Negocios",
        planes: [
            {
                name: "neg_F",
                classes: [
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
                        name: "Introd. a la Matemática Superior",
                        key: "MAT-14001",
                        semester: 1
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polít. y Soc. I",
                        key: "EGN-17121",
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
                        name: "Cálculo Diferencial e Integral I",
                        key: "MAT-14100",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Ideas e Instituc.Politic.y Soc. II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probs.de la Civ. Contemp. I",
                        key: "EGN-17141",
                        semester: 2
                    }
                    ,
                    {
                        name: "Economía I",
                        key: "ECO-11101",
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
                        name: "Proceso Contable",
                        key: "CON-10001",
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
                        name: "Aplicación de las TI a los Negocios",
                        key: "COM-16414",
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
                        name: "Probs. de la Civ. Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Economía II",
                        key: "ECO-12102",
                        pre: ["ECO-11101"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instituc.Politic.y Soc.III(A)",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Conta. de costos para Ing.",
                        key: "CON-12110",
                        pre: ["CON-10001"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Sistemas Empresariales",
                        key: "SDI-25916",
                        pre: ["ADM-12107"],
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
                        name: "Cálculo Diferencial e Integral III",
                        key: "MAT-14102",
                        pre: ["MAT-14101", "MAT-14201"],
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
                        name: "Economía III",
                        key: "ECO-11103",
                        pre: ["ECO-12102", "MAT-14100"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Inteligencia de Negocios",
                        key: "COM-16413",
                        pre: ["COM-16203"],
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
                        name: "Administración Estratégica de Costos",
                        key: "CON-12003",
                        pre: ["CON-12110"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Probs. de la Real. Mex. Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 5
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
                        name: "Economía IV",
                        key: "ECO-11104",
                        pre: ["ECO-11103"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Estruct. Proc. y Comp. Org. I",
                        key: "ADM-14405",
                        pre: ["ADM-12107"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Mercadotecnia I",
                        key: "ADM-16601",
                        pre: ["EST-11101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Métodos de Pronósticos",
                        key: "ADM-11017",
                        pre: ["EST-11102", "MAT-14201"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Fundamentos de Finanzas",
                        key: "ADM-15507",
                        pre: ["EST-11102 , ECO-11103", "CON-10001"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Simulación de Sistemas(A)",
                        key: "IIO-13180",
                        pre: ["COM-16203", "EST-11101"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Modelado y Optimización II",
                        key: "IIO-13160",
                        pre: ["EST-11101, IIO-13150", "MAT-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Minería de Datos",
                        key: "COM-23106",
                        pre: ["ADM-11017", "COM-16413"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Ingeniería de Proc. de Negocios",
                        key: "IIO-14193",
                        pre: ["IIO-13180"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Inversiones",
                        key: "ADM-15510",
                        pre: ["ADM-15507", "ADM-11017"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Diseño y Cambio Organizacional",
                        key: "ADM-12013",
                        pre: ["ADM-14405"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Investigación de Mercados",
                        key: "ADM-16610",
                        pre: ["ADM-16601", "ADM-11017"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Ingeniería Financiera",
                        key: "ADM-15593",
                        pre: ["ADM-15510"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Planeación y Ejecución de Estrategias",
                        key: "ADM-12251",
                        pre: ["ADM-12013"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Modelos de Mercadotecnia",
                        key: "ADM-16644",
                        pre: ["ADM-16610"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Seminario de titulación",
                        key: "IIO-16180",
                        pre: ["ADM-15510", "ADM-16610"],
                        semester: 8
                    }
                ]
            }]
    },

    {
        name: "Relaciones Internacionales",
        planes: [
            {
                name: "ri_E",
                classes: [
                    {
                        name: "Economía I",
                        key: "ECO-11101",
                        semester: 1
                    }
                    ,
                    {
                        name: "Ideas e Instituc.Polític.y Soc. I",
                        key: "EGN-17121",
                        semester: 1
                    }
                    ,
                    {
                        name: "Probs.de la Civ. Contemp. I",
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
                        name: "Introd.a las Rel. Internacionales",
                        key: "EIN-11101",
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
                        name: "Historia de las Rel. Intern. I",
                        key: "EIN-12201",
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
                        name: "Ideas e Instituc.Polític.y Soc. II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probs.de la Civ. Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
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
                        name: "Computación I",
                        key: "COM-16401",
                        semester: 2
                    }
                    ,
                    {
                        name: "Contabilidad I",
                        key: "CON-10100",
                        semester: 2
                    }
                    ,
                    {
                        name: "Historia de las Rel. Intern. II",
                        key: "EIN-13202",
                        pre: ["EIN-12201"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Administración Internacional",
                        key: "ADM-11013",
                        pre: ["CON-10100"],
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
                        name: "Matemáticas II",
                        key: "MAT-11101",
                        pre: ["MAT-11100"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Métodos de Investigación en Rel. Intern,",
                        key: "EIN-13104",
                        pre: ["EIN-11101"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Ideas e Instituc.Polític.y Soc.III",
                        key: "EGN-17123",
                        pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Economía IV",
                        key: "ECO-11104",
                        pre: ["MAT-11101", "ECO-11103"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Historia de E.U.A.",
                        key: "EIN-14302",
                        semester: 4
                    }
                    ,
                    {
                        name: "Teoría de Rel. Internacionales",
                        key: "EIN-14102",
                        pre: ["EIN-13104"],
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
                        name: "Fundamentos Jurídicos",
                        key: "DER-10013",
                        semester: 4
                    }
                    ,
                    {
                        name: "Estadística I",
                        key: "EST-10101",
                        pre: ["MAT-11100", "COM-16401"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Proceso Político en E.U.A.: Dimensión Internacional",
                        key: "EIN-15302",
                        pre: ["EIN-14302"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Macroeconomía Intermedia",
                        key: "ECO-12133",
                        pre: ["ECO-11103"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Elección Pública I",
                        key: "CSO-15021",
                        pre: ["EGN-17123"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Probs.de la Real. Mex. Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17142", "EGN-17161"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Estadística II",
                        key: "EST-10102",
                        pre: ["EST-10101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Política de Rel. Eco. Internacionales",
                        key: "EIN-15105",
                        pre: ["EIN-14102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "América Latina",
                        key: "EIN-16403",
                        pre: ["EIN-15105"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Derecho Internacional Público I",
                        key: "DER-10005",
                        pre: ["DER-10013"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Europa Contemporánea",
                        key: "EIN-16402",
                        semester: 6
                    }
                    ,
                    {
                        name: "Métodos Estad. p/CP. y R.I.",
                        key: "EST-13101",
                        pre: ["EST-10102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Política Mexicana Contemp.",
                        key: "CSO-13041",
                        pre: ["EGN-17162"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Economía Internacional I",
                        key: "ECO-13101",
                        pre: ["ECO-11103"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Relaciones México-EUA-Canadá",
                        key: "EIN-17303",
                        pre: ["EIN-15302"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Derecho Internacional Público II",
                        key: "DER-10006",
                        pre: ["DER-10005"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Japón, China y el Sudeste Asiático",
                        key: "EIN-17403",
                        pre: ["EIN-15105"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Medio Oriente",
                        key: "EIN-19414",
                        semester: 7
                    }
                    ,
                    {
                        name: "Política Comparada I",
                        key: "CSO-14021",
                        pre: ["CSO-13041"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Formul. de la Polít. Ext.de México",
                        key: "EIN-17304",
                        pre: ["CSO-13041"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Seminario de Titulación",
                        key: "EIN-18602",
                        pre: ["EST-13101", "DER-10006"],
                        semester: 8
                    }
                ]
            }]
    },

    {
        name: "Relaciones Internacionales y Ciencia Política",
        planes: [
            {
                name: "rpl_C",
                classes: [
                    {
                        name: "Introducción a la Ciencia Política",
                        key: "CSO-10001",
                        semester: 1
                    }
                    ,
                    {
                        name: "Introd. a las Rel. Internacionales",
                        key: "EIN-11101",
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
                        name: "Ideas e Instituc. Polític. y Soc. I",
                        key: "EGN-17121",
                        semester: 1
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. I",
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
                        name: "Teoría de Relaciones Internacionales",
                        key: "EIN-14102",
                        pre: ["EIN-11101"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Historia Política Contemporánea",
                        key: "CSO-12013",
                        semester: 2
                    }
                    ,
                    {
                        name: "Seminario de Análisis Político",
                        key: "CSO-10003",
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
                        name: "Matemáticas I",
                        key: "MAT-11100",
                        pre: ["MAT-11001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Ideas e Instituc. Polític. y Soc. II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probs. de la Civ. Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Historia de las Rel. Intern. I",
                        key: "EIN-12201",
                        semester: 3
                    }
                    ,
                    {
                        name: "Historia de México I",
                        key: "CSO-12041",
                        semester: 3
                    }
                    ,
                    {
                        name: "Teoría Política Clásica I",
                        key: "CSO-11011",
                        semester: 3
                    }
                    ,
                    {
                        name: "Economía III",
                        key: "ECO-11103",
                        pre: ["ECO-12102, MAT-11100"],
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
                        name: "Ideas e Instituc. Polític. y Soc. III",
                        key: "y EGN-17123",
                        pre: ["EGN-17122, EGN-17141, LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Historia de las Rel. Intern. II",
                        key: "EIN-13202",
                        pre: ["EIN-12201"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Elección Pública I",
                        key: "CSO-15021",
                        pre: ["CSO-10001, EGN-17123"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Historia de México II",
                        key: "CSO-12042",
                        pre: ["CSO-12041"],
                        semester: 4
                    }
                    ,
                    {
                        name: "Computación I",
                        key: "COM-16401",
                        semester: 4
                    }
                    ,
                    {
                        name: "Economía IV",
                        key: "ECO-11104",
                        pre: ["ECO-11103, MAT-11101"],
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
                        name: "Historia de Estados Unidos",
                        key: "EIN-14302",
                        semester: 5
                    }
                    ,
                    {
                        name: "Elección Pública II",
                        key: "CSO-15022",
                        pre: ["CSO-15021"],
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
                        name: "Macroeconomía Intermedia",
                        key: "ECO-12133",
                        pre: ["ECO-11103", "MAT-11101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Estadística I",
                        key: "EST-10101",
                        pre: ["MAT-11100, COM-16401"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Probs. de la Real. Mex. Contemp.",
                        key: "EGN-17162",
                        pre: ["EGN-17142, EGN-17161, CSO-12042"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Proceso Político de E.U.A.",
                        key: "EIN-15302",
                        pre: ["EIN-14302"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Política de las Relaciones Eco. Intl.",
                        key: "EIN-15105",
                        pre: ["EIN-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Historia de México III",
                        key: "CSO-12049",
                        pre: ["CSO-12042"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Política Mexicana Contemporánea*",
                        key: "CSO-13041",
                        pre: ["EGN-17162"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Matemáticas III",
                        key: "MAT-11310",
                        pre: ["MAT-11100"],
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
                        name: "Relaciones México-E.U.A.-Canada",
                        key: "EIN-17303",
                        pre: ["EIN-15302"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Economía Internacional I",
                        key: "ECO-13101",
                        pre: ["ECO-11103"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Política Comparada I",
                        key: "CSO-14021",
                        pre: ["CSO-10001, CSO-13041"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Teoría Política Contemporánea",
                        key: "CSO-11021",
                        pre: ["CSO-11012"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Elección Pública III",
                        key: "CSO-15024",
                        pre: ["CSO-15022"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Métodos de Investigación Aplicada",
                        key: "CSO-17041",
                        pre: ["EST-10102"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Europa Contemporánea",
                        key: "EIN-16402",
                        semester: 8
                    }
                    ,
                    {
                        name: "Política Comparada II",
                        key: "CSO-14041",
                        pre: ["CSO-14021"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Métodos Estadísticos para C. Pol y RI",
                        key: "EST-13101",
                        pre: ["MAT-11310, EST-10102"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Instituciones del Derecho Púb. Mex. I",
                        key: "DER-10003",
                        semester: 8
                    }
                    ,
                    {
                        name: "Contabilidad I",
                        key: "CON-10100",
                        semester: 8
                    }
                    ,
                    {
                        name: "Economía Política I",
                        key: "CSO-15041",
                        pre: ["ECO-11103"],
                        semester: 8
                    }
                    ,
                    {
                        name: "América Latina",
                        key: "EIN-16403",
                        pre: ["EIN-15105"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Medio Oriente",
                        key: "EIN-19414",
                        semester: 9
                    }
                    ,
                    {
                        name: "Opinión Pública",
                        key: "CSO-14051",
                        pre: ["CSO-17041"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Economía Política II",
                        key: "CSO-15043",
                        pre: ["ECO-11103"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Derecho Internacional Público I",
                        key: "DER-10005",
                        pre: ["DER-10003"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Política y Gobierno de México",
                        key: "CSO-14045",
                        pre: ["CSO-14041"],
                        semester: 9
                    }
                    ,
                    {
                        name: "Administración Internacional",
                        key: "ADM-11013",
                        semester: 10
                    }
                    ,
                    {
                        name: "Japón, China y el Sudeste de Asia",
                        key: "EIN-17403",
                        semester: 10
                    }
                    ,
                    {
                        name: "Derecho Internacional Público II",
                        key: "DER-10006",
                        pre: ["DER-10005"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Metodología Política Avanzada",
                        key: "CSO-17042",
                        pre: ["EST-13101"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Política Comparada III",
                        key: "CSO-14042",
                        pre: ["CSO-14041"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Formulación de Política Exterior Mexicana",
                        key: "EIN-17304",
                        pre: ["CSO-13041"],
                        semester: 10
                    }
                    ,
                    {
                        name: "Seminario de Titulación I",
                        key: "CSO-19075",
                        pre: ["CSO-17041"],
                        semester: 11
                    }
                    ,
                    {
                        name: "Seminario de Titulación II",
                        key: "CSO-19076",
                        pre: ["CSO-17041"],
                        semester: 11
                    }
                ]
            }
        ]
    },

    {
        name: "Ingeniería en Telecomunicaciones",
        planes: [
            {
                name: "tel_F",
                classes: [
                    {
                        name: "Introducción a la Ingeniería",
                        key: "SDI-14105",
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
                        name: "Introd. a la Matemática Superior",
                        key: "MAT-14001",
                        semester: 1
                    }
                    ,
                    {
                        name: "Ideas e Instit. Polts y Soc. I",
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
                        name: "Geometría Analítica",
                        key: "MAT-14200",
                        semester: 1
                    }
                    ,
                    {
                        name: "Probl. de la Civilización Contemp. I",
                        key: "EGN-17141",
                        semester: 2
                    }
                    ,
                    {
                        name: "Fundamentos de Química",
                        key: "IIO-15130",
                        semester: 2
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
                        name: "Ideas e Inst. Polts. y Sociales II",
                        key: "EGN-17122",
                        pre: ["EGN-17121"],
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
                        name: "Cálculo Diferencial e Integral I",
                        key: "MAT-14100",
                        pre: ["MAT-14001"],
                        semester: 2
                    }
                    ,
                    {
                        name: "Probl. de la Civilización Contemp. II",
                        key: "EGN-17142",
                        pre: ["EGN-17141"],
                        semester: 3
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
                        name: "Ideas e Inst. Polts. y Sociales III",
                        key: "EGN-17123",
                        pre: ["EGN-17122", "EGN-17141", "LEN-10131"],
                        semester: 3
                    }
                    ,
                    {
                        name: "Contabilidad I",
                        key: "CON-10100",
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
                        pre: ["SDI-14105, COM-16203", "COM- 11103"],
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
                        name: "Circuitos Lógicos",
                        key: "SDI-11322",
                        pre: ["SDI-11120"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Problemas de la Realidad Mexicana Con",
                        key: "EGN-17162",
                        pre: ["EGN-17142, EGN-17161"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Sistemas Dinámicos",
                        key: "MAT-12210",
                        pre: ["MAT-14102"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Inferencia Estadística",
                        key: "EST-11102",
                        pre: ["MAT-14102, EST 11101"],
                        semester: 5
                    }
                    ,
                    {
                        name: "Señales y Sistemas",
                        key: "SDI-12515",
                        pre: ["MAT-14101"],
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
                        name: "Principios de Mecatrónica",
                        key: "SDI-11561",
                        pre: ["SDI-11322, COM-11102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Algoritmos Numéricos por Computadora",
                        key: "COM-14105",
                        pre: ["COM-16203, MAT-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Procesamiento Digital de Señales",
                        key: "SDI-12625",
                        pre: ["SDI-12515"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Señales Aleatorias y Ruido",
                        key: "SDI-15602",
                        pre: ["EST-11101, SDI-12515", "MAT-14102"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Teoría Electromagnética",
                        key: "SDI-12629",
                        pre: ["MAT-14102, MAT-12210"],
                        semester: 6
                    }
                    ,
                    {
                        name: "Redes de Computadoras",
                        key: "SDI-13760",
                        pre: ["MAT-14102"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Antenas y Radiación",
                        key: "SDI-12761",
                        pre: ["SDI-12629"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Redes Convergentes",
                        key: "SDI-13789",
                        semester: 7
                    }
                    ,
                    {
                        name: "Comunicaciones Digitales",
                        key: "SDI-12726",
                        pre: ["SDI-12515, SDI-15602"],
                        semester: 7
                    }
                    ,
                    {
                        name: "Diseño y Arquitectura de Redes",
                        key: "SDI-13782",
                        pre: ["SDI-13760"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Servicios de Telecomunicaciones",
                        key: "SDI-14804",
                        pre: ["SDI-13739,SDI-12629"],
                        semester: 8
                    }
                    ,
                    {
                        name: "Seminario de Titulación",
                        key: "SDI-15816",
                        semester: 8
                    }
                    ,
                    {
                        name: "Nuevas Tecnologías Inalámbricas",
                        key: "SDI-12872",
                        semester: 8
                    }
                    ,
                    {
                        name: "Comunicaciones Móviles",
                        key: "SDI-12882",
                        semester: 8
                    }]

            }]
    }

    // Faltan

    // Dirección Financiera

    // Ingenieria en Mecatrónica


];
var planes = [];
var carreras2 = [];
var reformat = function (carr) {

    var tempPlan = carr.planes[0];
    var tempMater = tempPlan.classes;
    var semesters = [];
    tempMater.forEach(function (item, i) {
        var tempSemNum = item.semester;
        delete item.semester;
        item.enabled = false;
        if (semesters[tempSemNum - 1] == null) {
            semesters[tempSemNum - 1] = {
                number: tempSemNum,
                classes: []
            };
        }
        semesters[tempSemNum - 1].classes.push(item);
    });
    tempPlan.semesters = semesters;
    delete tempPlan.classes;
    return tempPlan;
};


carreras.forEach(function (item, i) {
    var plan = reformat(item);
    var planName = plan.name;
    var tempCarr = item;
    planes.push(plan);
    tempCarr.planes = [];
    tempCarr.planes.push({name: planName, index: i});
    tempCarr.enabled=false;
    carreras2.push(tempCarr);
});
console.log('var planes ='+JSON.stringify(planes)+';');
console.log('var carreras ='+JSON.stringify(carreras2)+';');
