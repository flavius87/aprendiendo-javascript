//Uso de método call para nombreCompleto
/* Cuando pasamos un parámetros a nuestro método no tenemos que usar el this.
El this se usa para las propiedades del objeto.
*/

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona1.nombreCompleto('Lic', '6665554444'));

console.log(persona1.nombreCompleto.call(persona2, 'Ingeniero', '55584445'));