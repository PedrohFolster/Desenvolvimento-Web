let teclado = require('prompt-sync')();

let array = [];

for (let i = 0; i < 10; i++) {
    let nome = teclado("Informe o " + (i + 1) + "° nome: ");
    array.push(nome);
}

console.log(array);

console.log("--------------------------------------------");
console.log("Ordem inversa: ");

let inversa = "";

for (let i = array.length - 1; i >= 0; i--) {
    inversa += array[i] + " ";
}

console.log(inversa);
