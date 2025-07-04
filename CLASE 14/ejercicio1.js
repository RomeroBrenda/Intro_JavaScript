/*
● Ejercicio 1: Calcular el precio final con IVA 
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una 
función flecha para calcular el precio final. 
*/

const prompt = require('prompt-sync')()

// Solicitamos al usuario el precio del producto y wl porcwntaje de IVA
let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let iva = parseFloat(prompt("Ingrese el porcentaje de IVA: "));

// Función flecha que calcula el precio final incluyendo el IVA
const calculoPrecioFinal = (precio, iva) => precio + (precio * iva / 100);

// Calculamos el precio final usando la función
let precioFinal = calculoPrecioFinal (precio, iva);

console.log(`El precio final con el IVA incluido es: $${precioFinal.toFixed(2)}`);
// Usamos .toFixed(2) para redondear el resultado a 2 decimales,
// Ya que los precios normalmente se muestran con dos cifras después del punto.
// Por ejemplo, si el resultado es 241.9879, se mostrará como 241.99
