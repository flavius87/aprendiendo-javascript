function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

Persona.prototype.tel = '443-3322'

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre.tel);

let madre = new Persona('Laura', 'Villegas', 'lvillegas@gmail.com');
console.log(madre.tel);

//Prototype: para asignar nuevas propiedades a todos los objetos sin tocar el constructor

