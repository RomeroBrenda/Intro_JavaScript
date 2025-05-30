/*
Ejercicio 3: 
Declara dos variables booleanas condicion1 y condicion2. Pide al 
usuario que ingrese dos valores booleanos (true o false) y muestra el 
resultado de diversas combinaciones lógicas.

*/

const prompt = require('prompt-sync')();

//pedimos al usuario que ingrese dos valores booleanos como texto (true o false)
let input1=prompt("Ingrese el primer booleano (true/false): ");
let input2=prompt("Ingrese el primer booleano (true/false): ");

//convierte los strings a booleanos reales (true o false)
//si el texto ingresado es exactamente "true", se convierte en true. Si no, en false.
let condicion1 = (input1 === "true");
let condicion2 = (input2 === "true");

//mostramos resultado de las combinaciones logicas en la consola
//AND (&&)= solo da "true" si ambas condiciones son true
console.log ("condicion1 AND condicion2: " + (condicion1 && condicion2));

//OR (||)= da true si al menos una de las dos condiciones es true
console.log ("condicion1 OR condicion2: " + (condicion1 || condicion2));

//NOT (!)= invierte el valor. Si es true, da false; si es false, da true
console.log ("NOT condicion1: " + !condicion1);
console.log ("NOT condicion2: " + !condicion2);
