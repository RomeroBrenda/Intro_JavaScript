/*
Ejercicio 6:  
Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
edad. Muestra un mensaje personalizado según el caso. 
*/

const prompt = require('prompt-sync')();

// Declaramos variables y covertimos el string ingresado en number
let mayor = 18;
let edad = parseFloat(prompt("Ingrese su edad: "));

// Utilizamos la condicional if para determinar si es menor o mayor de edad
if(edad >= mayor) {
    console.log("Eres mayor de edad!");
} else {
    console.log("Eres menor de edad!");
}
    