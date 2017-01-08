/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */
var act = {
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
};