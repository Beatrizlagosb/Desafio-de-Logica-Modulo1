function manilha(carta) {

    const cartaParaCima = ['Q', 'J', 'K', 'A', '2', '3'];

    for (let i = 0; i < cartaParaCima.length; i++) {

        if (carta === cartaParaCima[i] && carta !== '3') {
            console.log(cartaParaCima[i + 1]);
        }
    }
    if (carta === cartaParaCima[cartaParaCima.length - 1]) {
        console.log(cartaParaCima[0]);
    }
}

manilha('3');



//Carta virada pra cima	Manilha
//Q	J
//J	K
//K	A
//A	2
//2	3
//3	Q
