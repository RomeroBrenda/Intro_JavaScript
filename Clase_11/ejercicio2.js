/*
SEMAFORO INTELIGENTE:
_ Escribe un programa que le pida al usuario ingresar un color del semáforo: rojo, amarillo o verde.
_ Dependiendo del color ingresado, el programa debe imprimir un mensaje con la acción correspondiente:
•	Rojo: "Alto, no puedes avanzar."
•	Amarillo: "Precaución, prepárate para avanzar."
•	Verde: "Avanza con seguridad."
_ Si el usuario ingresa un color inválido, el programa debe mostrar un mensaje:
 "Color no reconocido, ingresa rojo, amarillo o verde."
_ Utiliza un switch para resolver este ejercicio.
*/

const prompt = require('prompt-sync')()

let color = prompt("Ingresa un color del semaforo (rojo, amarillo o verde): ");

switch (color) {
    case "rojo":
        console.log("Alto, no puedes avanzar!");
        break;
    case "amarillo":
        console.log("Precaucion, preparate para avanzar!");
        break;
    case "verde":
        console.log("Avanza con seguridad!");
        break;
    default:
        console.log("Color no reconocido, ingresa rojo, amarillo o verde!");
        break;            
}
