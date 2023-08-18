let teclado = require('prompt-sync')();

let array = [];

for(let i = 0; i < 10; i++) {
    let numero = teclado("Informe o " + (i + 1) + "° número: ");
    array.push(numero);
}

let maisUm = teclado("Informe mais um número: ");

let procura = array.indexOf(maisUm);

if(procura != -1) {
    console.log(`O número ${maisUm} foi encontrado no índice ${procura}.`);
} else {
    console.log(`O número ${maisUm} não foi encontrado no array.`);
}