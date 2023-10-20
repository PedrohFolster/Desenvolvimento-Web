let teclado = require('prompt-sync')();

let numerosNegativos = 0;

for(let i = 0; i < 10; i++) {
    let numero = Number(teclado("Informe o " + (i + 1) + "° numero: "));

    if(numero < 0) {
        numerosNegativos++;
    }
}

console.log(numerosNegativos + " numero(s) são negativos!")
