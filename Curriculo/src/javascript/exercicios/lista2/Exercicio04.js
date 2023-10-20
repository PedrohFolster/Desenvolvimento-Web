let teclado = require('prompt-sync')();

let frase = teclado("Informe uma frase: ");

let palavra = teclado("Informe uma palavra: ");

console.log(`Frase: ${frase}`);
console.log(`Palavra: ${palavra}`);

let separarFrase = frase.split(" ");

let contador = 0;

for (let i = 0; i < separarFrase.length; i++) {
    if (separarFrase[i] == palavra) {
        contador++;
    }
}

console.log(`A palavra: ${palavra} apareceu ${contador} vezes na frase!`);