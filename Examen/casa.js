export default class Casa {
    constructor(empresa, direccion, superficie, habitaciones, baños, precio ){
        this._empresa = empresa;
        this._direccion = direccion;
        this._superficie = superficie;
        this._habitaciones = habitaciones;
        this._baños = baños;
        this._precio = precio;

    }
    get Precio(){
        return this._precio;
    }

    get Superficie(){
        return this._superficie;

    }

    set Habitaciones(){
        this._habitaciones = habitaciones;
    }
    set Baños(){
        this._baños = baños;
    }

    informacion(){
        console.log(`Características de la Casa:
        Empresa: ${this._empresa},
        Direccion: ${this._direccion},
        Numero de Habitaciones: ${this._habitaciones},
        Numero de Baños: ${this._baños},
        Precio: ${this._precio}`)
    }
}