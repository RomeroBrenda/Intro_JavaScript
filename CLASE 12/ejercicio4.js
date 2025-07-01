/*
●	Ejercicio 4: Ciclo For - Array
Crear un programa que permita registrar las notas de varios estudiantes usando arrays 
y mostrarlas por pantalla:

1.	Crear un array para almacenar las notas.
2.	Define un array vacío llamado notas donde almacenaremos las notas de los estudiantes.
3.	Pide al usuario que ingrese las notas de varios estudiantes una por una utilizando el método prompt.
4.	Usa un bucle for para solicitar las notas y asignarlas directamente a posiciones 
específicas del array notas.
5.	Imprime en consola las notas ingresadas usando el array notas.
*/

const prompt = require('prompt-sync')()

// Declaramos un array vacio para almacenar las notas
let notas = [];

// Pedimos al usuario cuantas notas (estudiantes) quiere ingresar 
let cantidadNotas = parseInt(prompt("Ingrese la cantidad de estudiantes: "));

// Usamos un bucle for para registrar cada nota
for (let estudiante = 0; estudiante < cantidadNotas; estudiante ++) {
    let nota = parseFloat(prompt(`Ingresa la nota del estudiante ${estudiante + 1}: `));
    notas [estudiante] = nota; // Guardamos la nota en la posición inicial del array
}

// Mostramos todas las notas ingresadas
console.log("Notas Ingresadas: ");
for (let estudiante = 0; estudiante < notas.length; estudiante ++) {
    console.log (`Estudiante ${estudiante + 1}: ${notas[estudiante]}`);
}
