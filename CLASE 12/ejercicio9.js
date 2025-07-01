/*
●	Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos.
Cada día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y cada columna un día.

a)	Lo que nos solicitan es dar el total de gastos en una semana.
b)	La aplicación también tendrá una parte de estadísticas, para esto nos solicitan dar el total de
un día en particular, por ejemplo del día 3.
c)	Por último, es necesario tener el total de gastos realizados en el mes.
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día que más gastos se realizaron.
*/

const prompt = require('prompt-sync')();

// MATRIZ DE GASTOS (4 semanas, 7 días cada una)
let gastos = [
  [1135, 2500,  900, 1600, 2800, 3650, 1100], // Semana 1 (fila 0)
  [1750, 1890, 1900, 1300,  898, 1750, 2800], // Semana 2 (fila 1)
  [1700, 1150, 1690, 1900, 1770, 4500, 2560], // Semana 3 (fila 2)
  [ 800, 1250, 1430, 2100, 1980, 1270,  950]  // Semana 4 (fila 3)
];

// Mostramos opciones al usuario
console.log("¿Qué querés consultar?");
console.log("1) Total de una semana");
console.log("2) Total de un día");
console.log("3) Total del mes");
console.log("4) Semana y día con más gastos");

let opcion = parseInt(prompt("Elegí una opción (1, 2, 3 o 4): "));

// OPCIÓN 1: Total de una semana
if (opcion === 1) {

    let semana = parseInt(prompt("¿De qué semana querés saber el total de gastos? (1 a 4): "));
    let fila = semana - 1; // Como los índices arrancan en 0, la semana 2 está en la fila 1
    let totalSemana = 0;   // Acumulador para la suma

    for (let dia = 0; dia < gastos[fila].length; dia++) {
        // Usamos += para ir sumando los valores día por día a la variable totalSemana.
        // Es una forma abreviada de escribir: totalSemana = totalSemana + gastos[fila][dia];
        // Sirve para acumular todos los gastos de la semana elegida por el usuario.
        totalSemana += gastos[fila][dia];
    }

    console.log(`El total de los gastos de la semana ${semana} es: ${totalSemana}`);

// OPCIÓN 2: Total de un día
} else if (opcion === 2) {
    let dia = parseInt(prompt("¿De qué día querés saber el total de gastos? (1 a 7): "));
    let columna = dia - 1; 
    let totalDia = 0; // Acumulador para sumar ese día en todas las semanas

    // Recorremos todas las semanas (filas), pero siempre la misma columna (día)
    for (let semana = 0; semana < gastos.length; semana++) {
        totalDia += gastos[semana][columna]; // Sumamos el valor de ese día en cada semana
    }

    console.log(`El total de los gastos del día ${dia} es: ${totalDia}`);

// OPCIÓN 3: Total del mes
} else if (opcion === 3) {
    let totalMes = 0; // Acumulador general para todos los valores de la matriz

    for (let semana = 0; semana < gastos.length; semana++) {
        // Dentro de cada semana, recorremos todos los días (columnas)
        for (let dia = 0; dia < gastos[semana].length; dia++) {
            totalMes += gastos[semana][dia]; // Sumamos cada valor de la matriz
        }
    }

    // IMPORTANTE: daría el mismo resultado si recorremos por columnas y después por filas
    console.log(`El total de gastos del mes es: ${totalMes}`);

// OPCIÓN 4: Semana y día con más gastos
} else if (opcion === 4) {

    // Parte 1: Buscar la semana con más gastos
    let mayorGastoSemana = 0;
    let semanaConMasGasto = 0;

    for (let semana = 0; semana < gastos.length; semana++) {
        let sumaSemana = 0;

        for (let dia = 0; dia < gastos[semana].length; dia++) {
            sumaSemana += gastos[semana][dia];
        }

        // Si la suma de esta semana es mayor que la mayor que teníamos hasta ahora,
        // entonces la actualizamos como la nueva semana con más gastos.
        // Esto nos permite encontrar cuál fue la semana con más gasto de todo el mes.
        if (sumaSemana > mayorGastoSemana) {
            mayorGastoSemana = sumaSemana;
            semanaConMasGasto = semana + 1; // Le sumamos 1 para que diga semana 1 a 4
        }
    }

    // Parte 2: Buscar el día con más gastos
    let mayorGastoDia = 0;
    let diaConMasGasto = 0;

    for (let dia = 0; dia < gastos[0].length; dia++) {
        let sumaDia = 0;

        for (let semana = 0; semana < gastos.length; semana++) {
            sumaDia += gastos[semana][dia];
        }

        if (sumaDia > mayorGastoDia) {
            mayorGastoDia = sumaDia;
            diaConMasGasto = dia + 1; // Le sumamos 1 para que diga día 1 a 7
        }
    }

    console.log(`La semana con más gastos fue la semana ${semanaConMasGasto} con un total de ${mayorGastoSemana}`);
    console.log(`El día con más gastos fue el día ${diaConMasGasto} con un total de ${mayorGastoDia}`);

// OPCIÓN NO VÁLIDA
} else {
    console.log("¡Opción no válida! Tenés que elegir 1, 2, 3 o 4.");
}
