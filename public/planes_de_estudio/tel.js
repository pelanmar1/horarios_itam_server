/**
 * Created by Pedro Lanzagorta M on 12/29/2016.
 */

var rpl = {
    name: "Ingeniería en Telecomunicaciones",
    planes: [
        {name:"tel_F",
            classes: [
                {name:"Introducción a la Ingeniería",
                    key:"SDI-14105",
                    semester:1}
                ,
                {name:"Algoritmos y Programas",
                    key:"COM-11101",
                    semester:1}
                ,
                {name:"Introd. a la Matemática Superior",
                    key:"MAT-14001",
                    semester:1}
                ,
                {name:"Ideas e Instit. Polts y Soc. I",
                    key:"EGN-17121",
                    semester:1}
                ,
                {name:"Estrategias de Comunicación Escrita",
                    key:"LEN-10131",
                    semester:1}
                ,
                {name:"Geometría Analítica",
                    key:"MAT-14200",
                    semester:1}
                ,
                {name:"Probl. de la Civilización Contemp. I",
                    key:"EGN-17141",
                    semester:2}
                ,
                {name:"Fundamentos de Química",
                    key:"IIO-15130",
                    semester:2}
                ,
                {name:"Estructuras de Datos",
                    key:"COM-11102",
                    pre:["COM-11101"],
                    semester:2}
                ,
                {name:"Ideas e Inst. Polts. y Sociales II",
                    key:"EGN-17122",
                    pre:["EGN-17121"],
                    semester:2}
                ,
                {name:"Álgebra Lineal I",
                    key:"MAT-14201",
                    pre:["MAT-14200"],
                    semester:2}
                ,
                {name:"Cálculo Diferencial e Integral I",
                    key:"MAT-14100",
                    pre:["MAT-14001"],
                    semester:2}
                ,
                {name:"Probl. de la Civilización Contemp. II",
                    key:"EGN-17142",
                    pre:["EGN-17141"],
                    semester:3}
                ,
                {name:"Elementos de Física",
                    key:"SDI-11120",
                    pre:["MAT-14100"],
                    semester:3}
                ,
                {name:"Desarrollo de Aplicaciones Informáticas",
                    key:"COM-16203",
                    pre:["COM-11102"],
                    semester:3}
                ,
                {name:"Ideas e Inst. Polts. y Sociales III",
                    key:"EGN-17123",
                    pre:["EGN-17122", "EGN-17141", "LEN-10131"],
                    semester:3}
                ,
                {name:"Contabilidad I",
                    key:"CON-10100",
                    semester:3}
                ,
                {name:"Cálculo Diferencial e Integral II",
                    key:"MAT-14101",
                    pre:["MAT-14100"],
                    semester:3}
                ,
                {name:"Estructuras de Datos Avanzadas",
                    key:"COM-11103",
                    pre:["COM-11102"],
                    semester:3}
                ,
                {name:"Elementos de Electrónica",
                    key:"SDI-11221",
                    pre:["SDI-11120"],
                    semester:4}
                ,
                {name:"Historia Socio-Política de México",
                    key:"EGN-17161",
                    pre:["EGN-17123"],
                    semester:4}
                ,
                {name:"Cálculo Diferencial e Integral III",
                    key:"MAT-14102",
                    pre:["MAT-14101", "MAT-14201"],
                    semester:4}
                ,
                {name:"Probabilidad",
                    key:"EST-11101",
                    pre:["MAT-14101"],
                    semester:4}
                ,
                {name:"Bases de Datos",
                    key:"COM-12101",
                    pre:["SDI-14105, COM-16203", "COM- 11103"],
                    semester:4}
                ,
                {name:"Economía I",
                    key:"ECO-11101",
                    semester:4}
                ,
                {name:"Circuitos Lógicos",
                    key:"SDI-11322",
                    pre:["SDI-11120"],
                    semester:5}
                ,
                {name:"Problemas de la Realidad Mexicana Con",
                    key:"EGN-17162",
                    pre:["EGN-17142, EGN-17161"],
                    semester:5}
                ,
                {name:"Sistemas Dinámicos",
                    key:"MAT-12210",
                    pre:["MAT-14102"],
                    semester:5}
                ,
                {name:"Inferencia Estadística",
                    key:"EST-11102",
                    pre:["MAT-14102, EST 11101"],
                    semester:5}
                ,
                {name:"Señales y Sistemas",
                    key:"SDI-12515",
                    pre:["MAT-14101"],
                    semester:5}
                ,
                {name:"Economía II",
                    key:"ECO-12102",
                    pre:["ECO-11101"],
                    semester:5}
                ,
                {name:"Principios de Mecatrónica",
                    key:"SDI-11561",
                    pre:["SDI-11322, COM-11102"],
                    semester:6}
                ,
                {name:"Algoritmos Numéricos por Computadora",
                    key:"COM-14105",
                    pre:["COM-16203, MAT-14102"],
                    semester:6}
                ,
                {name:"Procesamiento Digital de Señales",
                    key:"SDI-12625",
                    pre:["SDI-12515"],
                    semester:6}
                ,
                {name:"Señales Aleatorias y Ruido",
                    key:"SDI-15602",
                    pre:["EST-11101, SDI-12515", "MAT-14102"],
                    semester:6}
                ,
                {name:"Teoría Electromagnética",
                    key:"SDI-12629",
                    pre:["MAT-14102, MAT-12210"],
                    semester:6}
                ,
                {name:"Redes de Computadoras",
                    key:"SDI-13760",
                    pre:["MAT-14102"],
                    semester:7}
                ,
                {name:"Antenas y Radiación",
                    key:"SDI-12761",
                    pre:["SDI-12629"],
                    semester:7}
                ,
                {name:"Redes Convergentes",
                    key:"SDI-13789",
                    semester:7}
                ,
                {name:"Comunicaciones Digitales",
                    key:"SDI-12726",
                    pre:["SDI-12515, SDI-15602"],
                    semester:7}
                ,
                {name:"Diseño y Arquitectura de Redes",
                    key:"SDI-13782",
                    pre:["SDI-13760"],
                    semester:8}
                ,
                {name:"Servicios de Telecomunicaciones",
                    key:"SDI-14804",
                    pre:["SDI-13739,SDI-12629"],
                    semester:8}
                ,
                {name:"Seminario de Titulación",
                    key:"SDI-15816",
                    semester:8}
                ,
                {name:"Nuevas Tecnologías Inalámbricas",
                    key:"SDI-12872",
                    semester:8}
                ,
                {name:"Comunicaciones Móviles",
                    key:"SDI-12882",
                    semester:8}]

        }]
};