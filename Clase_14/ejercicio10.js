/*
● Ejercicio 10: Flores Favoritas 
Escribe un programa en JavaScript para contar cuántas veces el usuario 
menciona sus flores favoritas. Realiza las siguientes acciones: 

1. Inicializa un array vacío para almacenar las flores favoritas. 
2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y 
agrega cada una al array manualmente (sin usar métodos como push). 
3. Pregunta al usuario por una flor específica y verifica si está entre sus 
favoritas. 
4. Muestra por consola cuántas de las flores favoritas se mencionaron (esto 
debe hacerse manualmente).
*/

const prompt = require('prompt-sync')();

let floresFavoritas = [];

floresFavoritas[0] = prompt("Ingrese su primera flor favorita: ");
floresFavoritas[1] = prompt("Ingrese su segunda flor favorita: ");
floresFavoritas[2] = prompt("Ingrese su tercer flor favorita: ");

let florBuscada = prompt("Ingrese una flor para verificar si esta dentro de sus favoritas: ");
let contador = 0;
for (contadorFlor = 0; contadorFlor < floresFavoritas.length; contadorFlor ++) {
    if (floresFavoritas[contadorFlor].toLowerCase() === florBuscada.toLowerCase()) {
        contador ++;
        // contador++ significa "contador = contador + 1"
        // Se usa para aumentar en 1 el número de veces que encontramos la flor buscada
        // Cada vez que encontramos una coincidencia, sumamos 1 al contador
    }
}

if (contador > 0) {
    console.log(`La flor ${florBuscada} fue mencionada ${contador} vez/veces entre tus favoritas!`);
    } else {
        console.log(`La flor ${florBuscada} no esta entre tus favoritas!`);
        
    }
    
