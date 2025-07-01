/*
● Ejercicio 8: Extraer una parte de una frase 
Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte 
"gatos" utilizando el método adecuado. 
*/

// Guardamos la frase completa en una variable
let frase = "Los gatos son geniales";
console.log(`Frase Inicial: ${frase}`);


// Usamos .slice(4, 9) para extraer desde el carácter en posición 4 hasta el 8 (el 9 no se incluye)
// Los índices empiezan en 0, por eso la G de "gatos" está en la posición 4
let palabra = frase.slice(4,9);

// Mostramos el resultado en consola
console.log(`Palabra Extraida: ${palabra}`);



