/*
● Ejercicio 5: Recorre una lista e imprime cada elemento 
Tienes una lista de frutas ['manzana', 'banana', 'cereza']. 
Tu tarea es recorrer la lista y mostrar el nombre de cada fruta en la consola, una por una.
*/

// Array de frutas
let frutas = ["manzana", "banana", "cereza"];
console.log("Esta es la lista de frutas: ");

// Recorremos el array frutas con forEach
// 'fruta' representa cada elemento en cada pasada del recorrido
frutas.forEach(fruta => {
    // Imprimimos cada fruta con un guion bajo para listar
    console.log(`_ ${fruta}`);
})
