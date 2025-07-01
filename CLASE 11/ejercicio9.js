/*
_ Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. 
_ El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al final. 
_ Usa un ciclo for para realizar la cuenta regresiva
*/

// let cuenta = 10 → Empiezo contando desde el número 10.
// cuenta >= 0 → Sigo contando hasta llegar al número 0 (no bajo de 0).
// cuenta-- → En cada vuelta, le resto 1 al número para seguir contando hacia abajo (10, 9, 8, 7...).

for (let cuenta = 10; cuenta >= 0; cuenta --) {
    console.log(cuenta);
}

// Mostramos mensaje en consola
console.log("¡Despegue!");

