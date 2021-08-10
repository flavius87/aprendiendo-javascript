 //Declaración de la función de tipo Expresión
 let x = function (a,b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]); 
    return a + b
    };

 resultado = x(1,2,7);
 console.log(resultado);
 
/*Parámetros y argumentos: los argumentos (1, 2) son los valores que
finalmente reciben los parámetros (a, b).
Los parámetros son la lista de valores que definimos cuando
declaramos una función. 
No es necesario definir todos los parámetros.
*/