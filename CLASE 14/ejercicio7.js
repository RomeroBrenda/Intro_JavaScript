/*
● Ejercicio 7: Libros 
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores: 
✔ título: una cadena con el título del libro. 
✔ autor: una cadena con el nombre del autor del libro. 
✔ anioPublicacion: un número con el año de publicación del libro. 

Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
como parámetro y muestre por consola la información de cada libro en el 
formato especificado.
*/

// Definición de dos objetos libro con sus propiedades
let libro1 = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  anioPublicacion: 1967
};

let libro2 = {
  titulo: "El principito",
  autor: "Antoine de Saint-Exupéry",
  anioPublicacion: 1943
};

// Array que contiene los libros
let libros = [libro1, libro2];

// Función que recibe un array de libros y muestra su información
let mostrarLibro = (libros) => {
  for (let indiceLibro = 0; indiceLibro < libros.length; indiceLibro ++) {
    console.log(`Titulo: ${libros[indiceLibro].titulo}`);
    console.log(`Autor: ${libros[indiceLibro].autor}`);
    console.log(`Año de Publicacion: ${libros[indiceLibro].anioPublicacion}`);
    
    // Solo mostrar separador si NO es el último libro
    if (indiceLibro !== libros.length - 1) {
      console.log('\n=== 📖 LIBRO SIGUIENTE 📖 ===\n');
    }
  }
}

// Ejecutamos la funcion para mostrar los libros
mostrarLibro (libros);

