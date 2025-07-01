/*
● Ejercicio 5: Concatenar nombres (función expresada) 
Crea una función expresada llamada concatenarNombres que reciba dos 
nombres (nombre y apellido) como parámetros y devuelva el nombre 
completo concatenado.
*/

const prompt = require('prompt-sync')()

// Solicitamos el nombre y apellido al usuario
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");

// Funcion expresada para concatenar nombre + apellido
let concatenarNombres = function (nombre, apellido) {
    let nombreCompleto = nombre + " " + apellido; // Usamos un espacio entre ambos
    return nombreCompleto;
}

// Guardamos el resultado y lo mostramos en consola
let resultado = concatenarNombres(nombre, apellido);
console.log(`Tu nombre completo es: ${resultado}`);

