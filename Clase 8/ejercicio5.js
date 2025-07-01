/*
Ejercicio 5: Saludo personalizado
Escribe un programa que: 
1. Solicite al usuario que ingrese su nombre. 
2. Muestre un saludo personalizado usando el nombre ingresado. 

Requisitos: 
• Utiliza prompt() para recibir el nombre del usuario. 
• Muestra un mensaje utilizando concatenación de cadenas.
*/

const prompt = require("prompt-sync")({ sigint: true });

//Solicite al usuario que ingrese su nombre
let nombre = prompt ("Ingrese su nombre: ");

// Muestra un saludo personalizado concatenando cadenas
console.log(`¡Hola, ${nombre}! Bienvenido/a :)`);