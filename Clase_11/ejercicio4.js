/*
_ Escribe un programa que le pida al usuario un número y determine si es par o impar.
_ Muestra un mensaje explicativo indicando qué significa cada caso.
*/

const prompt = require('prompt-sync')()

let numero = parseInt(prompt("Ingrese un numero: "));

let resultado = (numero % 2 === 0)
? "El numero es par!"
: "El numero es impar!"

console.log(resultado);

