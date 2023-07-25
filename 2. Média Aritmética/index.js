const cofre = [1, 2];

function mediaValorPorDia(lista) {

    const somatorio = lista.reduce((acumulador, valorAtual) => {
        return (acumulador + valorAtual);
    }, 0);

    console.log((somatorio / lista.length));

}


mediaValorPorDia(cofre);