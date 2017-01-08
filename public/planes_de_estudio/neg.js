/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var neg = {
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
};