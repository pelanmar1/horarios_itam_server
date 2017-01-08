/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var ind = {
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
};