/*
● Ejercicio 10: Reemplazar una palabra en una frase 
Tienes la frase "Me gusta el invierno". Cambia la palabra "invierno" por 
"verano" y muestra la frase actualizada.
*/

// Declaramos la frase original
let frase = "Me gusta el invierno";
console.log(`Frase Inicial: ${frase}`);


// Usamos .replace() para cambiar "invierno" por "verano"
// Este método reemplaza solo la primera coincidencia del texto indicado.
let cambio = frase.replace(`invierno`, `verano`);

// Mostramos la nueva frase con la palabra modificada
console.log(`Frase Actualizada: ${cambio}`);


