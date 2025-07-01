/*
_ Crea un programa que le pida al usuario dos números y una operación matemática
a realizar: suma, resta, multiplicación o división.
_ Según la operación ingresada, el programa deberá calcular y mostrar el resultado.
_ Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error.
_ Usa switch para resolverlo.
*/

const prompt = require('prompt-sync')()

// Solicitamos al usuario los 2 numeros
let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));

// Solicitamos la operacion a realizar
let operacion = prompt("Ingrese el tipo de operacion que quiere realizar (suma, resta, multiplicacion , division): ").toLowerCase;

// Evaluamos la operacion con "switch"
switch (operacion) {
    case "suma":
       console.log(`El resultado de la suma es: ${numero1 + numero2}`);
        break;
    case "multiplicacion":
        console.log(`El resultado de la multiplicacion es: ${numero1 * numero2}`);
        break;
    case "resta":
        console.log(`El resultado de la resta es: ${numero1 - numero2}`);
        break;
    case "division":
        // Controlamos división por cero
        if (numero2 === 0) {
            console.log("ERROR: No se puede dividir por cero.");
        } else {
            console.log(`El resultado de la división es: ${numero1 / numero2}`);
        }
        break;
    default:
        console.log("ERROR: La operacion no ha sido reconocida! Porfavor, ingrese suma, resta, multiplicacion o division");
        break;                
}
