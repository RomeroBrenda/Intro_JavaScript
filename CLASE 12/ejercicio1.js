/*
●	Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta que el usuario
ingrese un número negativo.
Luego, imprime la suma de todos los números ingresados.
*/

const prompt = require('prompt-sync')()

// Inicializamos la suma en 0
let suma = 0;

// Solicitamos el primer numero al usuario
let numero = parseFloat(prompt("Ingrese un numero (si queres terminar, escribi uno negativo): "));

// Mientras el número sea mayor o igual a 0, seguimos sumando y pidiendo números
while (numero >= 0) {
    suma += numero; // Sumamos el numero ingresado a la variable "suma"
    numero = parseFloat(prompt("Ingrese otro numero (si quieres terminar, escribi uno negativo): "));
}

// Cuando el usuario ingresa un número negativo, salimos del ciclo y mostramos la suma total
console.log(`La suma total de los numeros ingresados es: ${suma}`);

