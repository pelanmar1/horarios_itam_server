/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */
var cat = {
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
};