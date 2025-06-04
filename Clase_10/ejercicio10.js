/*
_ Escribe un programa que calcule el precio final de un producto después de aplicar un descuento.
_ Pide al usuario que ingrese el precio original y el porcentaje de descuento, y muestra el precio final.
_La fórmula puede representarse asi:
let montoDescuento = precioOriginal * (porcentajeDescuento / 100);
*/

const prompt = require('prompt-sync')()

let precioOriginal = parseFloat(prompt("Ingrese el precio original del producto: "));
let porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));

let precioFinal = precioOriginal * (porcentajeDescuento / 100);
console.log(`El precio final del producto con el descuento incluido es de $${precioFinal}`);
