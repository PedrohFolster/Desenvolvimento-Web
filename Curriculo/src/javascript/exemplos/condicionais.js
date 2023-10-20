let teclado = require('prompt-sync')();

let numero = Number(teclado("Insira um número: "));

if(numero % 2 == 0) {
    console.log("O número " + numero + " é par!")
} else {
    console.log("O número " + numero + " é ímpar!")
}
switch (numero) {
    case 1: {
        console.log("Domingo");
        break;
    }
    case 2: {
        console.log("Segunda-feira");
        break;
    }
    case 3: {
        console.log("Terça-feira");
        break;
    }
    case 4: {
        console.log("Quarta-feira");
        break;
    }
    case 5: {
        console.log("Quinta-feira");
        break;
    }
    case 6: {
        console.log("Sexta-feira");
        break;
    }
    case 7: {
        console.log("Sábado");
        break;
    }
    default: {
        console.log("Número inválido. Insira um valor de 1 a 7.");
        break;
    }
}



console.log("Número: " + numero)