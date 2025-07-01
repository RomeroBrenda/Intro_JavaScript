/*
_ Escribe un programa que calcule el Índice de Masa Corporal (IMC).
_ Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
_ La fórmula puede representarse asi:
let imc = peso / (altura * altura);
*/

const prompt = require('prompt-sync')()

// Solicitamos peso y altura al usuario y los convertimos a número decimal
let peso = parseFloat(prompt("Ingrese su peso: "));
let altura = parseFloat(prompt("Ingrese su altura: "));

// Calculamos el IMC usando la fórmula: IMC = peso / (altura * altura)
let imc = peso / (altura * altura);

// Mostramos resultado en consola con un mensaje
console.log(`Su Indice de Masa Corporal (imc) es de: ${imc.toFixed(2)}`);
// Redondeamos el IMC a dos decimales con ".toFixed(2)"


