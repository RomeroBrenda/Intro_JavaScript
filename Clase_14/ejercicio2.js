/*
● Ejercicio 2: Calcular promedio de calificaciones 
Solicita al usuario cinco calificaciones y usa una función flecha para calcular 
el promedio.
*/

const prompt = require('prompt-sync')()

let calificaciones = [];

for (let cantidadNotas = 1; cantidadNotas <= 5; cantidadNotas ++) {
    let nota = parseFloat(prompt(`Ingrese la calificacion ${cantidadNotas}: `));
    calificaciones.push(nota);
}

let calcularPromedio = (calificaciones) => {
    let suma = 0;
    for (let posicion = 0; posicion < calificaciones.length; posicion ++) {
        suma += calificaciones[posicion];
    }
    return suma / calificaciones.length;
}

let promedio = calcularPromedio(calificaciones);
console.log(`El promedio es: ${promedio.toFixed(2)}`);






