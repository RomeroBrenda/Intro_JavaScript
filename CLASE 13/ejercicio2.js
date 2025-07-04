/*
● Ejercicio 2: Número mayor (función expresada) 
Crea una función expresada llamada encontrarMayor que reciba dos 
números como parámetros y devuelva el número mayor.
*/

const prompt = require('prompt-sync')()

// Solicitamos al usuario 2 numeros
let numero1 = parseInt(prompt("Ingrese el primer numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));

// Funcion expresada para encontrar el numero mayor
let encontrarMayor = function (numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
}

// Llamamos a la funcion y mostramos el resultado
let mayor = encontrarMayor(numero1, numero2);
console.log(`El numero mayor es: ${mayor}`);

