/*
1_ Pide al usuario que ingrese su nombre.
2_ Pide al usuario que ingrese su edad.
3_ Pide al usuario que ingrese su peso.
4_ Muestra un mensaje personalizado que incluya el nombre, la edad y el peso del usuario.
*/

const prompt = require('prompt-sync')()

let nombre = prompt("Ingrese su nombre: ");
let edad = prompt("Ingrese su edad: ");
let peso = prompt("Ingrese su peso: ");

console.log(`Hola ${nombre}!! Tu edad es ${edad} y pesas ${peso}kg.`);
