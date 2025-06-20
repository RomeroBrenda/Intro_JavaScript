/*
● Ejercicio 6: Convertir a minutos 
Crea una función declarada llamada convertirHorasAMinutos que reciba un 
número de horas como parámetro y devuelva el total en minutos. 
*/

const prompt = require('prompt-sync')()

let horas = parseFloat(prompt("Ingrese el numero de horas para pasarlo a minutos: "));

function convertirHorasAMinutos (horas){
    let total = horas * 60;
    return total;
}

let minutos = convertirHorasAMinutos(horas);
console.log(`Equivale a: ${minutos} minutos!`);

