/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */
var der = {
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
};