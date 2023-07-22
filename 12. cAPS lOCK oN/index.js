const palavra = 'cAPS';    //Caps
const palavra1 = 'lock';   //lock
const palavra2 = 'CAPS';   //caps
const palavra3 = 'Look';   //Look
const palavra4 = 'aaaCBC'  //aaaCBC
const palavra5 = 'aBGFSc'  //aBGFSc
const palavra6 = 'LooKs'   //LooKs


function corrigirPalavras(input) {

    let palavraMinuscula = input.slice(0, 1).toLowerCase() + input.slice(1).toLowerCase();
    let palavraNormal = input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase();
    let palavraMaiuscula = input.slice(0, 1).toUpperCase() + input.slice(1).toUpperCase();
    let apenasPrimeiraLetraMinuscula = input.slice(0, 1).toLowerCase() + input.slice(1).toUpperCase();


    if (input === apenasPrimeiraLetraMinuscula) {
        console.log(palavraNormal);

    } if (input === palavraMinuscula) {
        console.log(palavraMinuscula);

    } else if (input === palavraNormal) {
        console.log(input);

    } else if (input === palavraMaiuscula) {
        console.log(palavraMinuscula);

    } else if (input.slice(0, 2).toLowerCase() === input.slice(0, 2)) {
        console.log(input);

    } else if (input.slice(0, 1).toLowerCase() === input.slice(0, 1) && input.slice(1).toUpperCase() !== input.slice(1) && input.slice(1).toLowerCase() !== input.slice(1)) {
        console.log(input)

    } else if (input.slice(0, 1).toUpperCase() === input.slice(0, 1) && input.slice(1).toLowerCase() !== input.slice(1) && input.slice(1).toUpperCase() !== input.slice(1)) {
        console.log(input)
    }
};

corrigirPalavras(palavra);
corrigirPalavras(palavra1);
corrigirPalavras(palavra2);
corrigirPalavras(palavra3);
corrigirPalavras(palavra4);
corrigirPalavras(palavra5);
corrigirPalavras(palavra6);