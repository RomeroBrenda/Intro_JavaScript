/*
● Ejercicio 9: Contar hasta un número 
Crea una función declarada llamada contarHasta que reciba un número y 
use un bucle para imprimir todos los números desde 1 hasta ese número.
*/

const prompt = require('prompt-sync')();

let numeroUsuario = parseInt(prompt("¿Hasta qué número querés contar?: "));

function contarHasta(numero) {
  for (let contador = 1; contador <= numero; contador++) {
    console.log(contador);
  }
}

contarHasta(numeroUsuario);
