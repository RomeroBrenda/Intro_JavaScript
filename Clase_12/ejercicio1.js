/*
●	Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario
ingrese un número negativo.
Luego, imprime la suma de todos los números ingresados.
*/

const prompt = require('prompt-sync')()

// Inicializamos la suma en 0
let suma = 0;

let numero = parseFloat(prompt("Ingrese un numero (si queres terminar, escribi uno negativo): "));

while (numero >= 0) {
    suma += numero;
    numero = parseFloat(prompt("Ingrese otro numero (si quieres terminar, escribi uno negativo): "));
}
console.log(`La suma total de los numeros ingresados es: ${suma}`);

