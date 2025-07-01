/*
Ejercicio 3: Suma de dos números ingresados por el usuario
Escribe un programa que: 
 _Pida al usuario que ingrese dos números. 
 _Sume ambos números. 
 _Muestre el resultado de la suma.
 
 Requisitos: 
• Utiliza prompt() para recibir los números. 
• Utiliza parseFloat() para convertir las entradas a números. 
• Almacena los resultados en variables adecuadas y muestra el resultado.
*/

const prompt = require("prompt-sync")({ sigint: true });

// Solicita los dos números
let numero1 = prompt("Ingresa el primer número: ");
let numero2 = prompt("Ingresa el segundo número: ");

// Convierte los valores ingresados a números con decimales
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Suma los dos números
let suma = numero1 + numero2;

// Muestra el resultado en la consola
console.log(`La suma de los dos números es: ${suma}`);

