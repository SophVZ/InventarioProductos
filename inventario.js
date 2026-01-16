//CLASE
//se crea la clase producto con los atributos nombre, precio y stock
class Producto {
    constructor (nombre, precio, stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
//dentro de la clase esta el método vender, el cual emplea la variable cantidad, correspondiente al numero de unidades 
// a vender, y las resta del stock, en caso de no haber suficientes unidades, retorna un mensaje indicando que no hay 
// suficiente stock
    vender(cantidad){
        if (cantidad<=this.stock){
            this.stock-=cantidad;
            return `Venta realizada:${cantidad} unidad(es) de ${this.nombre}. Stock restante: ${this.stock}`;
        } else {
            return `No hay suficiente stock de ${this.nombre} para realizar la venta.`;
        }
    }
//método reponer: tambien utiliza la variable cantidad para indicar las unidades del producto que se agregan al 
// inventario por medio de una suma al stock, entrega un mensaje con el resultado de la operación por consola
    reponer(cantidad){
        this.stock+=cantidad;
        return `El stock de ${this.nombre} ha aumentado a ${this.stock}.`;
    }
// aquí se utiliza get para el método información. get es método que se comporta como un atributo, no posee variables y 
// se construye a partir de procedimiento que obtiene o procesa los atributos de la clase. En este caso enlista las 
// propiedades del objeto
    get informacion(){
        return `Producto: ${this.nombre} | Precio: ${this.precio} | Stock: ${this.stock}`
    }
//static: propiedad de la clase que es compartida por todos los hijos, se llama desde la clase clase.static(variables).
// En este caso se ustilizan dos variables, a partir de las cuales se les extrae la propiedad precio para comparar 
// su valor e indicar cual es mayor. No tiene respuesta en caso de que los precios sean iguales
    static compararPrecio(prodA,prodB){
        return prodA.precio>prodB.precio?prodA.nombre:prodB.nombre;
    }
}
//INSTANCIAS Y ACCIONES
//se crean dos objetos a partir de la clase Producto y se instancian los valores de los atributos
const prod1=new Producto('Teclado', 25000, 10);
const prod2=new Producto('Mouse',12000,5);
//Se generan impresiones de consola utilizando los metodos de la clase. Se solicita la información de prod1, se restan 
// 3 unidades con el método vender, quedando el stock en 7 y luego se agregan 5 u por medio del método reponer. Y por 
// ultimo se solicita la información actualizada de las propiedades del objeto
console.log(prod1.informacion);
console.log(prod1.vender(3));
console.log(prod1.reponer(5));
console.log(prod1.informacion);
//se utiliza la propiedad de la clase Producto para comparar el precio de los objetos prod1 y prod2
console.log(`El producto más caro es: ${Producto.compararPrecio(prod1,prod2)}.`);

//FILTRAR PRODUCTOS CON FUNCIÓN FLECHA
//se hace una lista de productos con los productos existentes y se instancia un nuevo producto
const listaProductos=[prod1, prod2, new Producto('Monitor',55000,2)];
//Se genera la variable de productosBajoStock la cual utiliza el arreglo de listaProductos, y por medio de un filtro 
// revisa cual de los productos presenta un stock inferior a 5. Aquí => es función flecha, no igual o mayor que y se 
// utiliza para instranciar que la variable prod, en su atributo stock sea menor a 5. 
const productosBajoStock=listaProductos.filter(prod=>prod.stock<5);
//aquí se utiliza map en la variable productosBajoStock para revisar la listaProductos y entregar la información de los 
// productos que están bajo stock.
console.log(productosBajoStock.map(prod=>prod.informacion));
