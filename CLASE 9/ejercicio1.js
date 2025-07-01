/*
Ejercicio 1:  
Declara dos variables numéricas numero1 y numero2. Pide al usuario 
que ingrese dos números y muestra cuál es mayor o si son iguales. 
*/

// Importar prompt-sync para entrada por consola
const prompt = require('prompt-sync')();

// Declaramos las variables y las convertimos en number
let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));

// Usamos la condicional para mostrar en la consola si es mayor, menor o igual
if (numero1 > numero2) {
    console.log (numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
    console.log (numero2 + " es mayor que " + numero1);
} else {
    console.log (numero1 + " y " + numero2 + " son iguales");
}
