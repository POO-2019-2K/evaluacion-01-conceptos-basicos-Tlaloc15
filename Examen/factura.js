export default class Factura {
    constructor(empresa, nomCliente, fecha, total, noFactura) {
        this._empresa = empresa;
        this._nomCliente = nomCliente.toUpperCase();
        this._fecha = fecha;
        this._noFactura = noFactura;
        this._total = total;

    }

    get Fecha(){
        return this._fecha;
    }
    get Total(){
        return this._total;
    }
    get Numero(){
        return this._nomCliente;
    }
    set Numero(){
        this._noFactura = noFactura;
    }


    informacion(){
        console.log(`Factura:
        Empresa: ${this._empresa},
        Cliente: ${this._nomCliente},
        Fecha: ${this._fecha},
        Numero de Factura: ${this._noFactura},
        Total: ${this._total}`)

    }
}