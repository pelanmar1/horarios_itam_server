/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var ema = {
    name: "Economía y Ciencia Política",
    planes: [
        {
            name: "epl_F",
            classes: [
                {
                    name: "Introducción a la Ciencia Política",
                    key: "CSO-10001",
                    semester: 1
                }
                ,
                {
                    name: "Introducción a la Matemática Superior",
                    key: "MAT-14001",
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
                    name: "Ideas e Instit. Polític. y Soc. I",
                    key: "EGN-17121",
                    semester: 1
                }
                ,
                {
                    name: "Probs. de la Civ. Contemporánea I",
                    key: "EGN-17141",
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
                    name: "Elección Pública I",
                    key: "CSO-15021",
                    pre: ["CSO-10001"],
                    semester: 2
                }
                ,
                {
                    name: "Seminario de Análisis Político",
                    key: "CSO-10003",
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
                    name: "Ideas e Instit. Polític. y Soc. II",
                    key: "EGN-17122",
                    pre: ["EGN-17121"],
                    semester: 2
                }
                ,
                {
                    name: "Probs. de la Civ. Contemporánea II",
                    key: "EGN-17142",
                    pre: ["EGN-17141"],
                    semester: 2
                }
                ,
                {
                    name: "Política Comparada I",
                    key: "CSO-14021",
                    pre: ["CSO-10001"],
                    semester: 3
                }
                ,
                {
                    name: "Teoría Política Clásica I",
                    key: "CSO-11011",
                    semester: 3
                }
                ,
                {
                    name: "Economía III",
                    key: "ECO-21103",
                    pre: ["ECO-12102, MAT-12100"],
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
                    name: "Algebra Matricial",
                    key: "MAT-12310",
                    pre: ["MAT-12100"],
                    semester: 3
                }
                ,
                {
                    name: "Herramientas Com. y Algorit.",
                    key: "COM-16301",
                    semester: 3
                }
                ,
                {
                    name: "Ideas e Instit. Polític. y Soc. III",
                    key: "EGN-17123",
                    pre: ["EGN-17122, EGN-17141", "LEN-10131"],
                    semester: 3
                }
                ,
                {
                    name: "Teoría Política Clásica II",
                    key: "CSO-11012",
                    pre: ["CSO-11011"],
                    semester: 4
                }
                ,
                {
                    name: "Elección Pública II",
                    key: "CSO-15022",
                    pre: ["CSO-15021"],
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
                    name: "Historia Socio Política de México",
                    key: "EGN-17161",
                    pre: ["EGN-17123"],
                    semester: 4
                }
                ,
                {
                    name: "Derecho Público",
                    key: "DER-10113",
                    semester: 5
                }
                ,
                {
                    name: "Política Comparada II",
                    key: "CSO-14041",
                    pre: ["CSO-14021"],
                    semester: 5
                }
                ,
                {
                    name: "Elección Pública III",
                    key: "CSO-15024",
                    pre: ["CSO-15022"],
                    semester: 5
                }
                ,
                {
                    name: "Seminario de la Economía de México",
                    key: "ECO-17103",
                    pre: ["ECO-21104, ECO-22105"],
                    semester: 5
                }
                ,
                {
                    name: "Economía Política I",
                    key: "CSO-15041",
                    pre: ["ECO-21103"],
                    semester: 5
                }
                ,
                {
                    name: "Probabilidad",
                    key: "EST-11101",
                    pre: ["MAT-12101"],
                    semester: 6
                }
                ,
                {
                    name: "Teoría Política Contemporánea",
                    key: "CSO-11021",
                    pre: ["CSO-11012"],
                    semester: 6
                }
                ,
                {
                    name: "Política Comparada III",
                    key: "CSO-14042",
                    pre: ["CSO-14041"],
                    semester: 6
                }
                ,
                {
                    name: "Historia de México I",
                    key: "CSO-12041",
                    semester: 6
                }
                ,
                {
                    name: "Historia del Análisis Económico",
                    key: "ECO-10301",
                    pre: ["ECO-12102, EGN-17123"],
                    semester: 6
                }
                ,
                {
                    name: "Inferencia Estadística",
                    key: "EST-11102",
                    pre: ["EST-11101, MAT-12102"],
                    semester: 7
                }
                ,
                {
                    name: "Historia de México II",
                    key: "CSO-12042",
                    pre: ["CSO-12041"],
                    semester: 7
                }
                ,
                {
                    name: "Economía Internacional I",
                    key: "ECO-13101",
                    pre: ["ECO-21104", "ECO-22105"],
                    semester: 7
                }
                ,
                {
                    name: "Política y Gobierno de México",
                    key: "CSO-14045",
                    pre: ["CSO-14041"],
                    semester: 7
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
                    name: "Probs. de la Realidad Mex. Contemporánea",
                    key: "EGN-17162",
                    pre: ["EGN-17142, EGN-17161,CSO-12042"],
                    semester: 8
                }
                ,
                {
                    name: "Métodos de Investigación Aplicada",
                    key: "CSO-17041",
                    pre: ["EST-11102"],
                    semester: 9
                }
                ,
                {
                    name: "Teoría y Política Monetaria",
                    key: "ECO-12201",
                    pre: ["ECO-22105"],
                    semester: 9
                }
                ,
                {
                    name: "Historia Económica de México",
                    key: "ECO-17100",
                    pre: ["ECO-22105, EGN-17162"],
                    semester: 9
                }
                ,
                {
                    name: "Opinión Pública",
                    key: "CSO-14051",
                    pre: ["CSO-17041"],
                    semester: 10
                }
                ,
                {
                    name: "Economía Politica II",
                    key: "CSO-15043",
                    pre: ["ECO-21103"],
                    semester: 10
                }
                ,
                {
                    name: "Organización Industrial",
                    key: "ECO-14301",
                    pre: ["ECO-21104", "ECO-22105"],
                    semester: 10
                }
                ,
                {
                    name: "Economía Internacional II",
                    key: "ECO-13102",
                    pre: ["ECO-13101, ECO-12201"],
                    semester: 11
                }
                ,
                {
                    name: "Desarrollo Económico",
                    key: "ECO-18101",
                    pre: ["ECO-21104, ECO-15101"],
                    semester: 11
                }
                ,
                {
                    name: "Evaluación de Proyectos",
                    key: "ECO-15110",
                    pre: ["ECO-21104", "ECO-22105"],
                    semester: 11
                }
                ,
                {
                    name: "Seminario de Titulación I",
                    key: "CSO-19075",
                    pre: ["CSO-17041"],
                    semester: 11
                }
                ,
                {
                    name: "Seminario de Investigación Económica I",
                    key: "ECO-10204",
                    pre: ["ECO-22105, ECO-21104"],
                    semester: 11
                }
            ]
        }]
};