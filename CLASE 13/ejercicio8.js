/*
● Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba 
una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit. 
Fórmula: Fahrenheit = (Celsius x 9/5) + 32
*/

const prompt = require('prompt-sync')();

// Función expresada para convertir de Celsius a Fahrenheit
let convertirCelsiusAFahrenheit = function(celsius) {
    // Aplicamos la fórmula: 
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
};

// Pedimos al usuario que ingrese la temperatura
let tempCelsius = parseFloat(prompt("Ingrese temperatura en grados Celsius: "));

// Llamamos a la función y guardamos el resultado
let tempFahrenheit = convertirCelsiusAFahrenheit(tempCelsius);

// Mostramos el resultado en consola
console.log(`La temperatura en Fahrenheit es: ${tempFahrenheit}`);
