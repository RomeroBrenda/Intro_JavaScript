/*
● Ejercicio 3: Clasificación de edades 
Solicita al usuario una edad y usa una función flecha para clasificarla en 
niño, adolescente, adulto o adulto mayor.
*/

const prompt = require('prompt-sync')()

let edad = parseInt(prompt("Ingrese su edad: "));

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

console.log(rangoEdad(edad));



