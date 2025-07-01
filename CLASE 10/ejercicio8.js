/*
_ Escribe un programa que convierta una temperatura dada en grados Celsius a grados Fahrenheit. 
_ Pide al usuario que ingrese la temperatura en Celsius y muestra el resultado en Fahrenheit.
_ La fórmula puede representarse asi: 
let fahrenheit = celsius * 9 / 5 + 32; 
*/

const prompt = require('prompt-sync')()

// Solicitamos al usuario la temperatura en grados Celsius y la convertimos a número decimal
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));

// Aplicamos la formula de conversion a Fahrenheit
let fahrenheit = celsius * 9/5 +32;

// Mostramos el resultado de la conversion en consola
console.log(`${celsius}°C equivale a ${fahrenheit}°F`);
