/*
●	Ejercicio 8: Rojo y Verde
Para este ejercicio vamos a generar dos funciones:
a) Una va a sumar los valores en la diagonal marcada en rojo.
b) La otra va a marcar los valores de la diagonal marcada en verde.
Ambas funciones deben devolver un resultado único. Rojo: 505
Verde 505
*/

// Creamos la matriz:
let matriz = []; // Aca guardamos todas las filas
let numero = 1; // Empezamos a contar desde el 1

// Recorremos 10 veces para hacer 10 filas (matriz de 10x10)
for (let fila = 0; fila < 10; fila ++) {
    let nuevaFila = []; // Creamos una nueva fila vacia ("un nuevo array")
    // Recorremos 10 columnas x fila
    for (let columna = 0; columna < 10; columna ++) {
        nuevaFila.push(numero); // Agg el numero actual a la fila
        numero ++; //Aumentamos el numero para el proximo
    }
    matriz.push(nuevaFila); // Agg la fila completa a la matriz
}

// Recorremos la Diagonal Roja
// En esta diagonal, fila y columna son iguales: [0][0], [1][1], [2][2]...
let sumaRoja = 0;
for (let fila = 0; fila < matriz.length; fila ++) {
    let valor = matriz[fila][fila]; // Accedemos al valor donde fila = columna
    sumaRoja += valor; // Lo vamos sumando
}
console.log(`Suma de la Diagonal Roja: ${sumaRoja}`); // Deberia mostrar 505

// Recorremos la Diagonal Verde (de Arriba Derecha a Abajo Izquierda)
// En esta diagonal, la columna va decreciendo mientras la fila va aumentando

// - matriz.length → te da el tamaño total: es 10 (porque hay 10 filas/columnas)
// - matriz.length - 1 → es 9, que es el índice de la última columna
// - matriz.length - 1 - fila → va restando fila para darnos la columna opuesta

let diagonalVerde = [];
for (let fila = 0; fila < matriz.length; fila ++) {
    let columna = matriz.length - 1 - fila; 
    let valor = matriz[fila][columna]; 
    diagonalVerde.push(valor); // Lo agg al array
}

console.log(`Valores de la Diagonal Verde: ${diagonalVerde}`); // Deberia mostrar [10, 19, 28...]


