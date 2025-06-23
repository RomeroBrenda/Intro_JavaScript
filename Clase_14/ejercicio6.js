/*
● Ejercicio 6: El deportista 
Para este ejercicio deberán definir un objeto literal “deportista”, con los 
siguientes atributos: nombre, energía, experiencia. 
Ademas queremos poder pedirle al deportista que entrene. Para esto, 
nuestro trabajo va a ser realizar una función “entrenarHoras.” 

La función entrenarHoras tiene las siguientes tres características: 
✔ Recibe por parámetro la cantidad de horas. 
✔ Resta a su energía (this.energia) la cantidad de horas x 5. 
✔ Incrementa su experiencia (this.experiencia) la cantidad de horas x 2. 
Una vez definida la función, podemos ejecutar el código y ver cómo va 
variando la energía y experiencia del deportista por consola.
*/

const prompt = require('prompt-sync')();

let horas = parseInt(prompt("¿Cuántas horas entrenó el deportista?: "));

let deportista = {
   nombre : "Nombre del deportista",
   energia : 100,
   experiencia : 50,
   entrenarHoras : function(horas) {
    // 'this' hace referencia al objeto donde está definida esta función,
    // En este caso al objeto 'deportista'.

    // Entonces, 'this.energia' accede a la propiedad 'energia' del deportista
    this.energia -= horas * 5;
    
    // Y 'this.experiencia' accede a la propiedad 'experiencia' del deportista
    this.experiencia += horas * 2;
   } 
}

deportista.entrenarHoras(horas);
console.log(`Energía actual: ${deportista.energia}`);
console.log(`Experiencia actual: ${deportista.experiencia}`);



