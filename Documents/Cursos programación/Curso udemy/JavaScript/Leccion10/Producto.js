class Producto {
    static contadorProducto = 0;

    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProducto;
        }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre (nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    /*toString(){
        return (this._idProducto+ '. '
        + this._nombre + ', valor: $' + this._precio)
    } */

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

let producto1 = new Producto('Agua con gas',2500);
console.log(producto1.toString());

let producto2 = new Producto('Doritos',4800);
console.log(producto2.toString());

//Agregar class Orden y desarrollar la relación de agregación//

class Orden {

    static contadorOrden = 0;

    static get MAX_PRODUCTOS() {
        return 5 ;
    }
    constructor() {
        this._idOrden = ++Orden.contadorOrden;
        this._productos = []; /*Referencia a arreglo vacío*/
        this._contadorProductosAgregados = 0;
     }

     get idOrden (){
         return this._idOrden;
     }

     agregarProducto(productos){
        if (this._productos.length /*cantidad de elementos en el arreglo*/ <= Orden.MAX_PRODUCTOS) {
             this._productos.push(producto);
              /*Si no se ha superado se agrega un nuevo producto*/
              
              /*Otra forma de hacerlo*/
              //this._productos[this._contadorProductosAgregados++] = producto;
              /*Especificar el índice del arreglo y agregar el producto del índice */
        }
        else { 
            console.log ("Máximo de productos en orden, no se pueden agregar más productos")};
    }

    calcularTotal (){
        let totalVentas = 0;
        for(let producto of this._productos){
            totalVentas += producto.precio;//totalVentas = totalVentas + producto.precio
        }
        return totalVentas;
    }

    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._productos){
            productosOrden += producto.toString() + ' ';
        }
        
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}
        , Productos: ${productosOrden}`);
    }
      
}







