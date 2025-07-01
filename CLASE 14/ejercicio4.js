/*
● Ejercicio 4: Calcular descuento por cantidad 
Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la 
cantidad.
*/

const prompt = require('prompt-sync')();

// Pedimos la cantidad de productos comprados
let cantidad = parseInt(prompt("Ingrese la cantidad de productos que compró: "));

// Creamos un array para almacenar los precios de cada producto
let precios = [];

// Solicitamos al usuario el precio de cada producto y lo guardamos en el array
for (let contadorCantidad = 1; contadorCantidad <= cantidad; contadorCantidad ++) {
  let precio = parseFloat(prompt(`Ingrese el precio del producto ${contadorCantidad}: `));
  precios.push(precio);
}

// Función flecha que calcula el total con descuento según la cantidad
const calculoPrecio = (cantidad, precios) => {
  let descuento = 0;
  
  // Definimos los descuentos según la cantidad
  if (cantidad >= 50) {
    descuento = 0.50; // 50% de descuento
  } else if (cantidad >= 25 && cantidad < 50) {
    descuento = 0.35; // 35% de descuento
  } else if (cantidad >= 10 && cantidad < 25) {
    descuento = 0.20; // 20% de descuento
  } else if (cantidad >= 5 && cantidad < 10) {
    descuento = 0.10; // 10% de descuento
  } else {
    descuento = 0;
  }
  
  // Calculamos el subtotal sumando todos los precios
  let subtotal = 0;
  for (let suma = 0; suma < precios.length; suma ++) {
    subtotal += precios[suma];
  }

  // Aplicamos el descuento al subtotal
  let totalConDescuento = subtotal * (1 - descuento);
  return totalConDescuento;
}

// Calculamos el total final con descuento
let totalFinal = calculoPrecio(cantidad, precios);

// Mostramos el total final
console.log(`El total a pagar con descuento es: $${totalFinal.toFixed(2)}`);


