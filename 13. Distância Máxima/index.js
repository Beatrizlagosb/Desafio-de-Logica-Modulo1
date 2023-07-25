const input = "3 0 0 0 3 4 0";

function distanciaMaxima(input) {

    const linhas = input.trim().split("\n"); //Quebrar as linhas, transformar em array
    // [`3`, `0 0`, `0 3`, `4 0`]
    const qtdFuncionarios = parseInt(linhas[0], 10);  //[3]

    const coordenadas = [];

    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" "); //Separa as coordenadas
        // [`0`, `0`]
        // [`0`, `3`]
        // [`4`, `0`]
        coordenadas.push({
            x: parseInt(coord[0], 10), //Transformar de string para number
            y: parseInt(coord[1], 10) //Transformar p/ inteiro na base 10
        })
    } // const coordenadas = [{x: 0, y: 0}, x: 0, y: 3}, {x: 4, y: 0}]

    //Calcular a máxima distância entre dois pontos

    let distanciaMaxima = 0;

    for (let j = 0; j < qtdFuncionarios; j++) {
        for (let k = j + 1; k < qtdFuncionarios; k++) {

            //const x = ((x2 - x1)**2);
            //const y = ((y2 - y1)**2);

            //d = math.sqrt(x + y);

            const x = ((coordenadas[k].x - coordenadas[j].x) ** 2);
            const y = ((coordenadas[k].y - coordenadas[j].y) ** 2);
            const d = Math.sqrt(x + y);

            if (d > distanciaMaxima) {
                distanciaMaxima = d;
            }
        }
    }

    console.log(distanciaMaxima);
}

distanciaMaxima(input);