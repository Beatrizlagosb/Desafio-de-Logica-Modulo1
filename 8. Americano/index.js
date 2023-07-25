const numeros = [1, 3, 2, 1];

function jogadorEscolhido(numeros) {

    let somaDosDedos = 0;
    let posicaoJogadorEscolhido = 0;

    for (let numero of numeros) {
        somaDosDedos += numero;
    }

    let divisaoPorJogador = somaDosDedos % numeros.length;

    if (divisaoPorJogador !== 0) {
        posicaoJogadorEscolhido = divisaoPorJogador;

    } else {
        posicaoJogadorEscolhido = numeros.length;
    }
    console.log(posicaoJogadorEscolhido);
}


jogadorEscolhido(numeros);


