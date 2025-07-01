/*
● Ejercicio 3: Clasificación de edades 
Solicita al usuario una edad y usa una función flecha para clasificarla en 
niño, adolescente, adulto o adulto mayor.
*/

const prompt = require('prompt-sync')()

// Pedimos la edad al usuario y la convertimos a entero
let edad = parseInt(prompt("Ingrese su edad: "));

// Función flecha que clasifica la edad en rangos definidos
let rangoEdad = (edad) => {
    if (edad <= 12) {
        return `Tienes ${edad} años, ¡Estas en la categoria de niños!`;
    } else if (edad > 12 && edad <= 17) {
        return `Tienes ${edad} años, ¡Estas en la categoria de adolescentes!`;
    } else if (edad > 17 && edad <= 59) {
        return `Tienes ${edad} años. ¡Estas en la categoria de adultos!`;
    } else {
        return `Tienes ${edad} años. ¡Estas en la categoria de adultos mayores!`;
    }
}

// Mostramos el resultado llamando a la función con la edad ingresada
console.log(rangoEdad(edad));



