/*
Ejemplos de tipos de datos
con javascript
*/

//Tipo de dato string
var nombre = "Carlos";

console.log(nombre);

nombre = 10;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: "29",
    telefono: "555433222"
}
console.log(objeto);

//Tipo de dato boolean (true, false)
var bandera = true;
console.log(bandera);

//Tipo de dato function 
function mifuncion(){}
console.log(mifuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi símbolo");
console.log(simbolo);

//Tipo de clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);

//Tipo undefined
var x;
console.log(x);

//null = ausencia de valor
var y = null;
console.log(y);

//Los array en javascript son tipo de datos object
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//cadena vacía - su tipo de dato es un string
var z = '';
console.log(z);
console.log(typeof z);

//concatenar cadenas
var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Fernandez';
console.log(nombreCompleto2);

var x = nombre + 2 + 19;
console.log(x);

x = nombre + (2 + 19);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);

//Al día de hoy para asignar una variable se considera 
//buena práctica comenzar con let. También es una buena práctica
//que al momento de declarar una variable compuesta, la segunda
//palabra se inicie con mayúscula. Ejemplo:

let segundoNombre = "Roberto";
console.log(segundoNombre);
