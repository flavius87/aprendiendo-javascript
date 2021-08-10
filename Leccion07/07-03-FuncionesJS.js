//Declaración de la función
function miFuncion(a, b){
    return a + b;
 }
 //Llamando a la función (se puede llamar antes o después)
 let resultado = miFuncion (2,3);
 console.log(resultado);

 //Declaración de la función de tipo Expresión
 let x = function (a,b){return a + b};

 resultado = x(1,2);
 console.log(resultado);