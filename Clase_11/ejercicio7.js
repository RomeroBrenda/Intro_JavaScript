/*
_ Crea un programa que le pida al usuario dos números y una operación matemática
a realizar: suma, resta, multiplicación o división.
_ Según la operación ingresada, el programa deberá calcular y mostrar el resultado.
_ Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error.
_ Usa switch para resolverlo.
*/

const prompt = require('prompt-sync')()

let numero1 = parseFloat(prompt("Ingrese el primer numero: "));
let numero2 = parseFloat(prompt("Ingrese el segundo numero: "));
let operacion = prompt("Ingrese el tipo de operacion que quiere realizar: ");

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
        console.log(`El resultado de la division es: ${numero1 / numero2}`);
        break;
    default:
        console.log("ERROR: La operacion no ha sido reconocida!");
        break;                
}
