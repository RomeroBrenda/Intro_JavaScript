/*
● Ejercicio 1: Añadir personajes a una lista 
Tienes una lista de personajes de videojuegos ["Link", "Zelda"]. Agrega los 
personajes "Mario" y "Luigi" al final de la lista utilizando el método adecuado. 
Luego, muestra el array actualizado. 
*/

// Creamos una lista inicial con dos personajes
let personajes = ["Link", "Zelda"];

// Mostramos en consola cómo está la lista al principio
console.log(`La lista de personajes inicial es esta: ${personajes}`);


// Agregamos "Mario" y "Luigi" al final del array usando el método .push()
// Este método permite añadir uno o más elementos al final de un array.
personajes.push("Mario", "Luigi");

// Mostramos el array ya actualizado con los nuevos personajes
console.log(`La lista de personajes actualizada es la siguiente: ${personajes}`);
