//min é o mínimo necessário para se poder jogar nesta mesa. É necessário ter o mínimo ou mais.
//max é o máximo permitido para se poder jogar nesta mesa. É necessário ter o máximo, ou menos.
//valores é um array que contém os valores com os quais o jogadores estão tentando sentar na mesa para jogar

const minimo = 2;
const maximo = 10;
const valores = [0, 5, 6, 10, 11];

function solucao(min, max, valores) {

    const resultado = valores.filter((valor) => {
        return valor >= min && valor <= max;
    })
    console.log(resultado);
};

solucao(minimo, maximo, valores);