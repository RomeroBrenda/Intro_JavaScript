/*
_ Escribe un programa que le pida al usuario un número entero positivo y muestre
todos los múltiplos de ese número entre 1 y 100. 
_ Utiliza un ciclo for para resolverlo.
*/

const prompt = require('prompt-sync')()

// Solicitamos un numero entero positivo
let numero = parseInt(prompt("Ingrese un numero entero positivo: "));

// Verificamos si el número es válido (positivo)
if (numero > 0) {
    console.log(`A continuación, los múltiplos del 1 al 100 del número ${numero}:`);

    
// let actual = 1 → Empiezo a contar desde el número 1.
// actual <= 100 → Sigo contando hasta llegar al número 100 (no paso de 100).
// actual++ → En cada vuelta, le sumo 1 al número para seguir contando hacia arriba (1, 2, 3, 4...).

    for (let actual = 1; actual <= 100; actual++) {

// Verificamos si el número actual es múltiplo del ingresado
        if (actual % numero === 0) {
            console.log(actual);
        }
    }
} else {
    console.log("Número no válido. Ingrese un número entero positivo.");
}

