/*
● Ejercicio 5: Buscar la posición de un elemento 
Tienes una lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. Encuentra y 
muestra el índice del color "Azul" en la lista.
*/

// Creamos un array con una lista de colores
let colores = ["Rojo", "Verde", "Azul", "Amarillo"];

// Utilizamos el método indexOf() para buscar la posición del color "Azul"
// Este método devuelve el índice (posición) del primer elemento que coincida exactamente.
let indice = colores.indexOf("Azul");

// Mostramos el resultado
console.log(`La posicion del color "Azul" dentro del array es: ${indice}`);
