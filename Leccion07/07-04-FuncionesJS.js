//Declaración de la función tipo self Invoking
//se manda a llamar así misma
(function(a,b){
    console.log('Ejecutando la función: ' + (a + b));
})(3,4);