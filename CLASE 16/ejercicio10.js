/*
● Ejercicio 10: Construye una frase a partir de una lista de palabras 
Dada la lista ['Me', 'gusta', 'aprender', 'JavaScript'], queremos construir una 
frase completa concatenando cada palabra en orden, separadas por 
espacios. 
Al final, deberíamos obtener el texto 'Me gusta aprender JavaScript'.
*/

// Array con las palabras que forman la frase
const palabras = ['Me', 'gusta', 'aprender', 'JavaScript'];
console.log("Array original de palabras", palabras);

// .join() para unir todas las palabras con un espacio entre ellas
const frase = palabras.join(" ");

// Mostramos como quedo la frase
console.log(`Frase Construida: ${frase}`);

