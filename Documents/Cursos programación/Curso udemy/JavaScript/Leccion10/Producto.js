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

    toString(){
        return (this._idProducto+ '. '
        + this._nombre + ', valor: $' + this._precio)
    }
}

let producto1 = new Producto('Agua con gas',2500);
console.log(producto1.toString());

let producto2 = new Producto('Doritos',4800);
console.log(producto2.toString());




