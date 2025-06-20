/*
● Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista) 
Crea una función declarada llamada calcularAreaTriangulo que reciba dos 
parámetros: la base y la altura de un triángulo. La función debe devolver el 
área del triángulo. 
Usa la formula= base x altura / 2
*/

const prompt = require('prompt-sync')()

let base = parseFloat(prompt("Ingrese la base del triangulo: "));
let altura = parseFloat(prompt("Ingrese la altura del triangulo: ")); 
let resultado = calcularAreaTriangulo(base,altura); 

function calcularAreaTriangulo (base, altura) {
    let area = (base * altura) / 2;
    return area;
}

console.log(`El Area del Triangulo es: ${resultado}`);


