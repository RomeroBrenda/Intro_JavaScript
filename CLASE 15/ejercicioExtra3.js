/*
● Simulador de una cola de atención al cliente 
Simula una cola de atención al cliente donde los clientes llegan y son 
atendidos uno por uno. Tienes una lista inicial de clientes en espera y un 
bucle que los atiende de a uno. Realiza lo siguiente: 
1. Mientras haya clientes en la cola, atiende a cada uno y muéstralo por 
consola. 
2. Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un 
mensaje especial. 
3. Al final, muestra cuántos clientes fueron atendidos en total. 
Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].
*/

// Lista inicial de clientes en espera
let cola = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];

// Contador para saber cuántos clientes fueron atendidos
let clientesAtendidos = 0;

// Mientras la cola tenga al menos un cliente (cola.length > 0), seguir atendiendo.
while (cola.length > 0) { 

    // Sacamos (atendemos) al primer cliente de la cola con shift()
    let cliente = cola.shift();
    
    // Si el cliente es VIP, mostrar mensaje especial
    if (cliente === "VIP") {
        console.log(`Atendiendo a CLIENTE PRIORITARIO: ${cliente}`);
    } else {
        // Para clientes normales, mostrar mensaje estándar
        console.log(`Atendiendo a cliente: ${cliente}`);
    }
    
    // Incrementamos el contador de clientes atendidos
    clientesAtendidos ++;
}

// Mostramos la cantidad total de clientes atendidos
console.log(`Total de clientes atendidos: ${clientesAtendidos}`);
