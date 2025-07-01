/*
Ejercicio 4:  
Declara una variable nombre y pide al usuario que ingrese su nombre. 
Verifica si el nombre ingresado es igual a tu nombre. 
*/

const prompt = require('prompt-sync')();

/* toLowerCase= convierte un texto a minúsculas para que las comparaciones
 de cadenas sean más flexibles y no dependan de mayúsculas o minúsculas.*/

let nombre = prompt("Ingrese su nombre: ").toLowerCase();
const miNombre="brenda";

if(nombre === miNombre) {
    console.log("El nombre ingresado " + nombre + " es igual al mio " + miNombre);
} else {
    console.log("El nombre ingresado " + nombre + " es distinto al mio " + miNombre);
}