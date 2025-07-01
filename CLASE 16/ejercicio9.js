/*
● Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras 
Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. 
Queremos saber cuántas letras hay en total entre todas las palabras. 
Por ejemplo, 'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. 
La suma total debería ser 15.
*/

// Array con las palabras
const palabras = ['sol', 'luna', 'estrella'];
console.log('Array original de palabras:', palabras);

// Inicializamos una variable para acumular la cantidad total de letras
let totalLetras = 0;

// Recorremos cada palabra del array
palabras.forEach(palabra => {

    // Obtenemos la cantidad de letras de la palabra actual
    const cantidadLetras = palabra.length;

    // Mostramos cuántas letras tiene la palabra
    console.log(`La palabra ${palabra} tiene: ${cantidadLetras} letras`);

    // Mostramos cuántas letras tiene la palabra
    totalLetras += cantidadLetras;
});

// Mostramos la suma total de letras de todas las palabras
console.log(`La suma del total de las letras de cad apalabra del array es: ${totalLetras}`);

