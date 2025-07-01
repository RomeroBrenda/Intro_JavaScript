/*
● Ejercicio 7: Verificar si una lista contiene un elemento 
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si 
"Sushi" está en la lista y muestra un mensaje que confirme si está o no. 
*/

// Creamos una lista de comidas
let comidas = ["Pizza", "Hamburguesa", "Tacos"];


// Usamos el método .includes() para verificar si "Sushi" está en la lista
// Este método devuelve true si el elemento existe, o false si no está.
let estaONo = comidas.includes("Sushi");

// Operador ternario
console.log(estaONo ? "Si, Sushi esta en la lista!" : "No, Sushi no esta en la lista!");
