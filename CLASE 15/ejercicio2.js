/*
● Ejercicio 2: Eliminar al último invitado 
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El 
último invitado no puede asistir. Elimina al último invitado y muestra quién 
fue eliminado y el estado actualizado de la lista.
*/

// Creamos un array con los invitados originales
let invitados = ["Ana", "Juan", "Carlos", "Sofia"];

// Mostramos la lista original de invitados
console.log(`La lista de initados inicial es esta: ${invitados}`);


// Usamos .pop() para eliminar al último invitado del array
// .pop() elimina el último elemento y lo devuelve (lo guarda en una variable si queremos)
let ultimoInvitado = invitados.pop();

// Mostramos quién fue eliminado
console.log(`El invitado que NO podrá asistir es: ${ultimoInvitado}`);

// Mostramos cómo quedó la lista después de eliminar al último
console.log(`La lista de invitados actualizada es la siguiente: ${invitados}`);



