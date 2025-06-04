/*
_ Escribe un programa que calcule el Índice de Masa Corporal (IMC).
_ Pide al usuario que ingrese su peso y su altura, y muestra el IMC calculado.
_ La fórmula puede representarse asi:
let imc = peso / (altura * altura);
*/

const prompt = require('prompt-sync')()

let peso = parseFloat(prompt("Ingrese su peso: "));
let altura = parseFloat(prompt("Ingrese su altura: "));

let imc = peso / (altura * altura);

console.log(`Su Indice de Masa Corporal (imc) es de: ${imc}`);


