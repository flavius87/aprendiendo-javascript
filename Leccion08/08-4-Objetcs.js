let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombrecompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
//Otra forma de acceder a las propiedades del objeto
console.log(persona ['apellido']);

//for in para recorrer propiedades del objeto
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}
/*En la primera linea accedemos a los nombres de las propiedades
del objeto. En la segunda línea accedemos a los valores de las 
propiedades de nuestro objeto.
*/