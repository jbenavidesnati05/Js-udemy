// ____________________________CLASE PRODUCTO_____________________

class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }
  get idProducto() {
    return this._idProducto;
  }
  // para nombre
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  // para apellido
  get precio() {
    return this._precio;
  }
  set precio(precio) {
    this._precio = precio;
  }

  toString() {
    return `idProducto: ${this._idProducto}
                nombre: ${this._nombre}
                precio: $${this._precio}`;
  }
}

// ____________________________CLASE ORDEN_____________________

class Orden {
  static contadorOrdenes = 0;

  static get MAX_PRODUCTOS() {
    return 5;
  }

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._productos = [];
    // this._contadorProductosAgregados = 0;
  }

  get idOrden() {
    return this._idOrden;
  }

  // CREA LOS METODOS DE LA CLASE ORDEN

  // Metodo agregar producto

  agregarProducto(producto) {
    if (this._productos.length < Orden.MAX_PRODUCTOS) {
      this._productos.push(producto);
    } else {
      console.log("no se pueden agregar mas productos");
    }
  }

  // Metodo calcular total
  calcularTotal() {
    let totalVenta = 0;

    for (let producto of this._productos) {
      totalVenta = totalVenta + producto.precio;
    }
    return totalVenta;
  }

  // Metodo mostrar orden

  mostrarOrden() {
    let productosOrden = " ";
    for (let producto of this._productos) {
      productosOrden = productosOrden + producto.toString() + " ";
    }
    console.log(
      `Orden: ${
        this._idOrden
      } Total: $${this.calcularTotal()}, Productos: ${productosOrden} `
    );
  }
}

// ------- PRUEBAS PODUCTO ------------
let Producto1 = new Producto("pantalon", 200);
let Producto2 = new Producto("camisa", 100);
console.log(Producto1.toString());
console.log(Producto2.toString());

// ------- PRUEBAS ORDEN ------------

let Orden1 = new Orden();
Orden1.agregarProducto(Producto1);
Orden1.agregarProducto(Producto2);

Orden1.mostrarOrden();
