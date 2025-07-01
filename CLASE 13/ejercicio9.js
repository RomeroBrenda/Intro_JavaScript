/*
● Ejercicio 9: Contar hasta un número 
Crea una función declarada llamada contarHasta que reciba un número y 
use un bucle para imprimir todos los números desde 1 hasta ese número.
*/

const prompt = require('prompt-sync')();

// Pedimos al usuario hasta qué número quiere contar
let numeroUsuario = parseInt(prompt("¿Hasta qué número querés contar?: "));

// Función declarada para contar desde 1 hasta el número dado
function contarHasta(numero) {
  for (let contador = 1; contador <= numero; contador ++) {
    console.log(contador); // Imprime cada numero en la consola
  }
}

// Ejecutamos la funcion con el numero ingresado
contarHasta(numeroUsuario);
