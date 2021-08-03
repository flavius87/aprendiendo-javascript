/* Practica
6am-11am - Buenos Dias
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas Noches
0am-6am - Durmiendo
*/

let hora = 14;
let saludo;

if(hora >= 6 && hora <= 11){
    saludo = "Buenos dias";
}
else if(hora >= 12 && hora <= 18){
    saludo = "Buenas tardes";
}
else if(hora >= 19 && hora <= 24){
    saludo = "Buenas noches";
}
else if(hora >= 0 && hora <= 6){
    saludo = "Durmiendo";
}
else{
    saludo = "No es una hora válida";
}
console.log(saludo);