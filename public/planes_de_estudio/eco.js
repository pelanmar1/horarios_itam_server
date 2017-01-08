/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var eco = {
    name: "Economía",
    planes: [
        {
            name: "eco_F",
            classes: [
                {
                    name: "Ideas e Inst. Políticas y Sociales I",
                    key: "EGN-17121",
                    semester: 1
                }
                ,
                {
                    name: "Probl. de la Civ. Contemporánea I",
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
                    name: "Estrategias de Comunicac. Escrita",
                    key: "LEN-10131",
                    semester: 1
                }
                ,
                {
                    name: "Ideas e Instit. Políticas y Sociales II",
                    key: "EGN-17122",
                    pre: ["EGN-17121"],
                    semester: 2
                }
                ,
                {
                    name: "Probl. de la Civ. Contemporánea II",
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
                    name: "Cálculo I",
                    key: "MAT-12100",
                    pre: ["MAT-14001"],
                    semester: 2
                }
                ,
                {
                    name: "Herramientas Comput. y Algoritmos",
                    key: "COM-16301",
                    semester: 3
                }
                ,
                {
                    name: "Álgebra Matricial",
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
                    name: "Derecho Público",
                    key: "DER-10113",
                    pre: ["ECO-12102", "MAT-12100"],
                    semester: 3
                }
                ,
                {
                    name: "Ideas e Instit. Polít. y Sociales III (A)",
                    key: "EGN-17123",
                    pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                    semester: 3
                }
                ,
                {
                    name: "Historia Socio-política de México",
                    key: "EGN-17161",
                    pre: ["EGN-17123"],
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
                    name: "Cálculo III",
                    key: "MAT-12102",
                    pre: ["MAT-12101"],
                    semester: 4
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
                    name: "Probl. de la Real. Mex. Contemp.",
                    key: "EGN-17162",
                    pre: ["EGN-17161", "EGN-17142"],
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
                    name: "Seminario de la Econ. de México",
                    key: "ECO-17103",
                    pre: ["ECO-21104, ECO-22105"],
                    semester: 5
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
                    name: "Organización Industrial",
                    key: "ECO-14301",
                    pre: ["ECO-21104", "ECO-22105"],
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
                    name: "Historia Económica de México",
                    key: "ECO-17100",
                    pre: ["ECO-22105", "EGN-17162"],
                    semester: 8
                }
                ,
                {
                    name: "Finanzas Públicas",
                    key: "ECO-15101",
                    pre: ["ECO-21104", "ECO-22105"],
                    semester: 8
                }
                ,
                {
                    name: "Desarrollo Económico",
                    key: "ECO-18101",
                    pre: ["ECO-21104, ECO-15101"],
                    semester: 9
                }
                ,
                {
                    name: "Seminario de Investig. Econ. I",
                    key: "ECO-10204",
                    pre: ["ECO-22105", "ECO-21104"],
                    semester: 9
                }
                ,
                {
                    name: "Economía Internacional II",
                    key: "ECO-13102",
                    pre: ["ECO-13101", "ECO-12201"],
                    semester: 9
                }
            ]
        }]
};