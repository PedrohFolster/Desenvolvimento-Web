let teclado = require('prompt-sync')();

let numerosPares = 0;

for(let i = 0; i < 10; i++) {
    let numero = Number(teclado("Informe o " + (i + 1) + "° numero: "));

    if(numero % 2 == 0) {
        numerosPares++;
    }
}

console.log(numerosPares + " numero(s) são pares!")
