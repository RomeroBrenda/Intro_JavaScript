/*
_ Escribe un programa que le pida al usuario un número cualquiera. 
_ Deberá analizar si el número ingresado es positivo, negativo o cero.
_ Utiliza estructuras if para resolverlo y muestra un mensaje explicativo en cada caso.
*/

const prompt = require('prompt-sync')()

// Solicitamos al usuario que ingrese un número y lo convertimos a decima
let numero = parseFloat(prompt("Ingrese un numero: "));

// Evaluamos el numero ingresado
if (numero > 0) {
    console.log("El numero es positivo!");
} else if (numero < 0) {
    console.log("El numero es negativo!");
} else {
    console.log("El numero es 0 (Cero)!");
}

