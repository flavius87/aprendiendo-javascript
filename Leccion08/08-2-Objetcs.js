/*La forma en la que se puede acceder a las propiedades del objeto
dentro del objeto es utilizando this.
*/
//Uso de funciones o métodos para definir objeto:
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