/*
●	Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array.
Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se encuentra en el array.
(Pueden desglosar en pasos el código si eso les facilita su desarrollo)
*/

const prompt = require('prompt-sync')()

// Creamos el array vacio para guardar los nombres
let nombres = [];

// Pedimos 5 nombres al usuario y los guardamos
for (let i = 0; i < 5; i++) {
  let nombre = prompt(`Ingresá el nombre ${i + 1}: `);
  nombres.push(nombre); // Agregamos el nombre al final del array
} 

let nombreBuscado = prompt("Ingresa un nombre para buscar si esta en la lista: ");
let encontrado = false 

for (let posicionNombre = 0; posicionNombre < nombres.length; posicionNombre ++) {
    if (nombres[posicionNombre] === nombreBuscado) {
        encontrado = true;
        break;
    }
}

if (encontrado) {
    console.log("El nombre que ingresaste SI esta en la lista!");
} else {
    console.log("El nombre que ingresaste NO esta en la lista!");
}