/*
● Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista) 
Crea una función declarada llamada calcularAreaTriangulo que reciba dos 
parámetros: la base y la altura de un triángulo. La función debe devolver el 
área del triángulo. 
Usa la formula= base x altura / 2
*/

const prompt = require('prompt-sync')()

// Solicitamos al usuario la base y la altura del triángulo
let base = parseFloat(prompt("Ingrese la base del triangulo: "));
let altura = parseFloat(prompt("Ingrese la altura del triangulo: ")); 

// Llamamos a la función para calcular el área y almacenamos el resultado
let resultado = calcularAreaTriangulo(base,altura); 

// Funcion que calcula el area de un triangulo
function calcularAreaTriangulo (base, altura) {
    let area = (base * altura) / 2;
    return area;
}

// Mostramos el resultado en consola
console.log(`El Area del Triangulo es: ${resultado}`);


