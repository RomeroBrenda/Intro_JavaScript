/*
1_ Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les asignarás los valores numéricos 18 y 99 respectivamente.
2_ Pide al usuario que ingrese su edad.
3_ Usa “parseInt” para convertir la entrada del usuario a un número entero.
4_ Valida si la edad ingresada está dentro del rango permitido y muestra un mensaje adecuado.
*/

const prompt = require('prompt-sync')()

// Definimos los límites del rango permitido
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

// Solicitamos al usuario su edad y convertimos el valor a número entero
let edad = parseInt(prompt("Ingrese su edad: "));

// Validamos si la edad está dentro del rango permitido
if (edad >= 18 && edad <= 99) {
    console.log(`Tu edad es: ${edad}. Estas dentro del rango permitido!`);
} else {
    console.log(`Tu edad es: ${edad}. No estas dentro del rango permitido!`);
}
