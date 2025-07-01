/*
_ Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. 
_ Luego, pide al usuario que adivine el número hasta 3 intentos. 
_ Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación 
y detén los intentos restantes.
_ Si no acierta después de los 3 intentos, muestra el número secreto. 
_ Usa un for para resolver este ejercicio.
*/

const prompt = require('prompt-sync')()

// Generamos un numero aleatorio del 1 al 10

// - Math.random() da un número decimal entre 0 (incluido) y 1 (excluido)
// - Al multiplicar por 10, el rango pasa a ser entre 0 y casi 10 (¡Nunca da 10 exacto!)
// 0 <= Math.random() * 10 < 10

// - Math.floor redondea hacia abajo, así que da un número entero entre 0 y 9.
// - Sumamos 1 para que el rango o resultado final sea entre 1 y 10. 
// Math.floor(Math.random() * 10) + 1

const numeroSecreto = Math.floor(Math.random() * 10) + 1;

let acertado = false; // Controlamos si se acerto el numero

// Ciclo para los 3 intentos
for (let intento = 1; intento <= 3; intento++) {
    let respuesta = parseInt(prompt(`Intento ${intento}: Adivina el número (entre 1 y 10): `));

    if (respuesta === numeroSecreto) {
        console.log(`¡Muy bien! Adivinaste el número en el intento ${intento}`);
        acertado = true;
        break; // Salimos del ciclo si acerto
    } else {
        console.log("Número Incorrecto!");
    }
}

// Si no acerto en los 3 intentos, mostramos el numero secreto
if (!acertado) {
    console.log(`Lo siento! El número secreto era: ${numeroSecreto}`);
}
