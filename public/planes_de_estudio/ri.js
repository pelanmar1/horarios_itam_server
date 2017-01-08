/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */


var ri = {
    name: "Relaciones Internacionales",
    planes: [
        {name:"ri_E",
            classes: [
                {name:"Economía I",
                    key:"ECO-11101",
                    semester:1}
                ,
                {name:"Ideas e Instituc.Polític.y Soc. I",
                    key:"EGN-17121",
                    semester:1}
                ,
                {name:"Probs.de la Civ. Contemp. I",
                    key:"EGN-17141",
                    semester:1}
                ,
                {name:"Introducción a las Matemáticas",
                    key:"MAT-11001",
                    semester:1}
                ,
                {name:"Introd.a las Rel. Internacionales",
                    key:"EIN-11101",
                    semester:1}
                ,
                {name:"Estrategias de Comunicación Escrita",
                    key:"LEN-10131",
                    semester:1}
                ,
                {name:"Historia de las Rel. Intern. I",
                    key:"EIN-12201",
                    semester:2}
                ,
                {name:"Economía II",
                    key:"ECO-12102",
                    pre:["ECO-11101"],
                    semester:2}
                ,
                {name:"Ideas e Instituc.Polític.y Soc. II",
                    key:"EGN-17122",
                    pre:["EGN-17121"],
                    semester:2}
                ,
                {name:"Probs.de la Civ. Contemp. II",
                    key:"EGN-17142",
                    pre:["EGN-17141"],
                    semester:2}
                ,
                {name:"Matemáticas I",
                    key:"MAT-11100",
                    pre:["MAT-11001"],
                    semester:2}
                ,
                {name:"Computación I",
                    key:"COM-16401",
                    semester:2}
                ,
                {name:"Contabilidad I",
                    key:"CON-10100",
                    semester:2}
                ,
                {name:"Historia de las Rel. Intern. II",
                    key:"EIN-13202",
                    pre:["EIN-12201"],
                    semester:3}
                ,
                {name:"Administración Internacional",
                    key:"ADM-11013",
                    pre:["CON-10100"],
                    semester:3}
                ,
                {name:"Economía III",
                    key:"ECO-11103",
                    pre:["ECO-12102", "MAT-11100"],
                    semester:3}
                ,
                {name:"Matemáticas II",
                    key:"MAT-11101",
                    pre:["MAT-11100"],
                    semester:3}
                ,
                {name:"Métodos de Investigación en Rel. Intern,",
                    key:"EIN-13104",
                    pre:["EIN-11101"],
                    semester:3}
                ,
                {name:"Ideas e Instituc.Polític.y Soc.III",
                    key:"EGN-17123",
                    pre:["EGN-17122, EGN-17141", "LEN-10131"],
                    semester:3}
                ,
                {name:"Economía IV",
                    key:"ECO-11104",
                    pre:["MAT-11101", "ECO-11103"],
                    semester:4}
                ,
                {name:"Historia de E.U.A.",
                    key:"EIN-14302",
                    semester:4}
                ,
                {name:"Teoría de Rel. Internacionales",
                    key:"EIN-14102",
                    pre:["EIN-13104"],
                    semester:4}
                ,
                {name:"Historia Sociopolítica de México",
                    key:"EGN-17161",
                    pre:["EGN-17123"],
                    semester:4}
                ,
                {name:"Fundamentos Jurídicos",
                    key:"DER-10013",
                    semester:4}
                ,
                {name:"Estadística I",
                    key:"EST-10101",
                    pre:["MAT-11100", "COM-16401"],
                    semester:4}
                ,
                {name:"Proceso Político en E.U.A.: Dimensión Internacional",
                    key:"EIN-15302",
                    pre:["EIN-14302"],
                    semester:5}
                ,
                {name:"Macroeconomía Intermedia",
                    key:"ECO-12133",
                    pre:["ECO-11103"],
                    semester:5}
                ,
                {name:"Elección Pública I",
                    key:"CSO-15021",
                    pre:["EGN-17123"],
                    semester:5}
                ,
                {name:"Probs.de la Real. Mex. Contemp.",
                    key:"EGN-17162",
                    pre:["EGN-17142", "EGN-17161"],
                    semester:5}
                ,
                {name:"Estadística II",
                    key:"EST-10102",
                    pre:["EST-10101"],
                    semester:5}
                ,
                {name:"Política de Rel. Eco. Internacionales",
                    key:"EIN-15105",
                    pre:["EIN-14102"],
                    semester:5}
                ,
                {name:"América Latina",
                    key:"EIN-16403",
                    pre:["EIN-15105"],
                    semester:6}
                ,
                {name:"Derecho Internacional Público I",
                    key:"DER-10005",
                    pre:["DER-10013"],
                    semester:6}
                ,
                {name:"Europa Contemporánea",
                    key:"EIN-16402",
                    semester:6}
                ,
                {name:"Métodos Estad. p/CP. y R.I.",
                    key:"EST-13101",
                    pre:["EST-10102"],
                    semester:6}
                ,
                {name:"Política Mexicana Contemp.",
                    key:"CSO-13041",
                    pre:["EGN-17162"],
                    semester:6}
                ,
                {name:"Economía Internacional I",
                    key:"ECO-13101",
                    pre:["ECO-11103"],
                    semester:6}
                ,
                {name:"Relaciones México-EUA-Canadá",
                    key:"EIN-17303",
                    pre:["EIN-15302"],
                    semester:7}
                ,
                {name:"Derecho Internacional Público II",
                    key:"DER-10006",
                    pre:["DER-10005"],
                    semester:7}
                ,
                {name:"Japón, China y el Sudeste Asiático",
                    key:"EIN-17403",
                    pre:["EIN-15105"],
                    semester:7}
                ,
                {name:"Medio Oriente",
                    key:"EIN-19414",
                    semester:7}
                ,
                {name:"Política Comparada I",
                    key:"CSO-14021",
                    pre:["CSO-13041"],
                    semester:7}
                ,
                {name:"Formul. de la Polít. Ext.de México",
                    key:"EIN-17304",
                    pre:["CSO-13041"],
                    semester:7}
                ,
                {name:"Seminario de Titulación",
                    key:"EIN-18602",
                    pre:["EST-13101", "DER-10006"],
                    semester:8}
            ]
        }]
};