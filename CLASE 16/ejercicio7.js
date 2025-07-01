/*
● Ejercicio 7: Filtra nombres que empiecen con la letra 'A' 
Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos 
quedarnos solo con los nombres que comiencen con la letra 'A'. 
Por ejemplo, el nombre 'Luis' no debería estar en el resultado porque empieza con 'L'.
*/

// Array original con los nombres
const nombres = ['Ana', 'Luis', 'Andrea', 'María'];
console.log(`Esta es la lista original de nombres:`, nombres);

// Filtramos los nombres que empiezan con la letra "A"
const nombresConA = nombres.filter(nombre => nombre[0] === "A");
// nombre => nombre[0] === 'A' ("queda solo si la primera letra es A").

// Mostramos el resultado
console.log(`A continuacion, los nombres que empiezan con la letra "A:`, nombresConA);


