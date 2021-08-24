class Persona{

    static contadorPersona = 0; //atributo de la clase

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersona;
        }
        else{
            console.log('Se han superado el máximo de objetos permitidos');
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el método de la clase padre
    toString(){
        //Aplicando polimorfismo
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('Saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    // Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

let empleado1 = new Empleado('Roberto', 'Basualdo', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let persona2 = new Persona('Ricardo', 'Trota');
console.log(persona2.toString());

let empleado2 = new Empleado('Cristiano', 'Ronaldo', 'futbolista');
console.log(empleado2.toString());

let persona3 = new Persona('Mercedes', 'Sosa');
console.log(persona3.toString());

let empleado4 = new Empleado('Dolores', 'Barreiro', 'modelo');
console.log(empleado4.toString());