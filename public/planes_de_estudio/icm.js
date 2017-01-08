/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var icm = {
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
};