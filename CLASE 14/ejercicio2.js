/*
● Ejercicio 2: Calcular promedio de calificaciones 
Solicita al usuario cinco calificaciones y usa una función flecha para calcular 
el promedio.
*/

const prompt = require('prompt-sync')()

// Creamos un array para almacenar las calificaciones
let calificaciones = [];

// Pedimos 5 calificaciones al usuario y las guardamos en el array
for (let cantidadNotas = 1; cantidadNotas <= 5; cantidadNotas ++) {
    let nota = parseFloat(prompt(`Ingrese la calificacion ${cantidadNotas}: `));
    calificaciones.push(nota);
}

// Función flecha que calcula el promedio de un array de números
let calcularPromedio = (calificaciones) => {
    let suma = 0;
    for (let posicion = 0; posicion < calificaciones.length; posicion ++) {
        suma += calificaciones[posicion];
    }
    return suma / calificaciones.length;
}

// Calculamos el promedio usando la función
let promedio = calcularPromedio(calificaciones);

// Mostramos el promedio
console.log(`El promedio es: ${promedio.toFixed(2)}`);






