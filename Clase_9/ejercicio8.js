/*

Ejercicio 8:  
Pide al usuario que ingrese las longitudes de los tres lados de un 
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
escaleno. (Investiga sobre los triángulos para determinar la formula) 

Tipos de triangulo:
_Equilátero: los tres lados son iguales.
_Isósceles: dos lados son iguales.
_Escaleno: todos los lados son diferentes.

*/

const prompt = require('prompt-sync')();

//pedimos las longitudes de los 3 lados
let lado1 = parseFloat(prompt("Ingrese la longitud del primer lado: "));
let lado2 = parseFloat(prompt("Ingrese la longitud del segundo lado: "));
let lado3 = parseFloat(prompt("Ingrese la longitud del tercer lado: "));

//determinamos el tipo de triangulo 
//si los 3 lados son iguales, es un triangulo equilatero
if(lado1 === lado2 && lado2 === lado3){
    console.log("El triangulo es Equilatero");

//si solo dos lados son iguales, es un triángulo isósceles
//usamos || (OR) porque puede haber tres combinaciones posibles de lados iguales    
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triangulo es Isosceles");

//si todos los lados son diferentes, es un triángulo escaleno   
} else {
    console.log("El triangulo es Escaleno");
}