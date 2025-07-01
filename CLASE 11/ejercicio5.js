/*
_ Escribe un programa que le pida al usuario dos números enteros (inicio y fin). 
_ El programa debe mostrar todos los números pares que se encuentran entre esos
dos valores, incluyendo los límites si son pares. 
_ Utiliza un ciclo for para recorrer los números entre el inicio y el fin. 
_ Si el número inicial es mayor que el final, el programa debe mostrar un mensaje
indicando que los valores son inválidos.
*/

const prompt = require('prompt-sync')()

// Solicitamos al usuario el número de inicio y fin, y convertimos a enteros
let inicio = parseInt(prompt("Ingrese el numero de inicio: "));
let fin = parseInt(prompt("Ingrese el numero de fin: "));

// let valorActual = inicio → Empiezo a contar desde el valor que ingresó el usuario como “inicio”.
// valorActual <= fin → Sigo contando hasta llegar al valor que ingresó el usuario como “fin” (no paso de ese número).
// valorActual++ → En cada vuelta, le sumo 1 al número para seguir contando.

if (inicio > fin) {
    console.log("Los valores son invalidos! El numero de inicio es mayor que el numoero de fin.");
} else {
    console.log(`Numeros pares entre ${inicio} y ${fin}: `);
    for (let valorActual = inicio; valorActual <= fin; valorActual++) {
        // Si el numero es par, lo mostramos en consola
        if (valorActual % 2 === 0) {
            console.log(valorActual);
        }
    }
}
