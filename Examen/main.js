import Factura from "./factura.js";
import Paciente from "./paciente.js";
import Casa from "./casa.js";




//Factura
let factura1 = new Factura("Tlaloc", "Carlos Garcia", "19/02/19", "$1,200", "0");
factura1._noFactura = "12"
factura1._nomCliente = "Carlos"
factura1.informacion();


//Paciente
let paciente1 = new Paciente("Carlos", "Garcia", "18", "Masculino", "15/04/19", "1.70mts", "59 kg");
paciente1.informacion();

//Casa
let casa1 = new Casa("Tlaloc", "Carlos de la Madrid Brizuela No.163", "210m2", "4", "3", "1'200,000");
casa1.informacion();