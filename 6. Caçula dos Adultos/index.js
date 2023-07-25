const lista = [12, 18, 24];


function caculaDosAdultos(lista) {

    const idadesValidas = lista.filter((elementoAtual) => {
        return elementoAtual >= 18;
    });

    if (idadesValidas.length > 0) {
        const menorIdade = idadesValidas.reduce((acumulador, valorAtual) => {

            if (valorAtual < acumulador) {
                return valorAtual;
            } else {
                return acumulador;
            }
        });

        console.log(menorIdade);

    } else {

        console.log('CRESCA E APARECA');
    }
}

caculaDosAdultos(lista);