let teclado = require('prompt-sync')();

let array = [];
let somaNotas = 0;

for (let i = 0; i < 10; i++) {
    let informeNotas = Number(teclado("Informe a nota do " + (i + 1) + "° aluno: "));
    array.push(informeNotas); // Adicionar a nota ao array

    somaNotas += informeNotas;
}

let media = somaNotas / array.length;

console.log("--------------------------------------------");

for (let i = 0; i < array.length; i++) {
    if (array[i] < media) {
        console.log(`Aluno ${i + 1}: Nota ${array[i]} - Reprovado`);
    } else {
        console.log(`Aluno ${i + 1}: Nota ${array[i]} - Aprovado`);
    }
}

console.log("--------------------------------------------");
console.log(`Média: ${media}`);
