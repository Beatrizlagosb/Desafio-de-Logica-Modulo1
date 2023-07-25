const jogadores = [
    {
        nome: "Herman",
        jogada: 1
    },
    {
        nome: "Rhodes",
        jogada: 0
    },
    {
        nome: "Beach",
        jogada: 0
    },
    {
        nome: "Laurel",
        jogada: 0
    },
    {
        nome: "Beatrice",
        jogada: 0
    },
    {
        nome: "Alison",
        jogada: 0
    },
    {
        nome: "Saundra",
        jogada: 0
    },
    {
        nome: "Klein",
        jogada: 0
    }
];

function zeroOuUm(jogadores) {

    const jogada0 = jogadores.filter((elementoAtual) => {
        return elementoAtual.jogada === 0;
    })
    const jogada1 = jogadores.filter((elementoAtual) => {
        return elementoAtual.jogada === 1;
    })

    if (jogada0.length === 1) {
        console.log(jogada0[0].nome);
    } else if (jogada1.length === 1) {
        console.log(jogada1[0].nome);
    } else {
        console.log(`NINGUEM`);
    }

}

zeroOuUm(jogadores);