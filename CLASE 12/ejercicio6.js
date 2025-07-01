/*
●	Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima o sean iguales a 10,
pero menores que 1000.
*/

const prompt = require('prompt-sync')()

// Matriz dada
let matriz = [
  [10, 3, 2, 1, 4, 7],
  [5, 5, 10, 100, 4],
  [5, 125, 10, 1020, 4],
  [5, 5, 5097, 100, 4]
];

// Variable para acumular los valores válidos
let suma = 0;

// Recorremos filas
for (let fila = 0; fila < matriz.length; fila++) {
  // Recorremos columnas dentro de cada fila
  for (let columna = 0; columna < matriz[fila].length; columna++) {
    let valor = matriz[fila][columna];

    // Si el número está entre 10 (inclusive) y 1000 (exclusivo)
    if (valor >= 10 && valor < 1000) {
      suma += valor; // Acá sumamos ese "valor" a la variable "suma"
    }
  }
}

// Mostramos el resultado
console.log(`La suma de los valores entre 10 y 1000 es: ${suma}`);

