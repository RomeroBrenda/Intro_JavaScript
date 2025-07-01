/*
Ejercicio 3: Mensaje global y local 
Declara una variable global llamada saludoGlobal con el valor "Hola desde el 
scope global". Luego, crea una función llamada mostrarMensaje que declare 
una variable local llamada saludoLocal con el valor "Hola desde el scope 
local" y que imprima ambos mensajes. 
*/

// Variable global: esta fuera de cualquier funcion
const saludoGlobal = "Hola! Desde el Scope Global";

function mostrarMensaje () {
    // Variable local: solo existe dentro de esta funcion
    const saludoLocal = "Hola! Desde el Scope Local";
    // Mostramos los 2 mensajes
    console.log(saludoGlobal);
    console.log(saludoLocal);
}

// Llamamos a la funcion
mostrarMensaje();
