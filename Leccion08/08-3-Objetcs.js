let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombrecompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombrecompleto());

//Otra forma de crear objetos con js
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.telefono = '55554444';

console.log(persona2.telefono);