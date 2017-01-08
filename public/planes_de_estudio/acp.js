/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var acp = {
    name: "Administración y Contaduría Pública",
    planes: [
        {
            name: "acp_C",
            classes: [
                {
                    name: "Proceso Contable",
                    key: "CON-10001",
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
                    name: "Introd. a las Matemáticas",
                    key: "MAT-11001",
                    semester: 1
                }
                ,
                {
                    name: "Herr. Comput. y Algoritmos",
                    key: "COM-16301",
                    semester: 1
                }
                ,
                {
                    name: "Ideas e Instituciones Polit. y Soc. I",
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
                    name: "Contabilidad Intermedia I",
                    key: "CON-10002",
                    pre: ["CON-10001"],
                    semester: 2
                }
                ,
                {
                    name: "Estrategia de Negocios II",
                    key: "ADM-12108",
                    pre: ["ADM-12107"],
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
                    name: "Introducción al Derecho Corporat.",
                    key: "DER-10016",
                    semester: 2
                }
                ,
                {
                    name: "Ideas e Instituciones Polit. y Soc. II",
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
                    name: "Contabilidad Intermedia II",
                    key: "CON-10003",
                    pre: ["CON-10002", "MAT-11100"],
                    semester: 3
                }
                ,
                {
                    name: "Administración Internacional",
                    key: "ADM-11013",
                    pre: ["ADM-12108"],
                    semester: 3
                }
                ,
                {
                    name: "Economía I",
                    key: "ECO-11101",
                    semester: 3
                }
                ,
                {
                    name: "Derecho Corporativo",
                    key: "DER-10026",
                    pre: ["DER-10016"],
                    semester: 3
                }
                ,
                {
                    name: "Ideas e Inst.  Polts. y  Sociales III",
                    key: "EGN-17123",
                    pre: ["EGN-17122", "EGN-17141"],
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
                    name: "Combinación de Negocios",
                    key: "CON-10004",
                    pre: ["CON-10003", "DER-10026"],
                    semester: 4
                }
                ,
                {
                    name: "Comportamiento Humano I",
                    key: "ADM-14401",
                    pre: ["ADM-12108"],
                    semester: 4
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
                    name: "Computación II",
                    key: "COM-16402",
                    pre: ["COM-16301"],
                    semester: 4
                }
                ,
                {
                    name: "Estadística I",
                    key: "EST-10101",
                    pre: ["COM-16301", "MAT-11100"],
                    semester: 4
                }
                ,
                {
                    name: "Matemáticas III",
                    key: "MAT-11310",
                    pre: ["MAT-11100"],
                    semester: 4
                }
                ,
                {
                    name: "Contabilidad Internacional",
                    key: "CON-10106",
                    pre: ["CON-10004"],
                    semester: 5
                }
                ,
                {
                    name: "Comportamiento Humano II",
                    key: "ADM-14402",
                    pre: ["ADM-14401"],
                    semester: 5
                }
                ,
                {
                    name: "Economía III",
                    key: "ECO-11103",
                    pre: ["MAT-11100", "ECO-12102"],
                    semester: 5
                }
                ,
                {
                    name: "Régimen Fiscal Mexicano  p/C.P.",
                    key: "DER-10011",
                    pre: ["DER-10026"],
                    semester: 5
                }
                ,
                {
                    name: "Estadística II",
                    key: "EST-10102",
                    pre: ["EST-10101"],
                    semester: 5
                }
                ,
                {
                    name: "Hist. Socio-Política de México",
                    key: "EGN-17161",
                    pre: ["EGN-17123"],
                    semester: 5
                }
                ,
                {
                    name: "Mercadotecnia  I",
                    key: "ADM-16601",
                    pre: ["EST-10101"],
                    semester: 6
                }
                ,
                {
                    name: "Pronósticos de  Negocios",
                    key: "ADM-11101",
                    pre: ["EST-10102", "MAT-11310"],
                    semester: 6
                }
                ,
                {
                    name: "Dir. de Tecnologías de Información",
                    key: "COM-16101",
                    pre: ["CON-10004", "COM-16402"],
                    semester: 6
                }
                ,
                {
                    name: "Finanzas I",
                    key: "ADM-15501",
                    pre: ["EST-10102", "ECO-11103"],
                    semester: 6
                }
                ,
                {
                    name: "Economía IV",
                    key: "ECO-11104",
                    pre: ["ECO-11103"],
                    semester: 6
                }
                ,
                {
                    name: "Desar. de Habilidades Gerencs.",
                    key: "ADM-14413",
                    pre: ["ADM-14401"],
                    semester: 6
                }
                ,
                {
                    name: "Mercadotecnia II",
                    key: "ADM-16602",
                    pre: ["ADM-16601", "ADM-11101"],
                    semester: 7
                }
                ,
                {
                    name: "Contabilidad de Costos",
                    key: "CON-12001",
                    pre: ["CON-10003"],
                    semester: 7
                }
                ,
                {
                    name: "Impuestos  Corporativos I",
                    key: "CON-15001",
                    pre: ["DER-10011"],
                    semester: 7
                }
                ,
                {
                    name: "Finanzas II",
                    key: "ADM-15502",
                    pre: ["ADM-15501", "ADM-11101"],
                    semester: 7
                }
                ,
                {
                    name: "Probls.de la Real. Mex. Contemp.",
                    key: "EGN-17162",
                    pre: ["EGN-17142", "EGN-17161"],
                    semester: 7
                }
                ,
                {
                    name: "Régimen  Laboral Mexicano",
                    key: "DER-10008",
                    pre: ["DER-10026"],
                    semester: 7
                }
                ,
                {
                    name: "Mercadotecnia III",
                    key: "ADM-16603",
                    pre: ["ADM-16602"],
                    semester: 8
                }
                ,
                {
                    name: "Costos para la Toma de Decisiones",
                    key: "CON-12002",
                    pre: ["CON-12001", "ADM-11101"],
                    semester: 8
                }
                ,
                {
                    name: "Impuestos Corporativos II",
                    key: "CON-15002",
                    pre: ["CON-15001"],
                    semester: 8
                }
                ,
                {
                    name: "Finanzas III",
                    key: "ADM-15503",
                    pre: ["ADM-15502"],
                    semester: 8
                }
                ,
                {
                    name: "Desarrollo Empresarial",
                    key: "ADM-13101",
                    pre: ["ADM-14401, ADM-11013,ADM-16601", "ADM-15501"],
                    semester: 8
                }
                ,
                {
                    name: "Auditoría de Estados Financieros",
                    key: "CON-11001",
                    pre: ["CON-10106,  COM-16101", "EST-10102"],
                    semester: 8
                }
                ,
                {
                    name: "Administ. Estratégica de Costos",
                    key: "CON-12003",
                    pre: ["CON-12002"],
                    semester: 9
                }
                ,
                {
                    name: "Impuestos para Personas Físicas",
                    key: "CON-15003",
                    pre: ["CON-15001"],
                    semester: 9
                }
                ,
                {
                    name: "Economía de la Empresa",
                    key: "ECO-14501",
                    pre: ["ECO-11104,  ADM-12108", "ADM-11101"],
                    semester: 9
                }
                ,
                {
                    name: "Administración de Operaciones I",
                    key: "IIO-14260",
                    pre: ["MAT-11310, EST-10102", "COM-16402"],
                    semester: 9
                }
                ,
                {
                    name: "Análisis  Financ.  de la  Empresa",
                    key: "CON-10005",
                    pre: ["CON-11001"],
                    semester: 9
                }
                ,
                {
                    name: "Administración de Operaciones II",
                    key: "IIO-14270",
                    pre: ["IIO-14260", "ADM-11101"],
                    semester: 10
                }
                ,
                {
                    name: "Seminario de Investig. Admva. I",
                    key: "ADM-11007",
                    pre: ["ADM-15502, ADM-16602,ADM-13101"],
                    semester: 10
                }
            ]
        }
    ]
};