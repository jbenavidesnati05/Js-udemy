class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo= sueldo;
    }
    obtenerDetalles(){
        return `Empleado ==>\nNombre: ${this._nombre},\nsueldo: $${this._sueldo}`
    }
    
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
    super(nombre,sueldo);
    this._departamento=departamento;
    }
// Se debe sobreescribir metodo obtener detalles dado que no muestra el departamento 
    obtenerDetalles(){
        return `${super.obtenerDetalles()} \nDepartamento :${this._departamento}`
    }
}

function imprimir(tipo){
    tipo.obtenerDetalles();

}




let gerente1 = new Gerente("Carlos Lopez",500," Sistemas")
// console.log(gerente1.obtenerDetalles());
let gerente2 = new Gerente("Carlos Mora",600," contabilidad")
// console.log(gerente2.obtenerDetalles());



