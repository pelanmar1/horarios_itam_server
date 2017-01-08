/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var cpl = {
    name: "Ciencia Política",
    planes: [
        {
            name: "cpl_E",
            classes: [
                {
                    name: "Introducción a la Ciencia Política",
                    key: "CSO-10001",
                    semester: 1
                }
                ,
                {
                    name: "Introducción a las Matemáticas",
                    key: "MAT-11001",
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
                    name: "Ideas e Instit. Politic. y Soc. I",
                    key: "EGN-17121",
                    semester: 1
                }
                ,
                {
                    name: "Problemas de la Civ. Contemp. I",
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
                    name: "Seminario de Análisis Político****",
                    key: "CSO-10003",
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
                    name: "Matemáticas I",
                    key: "MAT-11100",
                    pre: ["MAT-11001"],
                    semester: 2
                }
                ,
                {
                    name: "Ideas e Instit. Politic. y Soc. II",
                    key: "EGN-17122",
                    pre: ["EGN-17121"],
                    semester: 2
                }
                ,
                {
                    name: "Problemas de la Civ. Contemp. II",
                    key: "EGN-17142",
                    pre: ["EGN-17141"],
                    semester: 2
                }
                ,
                {
                    name: "Computación I",
                    key: "COM-16401",
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
                    key: "ECO-11103",
                    pre: ["ECO-12102-MAT-11100"],
                    semester: 3
                }
                ,
                {
                    name: "Matemáticas II",
                    key: "MAT-11101",
                    pre: ["MAT-11100"],
                    semester: 3
                }
                ,
                {
                    name: "Estadística I",
                    key: "EST-10101",
                    pre: ["MAT-11100, COM-16401"],
                    semester: 3
                }
                ,
                {
                    name: "Historia Política Contemporánea",
                    key: "CSO-12013",
                    semester: 3
                }
                ,
                {
                    name: "Ideas e Instit. Polític. y Soc. III(A)",
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
                    name: "Política Comparada II",
                    key: "CSO-14041",
                    pre: ["CSO-14021"],
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
                    name: "Economía IV",
                    key: "ECO-11104",
                    pre: ["ECO-11103"],
                    semester: 4
                }
                ,
                {
                    name: "Estadística II",
                    key: "EST-10102",
                    pre: ["EST-10101"],
                    semester: 4
                }
                ,
                {
                    name: "Historia de México I",
                    key: "CSO-12041",
                    semester: 4
                }
                ,
                {
                    name: "Teoría Política Contemporánea",
                    key: "CSO-11021",
                    pre: ["CSO-11012"],
                    semester: 5
                }
                ,
                {
                    name: "Política Comparada III",
                    key: "CSO-14042",
                    pre: ["CSO-14041"],
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
                    name: "Matemáticas III",
                    key: "MAT-11310",
                    pre: ["MAT-11100"],
                    semester: 5
                }
                ,
                {
                    name: "Métodos de Investigación Aplicada",
                    key: "CSO-17041",
                    pre: ["EST-10102"],
                    semester: 5
                }
                ,
                {
                    name: "Historia de México II",
                    key: "CSO-12042",
                    pre: ["CSO-12041"],
                    semester: 5
                }
                ,
                {
                    name: "Políticas Públicas",
                    key: "CSO-16042",
                    pre: ["CSO-15021"],
                    semester: 6
                }
                ,
                {
                    name: "Política y Gobierno de México",
                    key: "CSO-14045",
                    pre: ["CSO-14041"],
                    semester: 6
                }
                ,
                {
                    name: "Historia de México III",
                    key: "CSO-12049",
                    pre: ["CSO-12042"],
                    semester: 6
                }
                ,
                {
                    name: "Opinión Pública",
                    key: "CSO-14051",
                    pre: ["CSO-17041"],
                    semester: 6
                }
                ,
                {
                    name: "Economía V",
                    key: "ECO-12105",
                    pre: ["MAT-11101, ECO-11103"],
                    semester: 6
                }
                ,
                {
                    name: "Mét. Estad. para C. Pol. y R.I.",
                    key: "EST-13101",
                    pre: ["MAT-11310, EST-10102"],
                    semester: 6
                }
                ,
                {
                    name: "Economía Política I",
                    key: "CSO-15041",
                    pre: ["ECO-11103"],
                    semester: 7
                }
                ,
                {
                    name: "Metodología Política Avanzada",
                    key: "CSO-17042",
                    pre: ["EST-13101"],
                    semester: 7
                }
                ,
                {
                    name: "Instit. de Derecho Público Mex. I",
                    key: "DER-10003",
                    semester: 7
                }
                ,
                {
                    name: "Probs. de la Real. Mex. Contemp.",
                    key: "EGN-17162",
                    pre: ["EGN-17142, CSO-12042"],
                    semester: 7
                }
                ,
                {
                    name: "Economía Política II",
                    key: "CSO-15043",
                    pre: ["ECO-11103"],
                    semester: 8
                }
                ,
                {
                    name: "Seminario de Titulación I",
                    key: "CSO-19075",
                    pre: ["CSO-17041"],
                    semester: 8
                }
                ,
                {
                    name: "Seminario de Titulación II",
                    key: "CSO-19076",
                    pre: ["CSO-17041"],
                    semester: 8
                }
            ]
        }]
};