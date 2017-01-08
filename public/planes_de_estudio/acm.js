/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */
var acm = {
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
};