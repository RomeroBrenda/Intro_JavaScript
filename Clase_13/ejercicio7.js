/*
● Ejercicio 7: Mensaje según la hora 
Declara una variable global llamada horaActual (puedes asignarle un valor fijo).
Crea una función declarada llamada mostrarSaludo que imprima 
"Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o 
"Buenas noches" en cualquier otro caso.
*/

const prompt = require('prompt-sync')()

let horaActual = parseFloat(prompt("Ingresa la hora en formato 24hs (de 0 a 23): "));

if (horaActual < 0 || horaActual > 23) {
    console.log("Error: La hora debe estar entre 0 y 23.");
    process.exit(); // Termina el programa inmediatamente
                    // Cuando hay un error o condición que impide seguir
}

function mostrarSaludo () {
    if (horaActual <= 12) {
        console.log("¡Buenos Dias!");
    } else if (horaActual > 12 && horaActual <= 18) {
        console.log("¡Buenas Tardes!");
    } else {
        console.log("¡Buenas Noches!");
    }
}

mostrarSaludo();
