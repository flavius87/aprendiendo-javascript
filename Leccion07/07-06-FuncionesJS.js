 //Declaración de la función de tipo Expresión
 let x = function (a,b){return a + b};

 resultado = x(1,2);
 console.log(resultado);

 //Funciones tipo flecha (no es necesario usar function ni return)
 const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3, 5);
console.log(resultado);