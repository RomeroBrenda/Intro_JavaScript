/*
●	Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. 
Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. 
La contraseña correcta es "1234".
*/

const prompt = require('prompt-sync')()

// Declaramos el valor de la contraseña
const contraseñaCorrecta = "1234";
let intento;

// Usamos do...while para pedir al menos una vez
do {
  intento = prompt("Ingresá tu contraseña: ");
  
  // Si está mal, mostramos un mensaje
  if (intento !== contraseñaCorrecta) {
    console.log("Contraseña incorrecta! Intenta de nuevo.");
  }

} while (intento !== contraseñaCorrecta); // Se repite mientras sea incorrecta

console.log("Contraseña correcta! Bienvenido :)");
