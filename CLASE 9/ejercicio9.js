/*
Ejercicio 9:  
Define una constante PI con el valor de pi (3.14159). Pide al usuario 
que ingrese el radio de un círculo y calcula su área y perímetro 
utilizando la constante PI.
*/

const prompt = require('prompt-sync')();

// Definimos la constante PI
const PI = 3.14159;

// Pedimos que se ingrese el radio del circulo
let radio = parseFloat(prompt("Ingrese el radio del circulo: "));

// Calculamos el area
// pi * radio al cuadrado
let area = PI * radio ** 2;

// Calculamos el perimetro
// 2 * pi * radio
let perimetro = 2 * PI * radio;

console.log("El area del circulo es: " + area);
console.log("El perimetro del circulo es: " + perimetro);
