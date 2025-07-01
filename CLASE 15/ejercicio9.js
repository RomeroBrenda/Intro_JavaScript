/*
● Ejercicio 9: Eliminar espacios innecesarios 
Tienes la siguiente cadena con espacios adicionales  
"    Hola, mundo!    " 
Elimina los espacios al inicio y al final y muestra la cadena resultante. 
*/

// Cadena con espacios al principio y al final
let cadena = "    Hola, mundo!    ";
console.log(`Cadena Inicial: ${cadena}`);

// Usamos el método .trim() para eliminar los espacios del inicio y del final
// No elimina los espacios que están entre las palabras
let sinEspacios = cadena.trim();

// Mostramos la cadena ya limpia
console.log(`Cadena Resultante: ${sinEspacios}`);
 
 