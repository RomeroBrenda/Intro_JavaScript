/*
_ Escribe un programa que le pida al usuario un número y determine si es par o impar.
_ Muestra un mensaje explicativo indicando qué significa cada caso.
*/

const prompt = require('prompt-sync')()

// Solicitamos al usuario un numero entero
let numero = parseInt(prompt("Ingrese un numero: "));

// Evaluamos si el numero es par o impar usando operador modulo
let resultado = (numero % 2 === 0)
? "El numero es par!"
: "El numero es impar!"

// Mostramos el resultado
console.log(resultado);

