let input = "cubos \ncCuuuggbooyos";


function cofreBugadao(input) {

    let separarEmArrays = input.trim().split("\n");

    let senha = separarEmArrays[0].trim();
    let senhaBugada = separarEmArrays[1];

    let indice = 0;

    for (let letra of senhaBugada) {
        if (letra === senha[indice]) {
            indice++;
        }
    }

    if (indice === senha.length) {
        console.log(`SIM`);
    } else {
        console.log(`NAO`);
    }
}

cofreBugadao(input);