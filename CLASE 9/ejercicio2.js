/*
Ejercicio 2:  
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
valores numéricos de tu elección. Pide al usuario que ingrese un 
número y verifica si está dentro del rango definido por las constantes.
*/

const prompt = require('prompt-sync')()

// Declaramos constantes (xq son variables inmodificables)
const RANGO_MINIMO = 5;
const RANGO_MAXIMO = 7;

let numero = parseFloat(prompt("Ingrese un numero: "));
//console.log(typeof(numero));

//verificamos si el numero esta dentro del rango definido
if (RANGO_MINIMO <= numero && RANGO_MAXIMO >= numero) {
console.log("El numero esta dentro del rango definido");
} else {
    console.log("El numero no esta dentro del rango definido");
}
