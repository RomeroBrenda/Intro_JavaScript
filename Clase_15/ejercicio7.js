/*
● Ejercicio 7: Verificar si una lista contiene un elemento 
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si 
"Sushi" está en la lista y muestra un mensaje que confirme si está o no. 
*/

let comidas = ["Pizza", "Hamburguesa", "Tacos"];
let estaONo = comidas.includes("Sushi");
console.log(estaONo ? "Si, Sushi esta en la lista!" : "No, Sushi no esta en la lista!");
// If ternario