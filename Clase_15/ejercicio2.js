/*
● Ejercicio 2: Eliminar al último invitado 
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El 
último invitado no puede asistir. Elimina al último invitado y muestra quién 
fue eliminado y el estado actualizado de la lista.
*/

let invitados = ["Ana", "Juan", "Carlos", "Sofia"];
console.log(`La lista de initados inicial es esta: ${invitados}`);

let ultimoInvitado = invitados.pop();
console.log(`La lista de initados actualizada es la siguiente: ${invitados}`);


