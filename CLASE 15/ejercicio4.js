/*
● Ejercicio 4: Convertir una lista de palabras en una frase 
Tienes un array de palabras ["JavaScript", "es", "divertido"]. Une todas las 
palabras en una sola frase, separadas por un espacio, y muestra el 
resultado. 
*/

// Creamos un array con tres palabras
let palabras = ["JavaScript", "es", "divertido"];

// Usamos .join(" ") para unir todos los elementos del array en un solo string,
// Separando cada palabra con un espacio (" ")
let separadosPorEspacio = palabras.join(" ");

// Mostramos el resultado en consola
console.log(separadosPorEspacio);
