/*
● Ejercicio 3: Agregar y eliminar a la fila de mascotas 
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", 
"Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el 
"Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y 
muéstrala. Finalmente, muestra la lista actualizada.
*/

let fila = ["Perro", "Gato", "Conejo"];
console.log(`Esta es la fila de mascotas inicial por atender: ${fila}`);

fila.unshift("Hamster");
let atendido = fila.shift();

console.log(`Mascota atendida: ${atendido}`);
console.log(`Lista de espera actual: ${fila}`);



