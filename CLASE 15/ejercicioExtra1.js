/*
● Gestión de inventario de una tienda 
Eres encargado de una tienda y tienes un inventario inicial de productos. La 
lista de productos es: 
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"]; 
Debes realizar las siguientes acciones: 
1. Agregar un nuevo producto "Impresora" al inventario usando el 
método adecuado. 
2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje 
adecuado. 
3. Eliminar el primer producto del inventario. 
4. Mostrar la lista actualizada de productos en una sola cadena, 
separados por comas.
*/

// Inventario inicial con 4 productos
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
console.log(`Inventario Inicial: ${inventario}`);

// 1. Agregar un nuevo producto "Impresora" al final del inventario usando push()
inventario.push("Impresora");
console.log(`Inventario con nuevo producto agregado: ${inventario}`);

// 2. Comprobar si "Tablet" está en el inventario usando includes()
// includes() devuelve true si encuentra el elemento, false si no
let comprobar = inventario.includes("Tablet");

// Mostrar mensaje dependiendo del resultado de includes()
console.log(comprobar ? "Sí, Tablet está en el inventario!" : "No, Tablet no está en el inventario!");


// 3. Eliminar el primer producto del inventario usando shift()
// shift() elimina y devuelve el primer elemento del array
inventario.shift(); 


// 4. Mostrar la lista actualizada como una cadena separada por comas
// join(", ") une todos los elementos en una cadena con ", " como separador.
console.log(`Lista actualizada de productos: ${inventario.join(", ")}`);




