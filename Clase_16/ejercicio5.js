/*
● Ejercicio 5: Recorre una lista e imprime cada elemento 
Tienes una lista de frutas ['manzana', 'banana', 'cereza']. 
Tu tarea es recorrer la lista y mostrar el nombre de cada fruta en la consola, una por una.
*/

let frutas = ["manzana", "banana", "cereza"];
console.log("Esta es la lista de frutas: ");

frutas.forEach(fruta => {
    console.log(`_ ${fruta}`);
})
