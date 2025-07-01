/*
_ Declara dos variables con valores iniciales y luego intercambia sus valores.
_ Muestra los valores antes y después del intercambio en la consola.

_ Para intercambiar valores puedes usar varios métodos:
(usando una variable temporal, aritmética o asignación simultanea).
*/

// Declaracion de variables iniciales
let miNombre = "brenda";
let miApellido = "romero";

// Mostramos los valores antes del intercambio
console.log(`ANTES: la variable "miNombre" contiene el valor de ${miNombre}, y la variable miApellido contiene el valor de ${miApellido}.`);

// Intercambiamos los valores
// Usamos asignacion simultanea
[miNombre, miApellido] = [miApellido, miNombre]; 

// Mostramos los valores despues del intercambio
console.log(`DESPUES: la variable miNombre contiene el valor de ${miNombre}, y la variable miApellido contiene el valor de ${miApellido}.`);

