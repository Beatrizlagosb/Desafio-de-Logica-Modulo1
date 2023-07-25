const input = ("3\n0 0\n0 3\n4 0");

function distanciaMaxima(input) {

    let linhas = input.trim().split("\n");
    let qtdFuncionarios = parseInt(linhas[0], 10);

    let coordenadas = [];

    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");

        coordenadas.push({
            x: parseFloat(coord[0], 10),
            y: parseFloat(coord[1], 10)
        })
    }

    let distanciaMaxima = 0;

    for (let j = 0; j < qtdFuncionarios; j++) {
        for (let k = j + 1; k < qtdFuncionarios; k++) {

            // const coordenadas = [{x: 0, y: 0}, {x: 0, y: 3}, {x: 4, y: 0}]

            const x = (coordenadas[k].x - coordenadas[j].x) ** 2;
            const y = (coordenadas[k].y - coordenadas[j].y) ** 2;
            const d = Math.sqrt(x + y);

            if (d > distanciaMaxima) {
                distanciaMaxima = d;
            }
        }
    }

    console.log(distanciaMaxima);
}

distanciaMaxima(input);