/*
Ejercicio 10:  
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
semana correspondiente. Si el número no está dentro de ese rango, 
muestra un mensaje de error.
*/

const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese un numero del 1 al 7
let numero = parseInt(prompt("Ingrese un numero del 1 al 7: "));

// Usamos la condicional if para mostrar a que dia corresponde
if (numero === 1) {
    console.log("Lunes");
} else if (numero === 2) {
    console.log ("Martes");
} else if (numero === 3) {
    console.log ("Miercoles");
} else if (numero === 4) {
    console.log ("Jueves");
} else if (numero === 5) {
    console.log("Viernes");
} else if (numero === 6) {
    console.log ("Sabado");
} else if (numero === 7) {
    console.log("Domingo");
} else {
    // Si el numero no esta entre 1 y 7, mostramos un mensaje de error
    console.log("ERROR: Debes ingresar un numero del 1 al 7");
}