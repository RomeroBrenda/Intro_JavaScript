/*
● Ejercicio 4: Calcular descuento por cantidad 
Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la 
cantidad.
*/

const prompt = require('prompt-sync')();

let cantidad = parseInt(prompt("Ingrese la cantidad de productos que compró: "));

let precios = [];
for (let contadorCantidad = 1; contadorCantidad <= cantidad; contadorCantidad++) {
  let precio = parseFloat(prompt(`Ingrese el precio del producto ${contadorCantidad}: `));
  precios.push(precio);
}

const calculoPrecio = (cantidad, precios) => {
  let descuento = 0;
  if (cantidad >= 50) {
    descuento = 0.50;
  } else if (cantidad >= 25 && cantidad < 50) {
    descuento = 0.35;
  } else if (cantidad >= 10 && cantidad < 25) {
    descuento = 0.20;
  } else if (cantidad >= 5 && cantidad < 10) {
    descuento = 0.10;
  } else {
    descuento = 0;
  }

  let subtotal = 0;
  for (let suma = 0; suma < precios.length; suma++) {
    subtotal += precios[suma];
  }

  let totalConDescuento = subtotal * (1 - descuento);
  return totalConDescuento;
}

let totalFinal = calculoPrecio(cantidad, precios);
console.log(`El total a pagar con descuento es: $${totalFinal.toFixed(2)}`);


