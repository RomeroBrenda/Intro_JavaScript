/*
● Ejercicio 4: Calcula la suma total de los números 
Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de 
sumarlos todos juntos. 
Es decir, deberías obtener 1 + 2 + 3 + 4. 
Al finalizar, imprime el total en la consola.
*/

// Lista original de numeros
let numeros = [1, 2, 3 , 4];
console.log(`Esta es la lista original de numeros: ${numeros}`);

// Usamos reduce para sumar todos los números del array
let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// → El segundo parámetro (el 0) es el valor inicial del acumulador.
// Esto le dice a reduce que empiece la suma desde 0.

//⚠️ IMPORTANTE:
// Si no usamos "0":
// - El acumulador arranca con el primer número del array (en este caso, 1).
// - El recorrido empieza desde el segundo número (2).
// - FUNCIONA si el array tiene al menos un elemento.
// - PERO si el array está vacío, da un error.
// Por eso es mejor siempre poner el valor inicial.

console.log(`La suma total de los numeros es: ${suma}`);

