/*
_ Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. 
_ Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
_ La fórmula puede representarse asi: 
let fahrenheit = celsius * 9 / 5 + 32; 
*/

const prompt = require('prompt-sync')()

let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));
let fahrenheit = celsius * 9/5 +32;

console.log(`${celsius}°C equivale a ${fahrenheit}°F`);
