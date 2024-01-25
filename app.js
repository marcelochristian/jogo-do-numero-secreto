let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;
// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10";

function verificarChute() {
    debugger;
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        exibirTextoNaTela(
            "p",
            `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        );
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela("p", "O numero secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}

function exibirTextoNaTela(tag, texto) {
    let mudaTexto = document.querySelector(tag);
    mudaTexto.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
