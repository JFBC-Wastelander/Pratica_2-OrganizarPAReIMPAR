let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
let impares = [];
let organizado = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    pares.push(numeros[i]);
  } else {
    impares.push(numeros[i]);
  }
}
organizado = [...pares, ...impares];
console.log(organizado);
