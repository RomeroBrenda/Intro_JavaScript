/*
● Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra 
Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. 
Queremos transformarlas para que cada palabra tenga un prefijo "¡" y un 
sufijo "!". 
Por ejemplo, la palabra "hola" se debería convertir en "¡hola!".
*/

// Array original con las palabras que queremos modificar
const palabras = ['hola', 'mundo', 'javascript'];

// .map() para crear un nuevo array con prefijo y sufijo en cada palabra
const palabrasModificadas = palabras.map(palabra => `¡${palabra}!`);

// Mostramos resultado
console.log(palabrasModificadas);

