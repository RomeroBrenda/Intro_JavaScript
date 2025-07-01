/*
● Ejercicio 3: Agregar y eliminar a la fila de mascotas 
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", 
"Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el 
"Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y 
muéstrala. Finalmente, muestra la lista actualizada.
*/

// Creamos el array inicial con las mascotas que están esperando
let fila = ["Perro", "Gato", "Conejo"];

// Mostramos la fila original
console.log(`Esta es la fila de mascotas inicial por atender: ${fila}`);

// .unshift("Hamster") agrega al "Hamster" al principio de la lista
// Este método desplaza a todos los demás una posición hacia la derecha
fila.unshift("Hamster");

// .shift() elimina el primer elemento del array (el que llegó primero)
// y lo devuelve, por eso lo guardamos en una variable llamada 'atendi
let atendido = fila.shift();

// Mostramos qué mascota fue atendida (la primera de la fila)
console.log(`Mascota atendida: ${atendido}`);

// Mostramos cómo quedó la fila luego de atender a la primera mascota
console.log(`Lista de espera actual: ${fila}`);



