/*
● Ejercicio 3: Encuentra el primer número mayor a 10 
Tienes una lista de números [5, 8, 12, 20, 3].
Queremos encontrar el primer número de la lista que sea mayor a 10.
Recuerda que el resultado debe ser únicamente el primer número que cumpla esta condición, no todos los 
números que lo hagan.
*/

// Lista original de numeros
const numeros = [5, 8 ,12, 20, 3];
console.log(`La lista de numeros es la siguiente: ${numeros}`);

// Usamos .find para obtener el primer número que sea mayor a 10
// La función devuelve true cuando el número es mayor a 10
let mayorADiez = numeros.find(numero => numero > 10);

// Mostramos el resultado
console.log(`El primer numero mayor a diez es: ${mayorADiez}`);


