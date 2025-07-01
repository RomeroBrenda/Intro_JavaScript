/*
● Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
Crea una función expresada llamada calcularFactorial que reciba un número 
y devuelva su factorial. 
Fórmula del factorial:
n! = n x (n-1) x ... x 1
*/

const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese un número para calcular su factorial
let numero = parseInt(prompt("Ingresá un número para calcular su factorial: "));

// Función expresada que calcula el factorial
let calcularFactorial = function(numero) {
    let resultado = 1; // Inicializamos resultado en 1 porque el factorial de 0 es 1

    /* Recorremos desde el número ingresado hasta 2 (1 no es necesario porque multiplicar
    por 1 no cambia el resultado) */ 
    for (let contador = numero; contador > 1; contador --) {
        resultado *= contador; // Es lo mismo que: resultado = resultado * contador
    }
    return resultado; // Devolvemos el resultado final
};

// LLamamos a la funcion y guardamos el resultado
let factorial = calcularFactorial(numero);

// Mostramos el resultado
console.log(`El factorial de ${numero} es: ${factorial}`);
