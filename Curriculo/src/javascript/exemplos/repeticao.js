let teclado = require('prompt-sync')();

let numeros = [2, 4, 6, 3, 5, 7];
let contador = 0;

console.log("------------------------------------------------------");

while(contador < numeros.length) {
    console.log(numeros[contador]);
    contador++;
}

console.log("------------------------------------------------------");

contador = 0;

do {
    console.log(numeros[contador]);
    contador++;
} while(contador < numeros.length);

console.log("------------------------------------------------------");

contador = 0;

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[contador]);
    contador++;
}

console.log("------------------------------------------------------");

contador = 0;

for(let numero of numeros) {
    console.log(numero);
}

console.log("------------------------------------------------------");

contador = 0;

for(let numero in numeros) {
    console.log(numero);
}