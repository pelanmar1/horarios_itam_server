/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var ede = {
    name: "Economía y Derecho",
    planes: [
        {
            name: "ede_C",
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
                    name: "Economía I",
                    key: "ECO-11101",
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
                    name: "Teoría del Derecho I",
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
                    name: "Economía II",
                    key: "ECO-12102",
                    pre: ["ECO-11101"],
                    semester: 2
                }
                ,
                {
                    name: "Cálculo I",
                    key: "MAT-12100",
                    pre: ["MAT-14001"],
                    semester: 2
                }
                ,
                {
                    name: "Inv. y Redacción jurídica",
                    key: "DER-11203",
                    pre: ["DER-11101", "LEN-10131"],
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
                    name: "Negocio Jurídico y Personas",
                    key: "DER-13203",
                    pre: ["DER-11101"],
                    semester: 2
                }
                ,
                {
                    name: "Ideas e Instit. Polít. y Soc. III(A)",
                    key: "EGN-17123",
                    pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                    semester: 3
                }
                ,
                {
                    name: "Algebra Matricial",
                    key: "MAT-12310",
                    pre: ["MAT-12100"],
                    semester: 3
                }
                ,
                {
                    name: "Economía III",
                    key: "ECO-21103",
                    pre: ["ECO-12102", "MAT-12100"],
                    semester: 3
                }
                ,
                {
                    name: "Cálculo II",
                    key: "MAT-12101",
                    pre: ["MAT-12100"],
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
                    name: "Contabilidad I",
                    key: "CON-10100",
                    semester: 3
                }
                ,
                {
                    name: "Herramientas Comp. y Algoritmos",
                    key: "COM-16301",
                    semester: 3
                }
                ,
                {
                    name: "Historia del Análisis Económico",
                    key: "ECO-10301",
                    pre: ["ECO-12102", "EGN-17123"],
                    semester: 4
                }
                ,
                {
                    name: "Cálculo III",
                    key: "MAT-12102",
                    pre: ["MAT-12101"],
                    semester: 4
                }
                ,
                {
                    name: "Probabilidad",
                    key: "EST-11101",
                    pre: ["MAT-12101"],
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
                    name: "Historia Sociopolítica de México",
                    key: "EGN-17161",
                    pre: ["EGN-17123"],
                    semester: 4
                }
                ,
                {
                    name: "Teoría política clásica I",
                    key: "CSO-11011",
                    pre: ["DER-11101"],
                    semester: 4
                }
                ,
                {
                    name: "Economía IV",
                    key: "ECO-21104",
                    pre: ["ECO-21103", "MAT-12101"],
                    semester: 4
                }
                ,
                {
                    name: "Economía V",
                    key: "ECO-22105",
                    pre: ["ECO-21103", "MAT-12101"],
                    semester: 5
                }
                ,
                {
                    name: "Inferencia Estadística",
                    key: "EST-11102",
                    pre: ["EST-11101", "MAT-12102"],
                    semester: 5
                }
                ,
                {
                    name: "Mat. Aplic. a la Economía",
                    key: "MAT-24630",
                    pre: ["MAT-12102"],
                    semester: 5
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
                    name: "Historia Der. Mex.",
                    key: "DER-12202",
                    pre: ["DER-11202", "DER-11203"],
                    semester: 5
                }
                ,
                {
                    name: "Teoría política clásica II",
                    key: "CSO-11012",
                    pre: ["CSO-11011"],
                    semester: 5
                }
                ,
                {
                    name: "Argumentación Oral y Escrita",
                    key: "DER-11304",
                    pre: ["DER-11203"],
                    semester: 5
                }
                ,
                {
                    name: "Problemas de la Real. Mex. Contemp.",
                    key: "EGN-17162",
                    pre: ["EGN-17142", "EGN-17161"],
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
                    name: "Derecho Laboral I",
                    key: "DER-19501",
                    pre: ["DER-13504"],
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
                    name: "Teorías del Delito",
                    key: "DER-14402",
                    pre: ["DER-11304"],
                    semester: 6
                }
                ,
                {
                    name: "Derecho Constitucional I",
                    key: "DER-15402",
                    pre: ["DER-11304"],
                    semester: 6
                }
                ,
                {
                    name: "Finanzas Públicas",
                    key: "ECO-15101",
                    pre: ["ECO-21104", "ECO-22105"],
                    semester: 6
                }
                ,
                {
                    name: "Econometría",
                    key: "EST-11104",
                    pre: ["EST-11102", "MAT-12310"],
                    semester: 7
                }
                ,
                {
                    name: "Microeconomía Avanzada I",
                    key: "ECO-11121",
                    pre: ["ECO-21104, MAT-24630", "ECO-22105"],
                    semester: 7
                }
                ,
                {
                    name: "Organización Industrial",
                    key: "ECO-14301",
                    pre: ["ECO-21104", "ECO-22105"],
                    semester: 7
                }
                ,
                {
                    name: "Delitos",
                    key: "DER-14505",
                    pre: ["DER-14402"],
                    semester: 7
                }
                ,
                {
                    name: "Derecho Mercantil I",
                    key: "DER-16501",
                    pre: ["DER-13403"],
                    semester: 7
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
                    name: "Derecho Constitucional II",
                    key: "DER-15505",
                    pre: ["DER-15402"],
                    semester: 7
                }
                ,
                {
                    name: "Seminario de Derecho Constit. II",
                    key: "DER-15505",
                    semester: 7
                }
                ,
                {
                    name: "Teoría y Política Monetaria",
                    key: "ECO-12201",
                    pre: ["ECO-22105"],
                    semester: 8
                }
                ,
                {
                    name: "Microeconomía Avanzada II",
                    key: "ECO-11122",
                    pre: ["ECO-11121"],
                    semester: 8
                }
                ,
                {
                    name: "Crecimiento Económico",
                    key: "ECO-18300",
                    pre: ["ECO-22105, MAT-24630", "ECO-21104"],
                    semester: 8
                }
                ,
                {
                    name: "Sem. de la Economía de México",
                    key: "ECO-17103",
                    pre: ["ECO-21104", "ECO-22105"],
                    semester: 8
                }
                ,
                {
                    name: "Derecho Administrativo I",
                    key: "DER-17601",
                    pre: ["DER-15505"],
                    semester: 8
                }
                ,
                {
                    name: "Derecho Constitucional III",
                    key: "DER-15506",
                    pre: ["DER-15505"],
                    semester: 8
                }
                ,
                {
                    name: "Seminario de Derecho Constitucional III",
                    key: "DER-15506",
                    semester: 8
                }
                ,
                {
                    name: "Teoría Gral. del Proceso",
                    key: "DER-13406",
                    pre: ["DER-15505"],
                    semester: 8
                }
                ,
                {
                    name: "Análisis Económico del Derecho II",
                    key: "ECO-14208",
                    pre: ["ECO-21104"],
                    semester: 9
                }
                ,
                {
                    name: "Microeconometría Aplicada",
                    key: "ECO-10516",
                    pre: ["EST-11104, ECO-21104", "ECO-22105"],
                    semester: 9
                }
                ,
                {
                    name: "Historia Económica de México",
                    key: "ECO-17100",
                    pre: ["ECO-22105", "EGN-17162"],
                    semester: 9
                }
                ,
                {
                    name: "Derecho Proc. Penal",
                    key: "DER-14603",
                    pre: ["DER-14505, DER-13406"],
                    semester: 9
                }
                ,
                {
                    name: "Derecho Administrativo II",
                    key: "DER-17702",
                    pre: ["DER-17601"],
                    semester: 9
                }
                ,
                {
                    name: "Proced. Civ. y Mercantil.",
                    key: "DER-13607",
                    pre: ["DER-13406"],
                    semester: 9
                }
                ,
                {
                    name: "Economía Internacional II",
                    key: "ECO-13102",
                    pre: ["ECO-12201", "ECO-13101"],
                    semester: 10
                }
                ,
                {
                    name: "Desarrollo Económico",
                    key: "ECO-18101",
                    pre: ["ECO-21104", "ECO-15101"],
                    semester: 10
                }
                ,
                {
                    name: "Procedimientos Constitucionales",
                    key: "DER-15704",
                    pre: ["DER-15506, DER-13607, DER-14603"],
                    semester: 10
                }
                ,
                {
                    name: "Derecho Mercantil II",
                    key: "DER-16602",
                    pre: ["DER-16501"],
                    semester: 10
                }
                ,
                {
                    name: "Economía de la Regulación",
                    key: "ECO-14303",
                    pre: ["ECO-14301"],
                    semester: 10
                }
                ,
                {
                    name: "Macroeconomía Avanzada",
                    key: "ECO-12121",
                    pre: ["ECO-11121, ECO-13102", "ECO-18300"],
                    semester: 11
                }
                ,
                {
                    name: "Economía Política",
                    key: "ECO-15111",
                    pre: ["ECO-21104"],
                    semester: 11
                }
                ,
                {
                    name: "Técnicas de Argumentación Jurídica",
                    key: "DER-11907",
                    pre: ["ECO-14208", "DER-13607"],
                    semester: 11
                }
                ,
                {
                    name: "Derecho Fiscal I",
                    key: "DER-17703",
                    pre: ["CON-10100", "DER-17601"],
                    semester: 11
                }
                ,
                {
                    name: "Derecho Internacional Público",
                    key: "DER-18701",
                    pre: ["DER-13403"],
                    semester: 11
                }
                ,
                {
                    name: "Filosofía del Derecho",
                    key: "DER-11805",
                    pre: ["DER-13607"],
                    semester: 11
                }
                ,
                {
                    name: "Der. Mercantil III",
                    key: "DER-16702",
                    pre: ["DER-16602"],
                    semester: 11
                }
                ,
                {
                    name: "Derecho Internacional Privado",
                    key: "DER-18802",
                    pre: ["DER-13607"],
                    semester: 12
                }
                ,
                {
                    name: "Derecho Fiscal II",
                    key: "DER-17804",
                    pre: ["DER-17703"],
                    semester: 12
                }
                ,
                {
                    name: "Seminario de Inv. Económica",
                    key: "ECO-10204",
                    pre: ["ECO-22105", "ECO-21104"],
                    semester: 12
                }
            ]
        }

    ]
};