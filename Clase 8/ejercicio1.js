/*
Ejercicio 1: Calcula el doble de un número
Debes escribir un programa que: 
_Solicite al usuario que ingrese un número cualquiera. 
_Calcule el doble de ese número. 
_Muestre el resultado en la consola.

• Utiliza la función prompt() para solicitar el dato al usuario. 
• Almacena el número ingresado en una variable. 
• Utiliza un operador aritmético para calcular el doble del número.
*/

const prompt = require("prompt-sync")();

// Pedimos al usuario un número y lo convertimos a tipo Number
const numero = Number(prompt("Ingresa un número: "));

// Calculamos el doble
const doble = numero * 2;

// Mostramos el resultado
console.log(`El doble de ${numero} es ${doble}.`);