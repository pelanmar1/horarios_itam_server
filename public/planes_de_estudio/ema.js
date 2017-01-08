/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var ema = {
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
};