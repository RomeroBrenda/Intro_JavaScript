/*
● Ejercicio 9: Eliminar espacios innecesarios 
Tienes la siguiente cadena con espacios adicionales  
"    Hola, mundo!    " 
Elimina los espacios al inicio y al final y muestra la cadena resultante. 
*/
 let cadena = "    Hola, mundo!    ";
 console.log(`Cadena Inicial: ${cadena}`);
 
 let sinEspacios = cadena.trim();
 console.log(`Cadena Resultante: ${sinEspacios}`);
 
 