/*
● Ejercicio 8: Extraer una parte de una frase 
Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte 
"gatos" utilizando el método adecuado. 
*/

let frase = "Los gatos son geniales";
console.log(`Frase Inicial: ${frase}`);

let palabra = frase.slice(4,9);
console.log(`Palabra Extraida: ${palabra}`);



