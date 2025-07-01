/*
● Ejercicio 6: Convertir a minutos 
Crea una función declarada llamada convertirHorasAMinutos que reciba un 
número de horas como parámetro y devuelva el total en minutos. 
*/

const prompt = require('prompt-sync')()

// Solicitamos al usuario la cantidad de hora
let horas = parseFloat(prompt("Ingrese el numero de horas para pasarlo a minutos: "));

// Función declarada para convertir horas a minutos
function convertirHorasAMinutos (horas) {
    let total = horas * 60; // 1 hora = 60 minutos
    return total;
}

// Ejecutamos la función y mostramos el resultado
let minutos = convertirHorasAMinutos(horas);
console.log(`Equivale a: ${minutos} minutos!`);

