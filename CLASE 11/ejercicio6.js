/*
_ Crea un programa que le pida al usuario un número y luego imprima
su tabla de multiplicar desde el 1 hasta el 10.
_ Usa un ciclo for.
*/

const prompt = require('prompt-sync')()

// Solicitamos al usuario que ingrese un numero 
let numero = parseInt(prompt("Ingrese un numero para ver su tabla de multiplicar: "));

console.log(`Tabla de multiplicar del numero ${numero}: `);

// let multiplicador = 1 → Empiezo a contar desde el número 1.
// multiplicador <= 10 → Sigo contando hasta llegar al número 10 (no paso del 10).
// multiplicador ++ → En cada vuelta, le sumo 1 al número para seguir contando (1, 2, 3, 4...)

for (let multiplicador = 1; multiplicador <= 10; multiplicador ++) {
    let resultado = numero * multiplicador;
    console.log(`${numero}x${multiplicador}= ${resultado}`);
}


