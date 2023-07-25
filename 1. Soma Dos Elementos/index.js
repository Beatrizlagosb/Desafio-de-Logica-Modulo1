const lista = [1, 2, 3, 4];


const acumuladoCofre = lista.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;

});

console.log(acumuladoCofre);
