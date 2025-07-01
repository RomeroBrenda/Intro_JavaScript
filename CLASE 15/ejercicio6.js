/*
● Ejercicio 6: Buscar la última posición de un elemento repetido 
Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última 
posición en la que aparece el número 7.
*/

// Creamos un array con números, donde algunos están repetidos
let numeros = [2, 5, 7, 2, 8, 7];

// Usamos el método .lastIndexOf() para encontrar la última posición del número 7
// Este método recorre el array desde el final hacia el principio
let posicion = numeros.lastIndexOf(7);

// Mostramos el resultado en consola
console.log(`La ultima posicion en la que aparece el numero "7" dentro del array es: ${posicion}`);

