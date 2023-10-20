let teclado = require('prompt-sync')();

let quantidadeTimes = 2;

let nomeTimeUm = teclado("Informe o nome do time UM: ");

let nomeTimeDois = teclado("Informe o nome do time DOIS: ");

    let golsTimeUm = Number(teclado("Quantos gols o 1° o time marcou? "))

    let golsTimeDois = Number(teclado("Quantos gols o 2° o time marcou? "))

if(golsTimeUm > golsTimeDois) {
    console.log("O time " + nomeTimeUm + " ganhou com " + golsTimeUm + " gols!");
} else if(golsTimeDois > golsTimeUm) {
    console.log("O time " + nomeTimeDois + " ganhou com " + golsTimeDois + " gols!");
} else {
    console.log("Empate!")
}