/*
● Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
Crea una función expresada llamada calcularFactorial que reciba un número 
y devuelva su factorial. 
Fórmula del factorial:
n! = n x (n-1) x ... x 1
*/

const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingresá un número para calcular su factorial: "));

let calcularFactorial = function(numero) {
    let resultado = 1;
    for (let i = numero; i > 1; i--) {
        resultado *= i; // Es lo mismo que: resultado = resultado * i
    }
    return resultado;
};

let factorial = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${factorial}`);
