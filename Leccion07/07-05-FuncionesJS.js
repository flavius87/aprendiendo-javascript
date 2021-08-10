//Funciones como objetos (arguments, tostring)
function miFuncion(a, b){
    console.log(arguments.length);
    return a + b;
}
//Llamando a la función (se puede llamar antes o después)
miFuncion(2, 3);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);