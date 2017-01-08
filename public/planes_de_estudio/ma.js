/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */


var ma = {
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
};