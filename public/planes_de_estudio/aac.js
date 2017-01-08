/**
 * Created by Pedro Lanzagorta M on 12/27/2016.
 */

//Administración y actuaría
var aac = {
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
};

