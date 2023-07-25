const precos = [200, 150, 50, 100];


function totalDesconto(precos) {

    let valorCompra = 0;
    let itens = 0;

    for (let preco of precos) {
        valorCompra += preco;
        itens++;
    }

    const menorCompra = precos.reduce((acumulador, valorAtual) => {
        if (valorAtual < acumulador) {
            return valorAtual;
        } else {
            return acumulador;
        }
    })

    if (itens >= 3) {
        console.log(valorCompra - (menorCompra * 0.5));
    } else {
        console.log(valorCompra);
    }

}

totalDesconto(precos);