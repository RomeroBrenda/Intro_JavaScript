/*
 Ejercicio 7:  
Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
kg a libras, Pista: 2.20462)

*/

const prompt = require('prompt-sync')();

//Pedimos al usuario su peso en kilogramos
let pesoKg = parseFloat(prompt("Ingresa tu peso en Kg: "));

/*1kg= 2.20462
Por ende, si multiplicamos el peso por la cantidad de libras nos 
mostrara el resultado*/
let pesoLibras = pesoKg * 2.20462

console.log("Tu peso en libras es " + pesoLibras);