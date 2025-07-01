/*
● Clasificación de palabras según su longitud 
Tienes una lista de palabras en una oración. Debes: 
1. Dividir la oración en palabras individuales. 
2. Clasificar las palabras en dos categorías: 
▪ Cortas (menos de 5 letras) 
▪ Largas (5 letras o más) 
3. Mostrar ambas listas de palabras clasificadas. 
4. La oración es: "JavaScript es un lenguaje poderoso y versátil".
*/

// Oracion original como cadena
let oracion = "JavaScript es un lenguaje poderoso y versátil";

// Dividimos la oración en palabras, separando por espacios
let palabras = oracion.split(" ");

// Arrays vacíos para almacenar las palabras cortas y largas
let cortas = [];
let largas = [];

// Recorremos cada palabra del array 'palabras'
for (let contador = 0; contador < palabras.length; contador++) {

  // Si la longitud de la palabra es menor que 5, es corta
  if (palabras[contador].length < 5) {
    cortas.push(palabras[contador]); // Agregamos palabra al array de cortas
  } else {
    // Si no, la palabra es larga (5 o más letras)
    largas.push(palabras[contador]); // Agregamos palabra al array de largas
  }
}

// Mostramos resultados
console.log("Palabras cortas (menos de 5 letras):", cortas);
console.log("Palabras largas (5 letras o más):", largas);
