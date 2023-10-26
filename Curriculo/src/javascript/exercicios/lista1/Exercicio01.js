let teclado = require('prompt-sync')();

let quantidadeNotas = 2;
let totalNotas = 0;

for (let i = 0; i < quantidadeNotas; i++) {
    let avaliacao = Number(teclado("Informe a nota da sua " + (i + 1) + "ª avaliação: "));
    totalNotas += avaliacao;
}

let mediaDasNotas = totalNotas / quantidadeNotas;

if(mediaDasNotas >= 7) {
    console.log("Aprovado!")
} else {
    console.log("Reprovado!")
}

console.log(mediaDasNotas);
