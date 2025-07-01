/*
Declaración de Variables:
1_ Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
2_ Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).
3_ Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
4_ Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.

Operaciones y Validaciones:
1_ Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección.
2_ Concatena el “string” de la variable texto con otro mensaje adicional.
3_ Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.
4_ Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.
*/

const prompt = require('prompt-sync')()

// Declaracion de variables
let verdadero = true; // Booleano
let texto = "¿Que carrera estas cursando en ADA?: "; // String
let numero = 20; // Numero
let nada = null; // Valor nulo

// Operación matemática: sumamos el valor de 'numero' con uno ingresado por el usuario
let numero2 = parseInt(prompt("Ingresa un numero: ")); 
let suma = numero + numero2;
console.log(`El resultado de la suma es: ${suma}!`);

// Concatenación de texto: preguntamos al usuario y mostramos su respuesta
let respuestaUsuario = prompt(texto);
console.log(`Tu carrera es: ${respuestaUsuario}`);


// Evaluación de la variable booleana
if (verdadero) {
    console.log(`La variable "verdadero" es true`);
} else {
    console.log(`La variable "verdadero" es false`);
}

// Verificamos si la variable 'nada' es null
if (nada === null) {
    console.log(`La variable "nada" es null.`);
}
 

