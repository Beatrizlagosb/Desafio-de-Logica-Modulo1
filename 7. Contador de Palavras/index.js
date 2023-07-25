const texto = `Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer`;


const separarEmArrays = texto.trim().split(" ");
const filtro = separarEmArrays.filter((elementoAtual) => {
    return elementoAtual.length > 0;
})
const quantidadeDePalavras = filtro.length;

console.log(separarEmArrays);
console.log(quantidadeDePalavras);


//let clear = texto.replace(/[^\w\s]/g, '')
//let words = clear.trim().split(/\s+/);
//let filtered = words.filter((word) => word.length > 0);
//let result = filtered.length;

//console.log(result);