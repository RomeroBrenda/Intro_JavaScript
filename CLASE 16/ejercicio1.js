/*
● Ejercicio 1: Crea un nuevo array con los cuadrados de los números 
Imagina que tienes una lista de números, como [2, 4, 6, 8].
Tu objetivo es crear una nueva lista donde cada número de la lista original se haya 
transformado en su cuadrado. Por ejemplo, el número 2 debería convertirse 
en 4, el número 4 en 16, y así sucesivamente. Al final, imprime la nueva lista.
*/

// Array original con numeros
let numeros = [2, 4, 6, 8, 10];
console.log(`Los numeros en el array son: ${numeros}`);

// Usamos .map para crear un nuevo array con los cuadrados de cada número
let cuadrado = numeros.map(function(numero) {
     // Multiplicamos el numero x si mismo para obtener el cuadrado
     return numero * numero; 
});

// Mostramos el nuevo array con el cuadrdado de cada numero
console.log(`El doble de los numeros del array son: ${doble}`);
