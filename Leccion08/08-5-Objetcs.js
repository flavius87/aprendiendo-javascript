let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombrecompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//agregar nueva propiedad al objeto:
persona.tel = '554443322';

console.log(persona);

//Modificar propiedad
persona.tel = '1112225555';

//Eliminar propiedad
delete(persona.tel);

console.log(persona);