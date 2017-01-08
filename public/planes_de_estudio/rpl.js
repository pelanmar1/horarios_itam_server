/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var rpl = {
    name: "Relaciones Internacionales y Ciencia Política",
    planes: [
        {name:"rpl_C",
            classes: [
                {name:"Introducción a la Ciencia Política",
                    key:"CSO-10001",
                    semester:1}
                ,
                {name:"Introd. a las Rel. Internacionales",
                    key:"EIN-11101",
                    semester:1}
                ,
                {name:"Introducción a las Matemáticas",
                    key:"MAT-11001",
                    semester:1}
                ,
                {name:"Economía I",
                    key:"ECO-11101",
                    semester:1}
                ,
                {name:"Ideas e Instituc. Polític. y Soc. I",
                    key:"EGN-17121",
                    semester:1}
                ,
                {name:"Probs. de la Civ. Contemp. I",
                    key:"EGN-17141",
                    semester:1}
                ,
                {name:"Estrategias de Comunicación Escrita",
                    key:"LEN-10131",
                    semester:1}
                ,
                {name:"Teoría de Relaciones Internacionales",
                    key:"EIN-14102",
                    pre:["EIN-11101"],
                    semester:2}
                ,
                {name:"Historia Política Contemporánea",
                    key:"CSO-12013",
                    semester:2}
                ,
                {name:"Seminario de Análisis Político",
                    key:"CSO-10003",
                    semester:2}
                ,
                {name:"Economía II",
                    key:"ECO-12102",
                    pre:["ECO-11101"],
                    semester:2}
                ,
                {name:"Matemáticas I",
                    key:"MAT-11100",
                    pre:["MAT-11001"],
                    semester:2}
                ,
                {name:"Ideas e Instituc. Polític. y Soc. II",
                    key:"EGN-17122",
                    pre:["EGN-17121"],
                    semester:2}
                ,
                {name:"Probs. de la Civ. Contemp. II",
                    key:"EGN-17142",
                    pre:["EGN-17141"],
                    semester:2}
                ,
                {name:"Historia de las Rel. Intern. I",
                    key:"EIN-12201",
                    semester:3}
                ,
                {name:"Historia de México I",
                    key:"CSO-12041",
                    semester:3}
                ,
                {name:"Teoría Política Clásica I",
                    key:"CSO-11011",
                    semester:3}
                ,
                {name:"Economía III",
                    key:"ECO-11103",
                    pre:["ECO-12102, MAT-11100"],
                    semester:3}
                ,
                {name:"Matemáticas II",
                    key:"MAT-11101",
                    pre:["MAT-11100"],
                    semester:3}
                ,
                {name:"Ideas e Instituc. Polític. y Soc. III",
                    key:"y EGN-17123",
                    pre:["EGN-17122, EGN-17141, LEN-10131"],
                    semester:3}
                ,
                {name:"Historia de las Rel. Intern. II",
                    key:"EIN-13202",
                    pre:["EIN-12201"],
                    semester:4}
                ,
                {name:"Elección Pública I",
                    key:"CSO-15021",
                    pre:["CSO-10001, EGN-17123"],
                    semester:4}
                ,
                {name:"Historia de México II",
                    key:"CSO-12042",
                    pre:["CSO-12041"],
                    semester:4}
                ,
                {name:"Computación I",
                    key:"COM-16401",
                    semester:4}
                ,
                {name:"Economía IV",
                    key:"ECO-11104",
                    pre:["ECO-11103, MAT-11101"],
                    semester:4}
                ,
                {name:"Historia Socio-Política de México",
                    key:"EGN-17161",
                    pre:["EGN-17123"],
                    semester:4}
                ,
                {name:"Historia de Estados Unidos",
                    key:"EIN-14302",
                    semester:5}
                ,
                {name:"Elección Pública II",
                    key:"CSO-15022",
                    pre:["CSO-15021"],
                    semester:5}
                ,
                {name:"Teoría Política Clásica II",
                    key:"CSO-11012",
                    pre:["CSO-11011"],
                    semester:5}
                ,
                {name:"Macroeconomía Intermedia",
                    key:"ECO-12133",
                    pre:["ECO-11103", "MAT-11101"],
                    semester:5}
                ,
                {name:"Estadística I",
                    key:"EST-10101",
                    pre:["MAT-11100, COM-16401"],
                    semester:5}
                ,
                {name:"Probs. de la Real. Mex. Contemp.",
                    key:"EGN-17162",
                    pre:["EGN-17142, EGN-17161, CSO-12042"],
                    semester:5}
                ,
                {name:"Proceso Político de E.U.A.",
                    key:"EIN-15302",
                    pre:["EIN-14302"],
                    semester:6}
                ,
                {name:"Política de las Relaciones Eco. Intl.",
                    key:"EIN-15105",
                    pre:["EIN-14102"],
                    semester:6}
                ,
                {name:"Historia de México III",
                    key:"CSO-12049",
                    pre:["CSO-12042"],
                    semester:6}
                ,
                {name:"Política Mexicana Contemporánea*",
                    key:"CSO-13041",
                    pre:["EGN-17162"],
                    semester:6}
                ,
                {name:"Matemáticas III",
                    key:"MAT-11310",
                    pre:["MAT-11100"],
                    semester:6}
                ,
                {name:"Estadística II",
                    key:"EST-10102",
                    pre:["EST-10101"],
                    semester:6}
                ,
                {name:"Relaciones México-E.U.A.-Canada",
                    key:"EIN-17303",
                    pre:["EIN-15302"],
                    semester:7}
                ,
                {name:"Economía Internacional I",
                    key:"ECO-13101",
                    pre:["ECO-11103"],
                    semester:7}
                ,
                {name:"Política Comparada I",
                    key:"CSO-14021",
                    pre:["CSO-10001, CSO-13041"],
                    semester:7}
                ,
                {name:"Teoría Política Contemporánea",
                    key:"CSO-11021",
                    pre:["CSO-11012"],
                    semester:7}
                ,
                {name:"Elección Pública III",
                    key:"CSO-15024",
                    pre:["CSO-15022"],
                    semester:7}
                ,
                {name:"Métodos de Investigación Aplicada",
                    key:"CSO-17041",
                    pre:["EST-10102"],
                    semester:7}
                ,
                {name:"Europa Contemporánea",
                    key:"EIN-16402",
                    semester:8}
                ,
                {name:"Política Comparada II",
                    key:"CSO-14041",
                    pre:["CSO-14021"],
                    semester:8}
                ,
                {name:"Métodos Estadísticos para C. Pol y RI",
                    key:"EST-13101",
                    pre:["MAT-11310, EST-10102"],
                    semester:8}
                ,
                {name:"Instituciones del Derecho Púb. Mex. I",
                    key:"DER-10003",
                    semester:8}
                ,
                {name:"Contabilidad I",
                    key:"CON-10100",
                    semester:8}
                ,
                {name:"Economía Política I",
                    key:"CSO-15041",
                    pre:["ECO-11103"],
                    semester:8}
                ,
                {name:"América Latina",
                    key:"EIN-16403",
                    pre:["EIN-15105"],
                    semester:9}
                ,
                {name:"Medio Oriente",
                    key:"EIN-19414",
                    semester:9}
                ,
                {name:"Opinión Pública",
                    key:"CSO-14051",
                    pre:["CSO-17041"],
                    semester:9}
                ,
                {name:"Economía Política II",
                    key:"CSO-15043",
                    pre:["ECO-11103"],
                    semester:9}
                ,
                {name:"Derecho Internacional Público I",
                    key:"DER-10005",
                    pre:["DER-10003"],
                    semester:9}
                ,
                {name:"Política y Gobierno de México",
                    key:"CSO-14045",
                    pre:["CSO-14041"],
                    semester:9}
                ,
                {name:"Administración Internacional",
                    key:"ADM-11013",
                    semester:10}
                ,
                {name:"Japón, China y el Sudeste de Asia",
                    key:"EIN-17403",
                    semester:10}
                ,
                {name:"Derecho Internacional Público II",
                    key:"DER-10006",
                    pre:["DER-10005"],
                    semester:10}
                ,
                {name:"Metodología Política Avanzada",
                    key:"CSO-17042",
                    pre:["EST-13101"],
                    semester:10}
                ,
                {name:"Política Comparada III",
                    key:"CSO-14042",
                    pre:["CSO-14041"],
                    semester:10}
                ,
                {name:"Formulación de Política Exterior Mexicana",
                    key:"EIN-17304",
                    pre:["CSO-13041"],
                    semester:10}
                ,
                {name:"Seminario de Titulación I",
                    key:"CSO-19075",
                    pre:["CSO-17041"],
                    semester:11}
                ,
                {name:"Seminario de Titulación II",
                    key:"CSO-19076",
                    pre:["CSO-17041"],
                    semester:11}
            ]}
        ]
};
