/*Ejercicio 2: Verificar si un número es positivo, negativo o cero
  _Pida al usuario que ingrese un número. 
  _Verifique si el número es positivo, negativo o igual a cero. 
  _Muestre un mensaje indicando cuál es el caso. 

  Utiliza una estructura de control de flujo (if, else if, else) para hacer las 
verificaciones. 
  Usa parseFloat() para convertir la entrada del usuario a un número.
*/

const prompt = require("prompt-sync")({ sigint: true });

// Solicita al usuario que ingrese un número y lo convierte a tipo flotante
let numero = parseFloat(prompt("Ingrese un numero: "));

// Condicional para verificar si el número es negativo, positivo o cero
if (numero<0) {
    console.log ("El numero es negativo");
} else if (numero>0){
  console.log ("El numero es positivo");
} else{
  console.log ("El numero ingresado es Cero");
}
