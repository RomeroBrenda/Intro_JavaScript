/*
Ejercicio 3: Mensaje global y local 
Declara una variable global llamada saludoGlobal con el valor "Hola desde el 
scope global". Luego, crea una función llamada mostrarMensaje que declare 
una variable local llamada saludoLocal con el valor "Hola desde el scope 
local" y que imprima ambos mensajes. 
*/

const prompt = require('prompt-sync')()

const saludoGlobal = "Hola! Desde el Scope Global";

function mostrarMensaje () {
    const saludoLocal = "Hola! Desde el Scope Local";
    console.log(saludoGlobal);
    console.log(saludoLocal);
}

mostrarMensaje();
