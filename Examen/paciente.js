export default class Paciente {
    constructor(nombre, apellido, edad, sexo, fNacimiento, estatura, peso) {
        this._nombre = nombre.toUpperCase();
        this._apellido = apellido.toUpperCase();
        this._edad = edad;
        this._sexo = sexo;
        this._fNacimiento = fNacimiento;
        this._estatura = estatura;
        this._peso = peso;
}

get Nacimiento(){
    return this._fNacimiento;
}
set Nacimiento(){
    this._fNacimiento = fNacimiento;
}

set Estatura(){
    this._estatura = estatura;
}

set Peso(){
    this._peso = peso;

}

informacion(){
    console.log(`Informacion del paciente:
    Nombre: ${this._nombre},
    Apellido: ${this._apellido},
    Edad: ${this._edad},
    Sexo: ${this._sexo},
    Fecha de Nacimiento: ${this._fNacimiento},
    Estatura: ${this._estatura},
    Peso: ${this._peso}`)
}
}