let frutas = ["Manzana", "Banana"];
console.log(frutas.length);
let primero = frutas[0];
let ultimo = frutas[frutas.length - 1]
console.log(ultimo)
frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice);
  });
  let nuevaLongitud = frutas.push("Naranja"); // Añade "Naranja" al final
// ["Manzana", "Banana", "Naranja"]

let ultimo2 = frutas.pop(); // Elimina "Naranja" del final
// ["Manzana", "Banana"]
console.log(frutas,frutas.length)
let nuevaLongitud2 = frutas.unshift("Fresa"); // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]
console.log(frutas)
frutas.push("Fresa");
// ["Manzana", "Banana", "Fresa"]
let primero2= frutas.shift(); // Elimina "Fresa" del inicio
// ["Manzana", "Banana"]
console.log(primero2)

//let pos = frutas.indexOf("Banana"); // (pos) es la posición para abreviar
// 1
