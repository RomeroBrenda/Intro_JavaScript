/*
●	Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros números enteros y positivos.
Luego, escribe un algoritmo para sumar todos los números en la matriz.
*/

const prompt = require('prompt-sync')()

// Matriz 5x5 con números enteros positivos
let matriz = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

// Inicializamos una variable para guardar el valor de la suma
let sumaTotal = 0;

// Recorremos cada fila de la matriz
for (let fila = 0; fila < matriz.length; fila ++) {
    // Recorremos cada numero dentro de la fila
    for (let columna = 0; columna < matriz[fila].length; columna ++) {
        let valor = matriz[fila][columna]; // Obtenemos el valor actual
        sumaTotal += valor; // En cada vuelta, sumamos el número actual al total
    }
}

// Mostramos el resultado en consola
console.log(`La suma total de todos los numeros en la matriz es: ${sumaTotal}`);
