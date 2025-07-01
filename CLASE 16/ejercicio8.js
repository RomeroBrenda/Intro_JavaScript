/*
● Ejercicio 8: Busca un nombre específico 
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. 
Queremos saber si el nombre 'Laura' está presente en la lista y, si lo está, deberías devolverlo.
*/

// Lista original de nombres
const nombres = ['Carlos', 'Daniel', 'Laura', 'Ana'];

// Buscamos el nombre específico 'Laura'
// .find() recorre el array y devuelve el primer elemento que cumple la condición.
const nombreBuscado = nombres.find(nombre => nombre === "Laura");

// Verificamos si se encontró el nombre y mostramos el resultado
if (nombreBuscado) {
    console.log(`El nombre encontrado es: ${nombreBuscado}`);
} else {
    console.log("El nombre no esta en la lista!");
}
