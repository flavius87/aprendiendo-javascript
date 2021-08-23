let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombrecompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona);

/*Otra forma de imprimir un Object. Concatenar cada valor de cada propiedad
*/
console.log(persona.nombre + ', ' + persona.apellido);

//for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Otras formas
let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);