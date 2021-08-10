let x = 10; //valor primitivo (no tiene atributos ni métodos)

function cambiarValor(a){
    a = 20;
    return;
}

//Paso por valor
cambiarValor(x);
console.log(x);
console.log(a); //la variable (a) se destruye al salir del método
