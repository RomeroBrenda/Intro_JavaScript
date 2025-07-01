/*
_ Crea un programa que le pida al usuario un número positivo.
_ El programa deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola.
_ Usa un ciclo for para realizar la tarea.
*/

const prompt = require('prompt-sync')()

// Solicitamos al usuario un numero positivo
let numero = parseInt(prompt("Ingrese un numero positivo: "));

// let valor = 1 → Empiezo a contar desde 1.
// valor <= numero → Sigo contando hasta llegar al número que ingresó el usuario.
// valor++ → En cada vuelta le sumo 1 para seguir contando 

if (numero>0) {
    for (let valor = 1; valor <= numero; valor ++) {
        console.log(valor);
    }
} else {
    console.log("El numero ingresado no es valido! Por favor, ingrese un numero positivo.");
}

