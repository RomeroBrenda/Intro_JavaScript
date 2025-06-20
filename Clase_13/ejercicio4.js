/*
Ejercicio 4: Número par o impar 
Crea una función declarada llamada esPar que reciba un número y devuelva 
"Es par" si el número es par o "Es impar" si el número es impar. Usa una 
variable local para guardar el resultado. 
*/

const prompt = require('prompt-sync')()

let numero = parseInt (prompt("Ingrese un numero para ver si es par o impar: "));

function esPar (numero) {
    let resultado;
    if (numero % 2 === 0) {
        resultado = "Es par";
    } else {
        resultado = "Es Impar";
    }
    return resultado;
}

console.log(esPar(numero));