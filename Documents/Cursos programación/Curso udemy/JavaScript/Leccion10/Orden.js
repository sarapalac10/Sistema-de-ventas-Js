class Orden extends Producto {

    static contadorOrden = 0;

    static get MAX_OBJ (){
        return 5 ;

    constructor(nombre, precio, contadorProducto) {
        super(nombre, precio);
        this._nombre = nombre;
        this._precio = precio;

        this._idOrden = ++Orden.contadorOrden;
    
        if (contadorProducto <= Orden.MAX_OBJ) {
            this._idProducto = ++Orden.contadorProducto;  
        }
        else { 
            console.log ("Máximo de productos en orden")};
    }

    get nombre(){
      return this._nombre;
    }

    get precio(){
        return this._precio;
    }

    get contadorProducto(){
        return this._contadorProducto;
    }

    set contadorProducto (contadorProducto){
        this._contadorProducto = contadorProducto;
    }

    calcularTotal (){
        return (this._nombre + (this._precio * this._contadorProducto));
    }

    toString (){
        return ('El precio de ' + this._contadorProducto + ' unidades de: ' + this._nombre + 'es: $' + this.calcularTotal());
    }
}

let orden1 = new Orden('Chocolatina', 600, 10);
console.log(orden1);
