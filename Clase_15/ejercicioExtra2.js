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

let oracion = "JavaScript es un lenguaje poderoso y versátil";
let palabras = oracion.split(" ");

let cortas = [];
let largas = [];

for (let contador = 0; contador < palabras.length; contador++) {
  if (palabras[contador].length < 5) {
    cortas.push(palabras[contador]);
  } else {
    largas.push(palabras[contador]);
  }
}

console.log("Palabras cortas (menos de 5 letras):", cortas);
console.log("Palabras largas (5 letras o más):", largas);
