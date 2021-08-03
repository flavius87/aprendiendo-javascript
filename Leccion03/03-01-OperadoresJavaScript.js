let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la multiplicación: " + z);

z = a / b;
console.log("Resultado de la división: " + z);

z = a % b; //residuo de la división
console.log("Resultado de la operación módulo (residuo): " + z);

z = a ** b;
console.log("Resultado de la operación exponente: " + z);

//Incremento
//Pre-incremento (el operador ++ antes de la variable)
//Post-incremente (el operador ++ después de la variable)
z = ++a;
console.log(a);
console.log(z);

z = b++;
console.log(b);
console.log(z);

//Decremento
//Pre-decremento
z = --a;
console.log(a);
console.log(z);

//Decremento
//Post-decremento
z = b--;
console.log(b);
console.log(z);

let c = 3, d = 2, e = 1;

let x = c * d + e;
console.log(x);

x = e + c * d;
console.log(x);

//Operadores de comparación
let f = 3, g = 2, h = "3";

let y = f == h; // se revisa el valor sin importar el tipo
console.log(y);

y = f === h; //revisa si los valores son iguales pero también los tipos
console.log(y);

y = f < g;
console.log(y);

y = f <= h;
console.log(y);

y = f >= g;
console.log(y);

//hacer operación para saber si un número es par
let n = 10;

if(n % 2 == 0){
    console.log("Es un número par");
}
else{
    console.log("Es un número impar");
}

let edad = 20, adulto = 18;

if( edad >= adulto ){
    console.log( "Es un adulto" )
}
else{
    console.log("Es menor de edad")
}

//Operador lógico AND(&&)
let m = 5;
let valMin = 0, valMax = 10;

if( m >= valMin && m <= valMax ){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango");
}

//Operador lógico OR(||)
let vacaciones = false, diaDescanso = false;
if( vacaciones || diaDescanso ){
    console.log("Padre puede asistir al juego del hijo");
}
else{
    console.log("El padre está ocupado");
}

//Operador ternario
let resultado = (3>2) ? "verdadero" : "falso";
console.log( resultado );

let numero = 9;
resultado = ( numero % 2 == 0 ) ? "Número par" : "Número impar";
console.log( resultado );

//Convertir de string a number
let miNumero = "10";
//console.log(typeof miNumero);

let años = Number(miNumero);
console.log(typeof años);
if(años >= 18){
    console.log("Puede votar");
}
else{
    console.log("No tiene edad para votar");
}
//Mismo ejercicio resuelto con operador ternario
let voto = (años >= 18) ? "Puede votar" : "Muy joven para votar";
console.log(voto);

//Función NaN (not a number)
let miNumero1 = "10x";

let años1 = Number(miNumero1);
console.log( años1 );

if( isNaN (años1)){
    console.log("No es un número");
}
else{
    if(años1 >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("No tiene edad para votar");
    }
}

//Ejemplos de precedencia de operadores

let ab = 5;
let cd = 10;
let zz = ++ab + cd--;
console.log(ab);
console.log(cd);
console.log(zz);

let cifra = 4 + 5 * 6 / 3;
console.log(cifra);

cifra = (4 + 5) * 6 / 3;
console.log(cifra);