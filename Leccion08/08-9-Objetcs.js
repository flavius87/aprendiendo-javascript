//Constructores (función especial)
//this hace referencia al nombre de la propiedad. Sin this hacemos referencia al nombre del parámetro. 
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);

let madre = new Persona('Claudia', 'Perez', 'cperez@mail.com');
console.log(madre);

padre.nombre = 'Carlos';
console.log(padre);
console.log(madre);