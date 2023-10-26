let teclado = require('prompt-sync')();

let quantidadeParaLer = Number(teclado("Informe a quantidade de números que você deseja ler: "));

let total = 0;

let menor = Number.POSITIVE_INFINITY;
let maior = Number.NEGATIVE_INFINITY;

for(let i = 0; i < quantidadeParaLer; i++) {
    let informeOsNumeros = Number(teclado("Informe o " + (i + 1) + "° número: "));

    total += informeOsNumeros;

    if (informeOsNumeros < menor) {
        menor = informeOsNumeros;
    }

    if (informeOsNumeros > maior) {
        maior = informeOsNumeros;
    }
}

let media = total / quantidadeParaLer;

console.log("A média dos números informados é: " + media);
console.log("O menor número é: " + menor);
console.log("O maior número é: " + maior)
