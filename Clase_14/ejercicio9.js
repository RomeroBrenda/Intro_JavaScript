/*
● Ejercicio 9: Última aparición de un modelo de auto 
En este ejercicio, trabajaremos con una lista de modelos de autos. 
Implementa una función llamada ultimaAparicionModeloAuto(modelo) que 
encuentre y muestre la última posición en la lista donde aparece el modelo 
específico de auto dado por modelo. 

✔ Utiliza un array llamado modelosAutos que contiene varios modelos de 
autos, algunos repetidos para demostrar la funcionalidad. 

✔ Implementa la función ultimaAparicionModeloAuto(modelo), que toma 
modelo como parámetro (un string). 
✔ Debes recorrer el array de manera manual para encontrar la última 
aparición del modelo. 
✔ Si el modelo se encuentra en el array, la función debe imprimir por 
consola la posición (índice + 1) en la que aparece (considerando que la 
numeración es de 1 a N). 
✔ Si el modelo no está en el array, debe imprimir un mensaje indicando que 
el modelo no está presente.
*/

const prompt = require('prompt-sync')();

let modelosAutos = ["Ford", "Fiat", "Chevrolet", "Ford", "Toyota", "Fiat"];
let modeloIngresado = prompt("Ingrese el modelo que desea buscar: ");

let ultimaAparicionModeloAuto = (modelo) => {
    for (contador = modelosAutos.length - 1; contador >= 0; contador --) {
        if (modelosAutos[contador].toLowerCase() === modelo.toLowerCase()) {
            console.log(`La última aparición de "${modelo}" está en la posición ${contador + 1}.`);
            return;
        }
    }
    console.log(`El modelo "${modelo}" no se encuentra en la lista.`);
}

ultimaAparicionModeloAuto(modeloIngresado);
