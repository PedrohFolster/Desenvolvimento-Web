let teclado = require('prompt-sync')();

let texto = teclado("Informe um texto: ");
let palavraProcurar = teclado("Informe a palavra que você deseja procurar no texto: ");
let palavraTrocar = teclado("Informe a palavra que você deseja substituir na palavra procurada: ");

console.log(`Texto digitado: ${texto}`);
console.log(`Palavra a ser procurada: ${palavraProcurar}`);
console.log(`Palavra a ser trocada: ${palavraTrocar}`);

let palavras = texto.split(" ");
let novoTexto = "";
let ocorrencias = 0;

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i] === palavraProcurar) {
        novoTexto += palavraTrocar + " ";
        ocorrencias++;
    } else {
        novoTexto += palavras[i] + " ";
    }
}

console.log("Novo texto:", novoTexto.trim());
console.log(`Foram realizadas ${ocorrencias} trocas.`);
