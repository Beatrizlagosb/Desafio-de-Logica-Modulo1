//Você é o programador responsável por programar o "taxímetro" do novo aplicativo de mobilidade que a empresa
//onde você trabalha está lançando. Nessa tarefa, dada uma distância percorrida e um tempo de viagem, você 
//tem que fazer um programa que calcula o preço da viagem. Sabe-se que o app deve cobrar, inicialmente, 50 
//centavos por minuto de viagem e mais 70 centavos por cada quilômtro de viagem realizado. Caso a viagem 
//tenha mais de 10km, cada km adicional (acima de 10) fica mais barato, passando a custar apenas 50 
//centavos por km. Caso a viagem dure mais de 20min, cada min adicional (acima de 20) fica mais barato, 
//passando a custar apenas 30 cetavos por minuto. Seu trabalho é fazer a parte do programa que calcula, 
//em centavos, o valor a ser pago pelo cliente (quanta responsabilidade, hein?). Lembre-se de arredondar 
//para baixo o valor final a ser pago.


function taximetro(min, km) {

    let minutosCorrida = 0;
    let totalMinutos = 0;
    let kmRodados = 0;
    let totalKm = 0;

    if (min > 20) {
        minutosCorrida = (min - 20) * 30;
        totalMinutos = minutosCorrida + (20 * 50);
    } else {
        totalMinutos = min * 50;
    }

    if (km > 10) {
        kmRodados = (km - 10) * 50;
        totalKm = kmRodados + (10 * 70);
    } else {
        totalKm = km * 70;
    }

    console.log(Math.floor(totalKm + totalMinutos));
}


taximetro(20, 5.5);