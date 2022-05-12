function soma(x, y) {
    return x + y;
}


function subtração(x,y) {
    return x - y;
}

function multiplicação(x,y) {
    return x * y;
}

function divisão(x,y) {
    return x / y;
}
//Calculadora 2º

function divisãoZero(x,y) {
    return x / y;
}

function quadradoDoNumero(x) {
    return x **2;
}

function mediaDeTresNumeros(x,y,z) {
    return (x+y+z)/3;
}

function calculoPorcentagem(x,y) {
    return(x*y) / 100;
}
function geradorDePorcentagem(x,y){
    return(x/y) * 100;
}

console.log(`
    --------Teste de Operações / Calculadora -------
     Resultado da soma: ${soma(5,5)} 
     Resultado da subtração: ${subtração(10,5)}
     Resultado da multiplicação: ${multiplicação(5,5)}
     Resultado da divisão: ${divisão(100,2) .toFixed(1)}
     Resultado do quadrado do numero: ${quadradoDoNumero(5)}
     Resultado do quadrado do numero: ${mediaDeTresNumeros(4,2,8).toFixed(1)}
      calculo porcenResultadotagem: ${calculoPorcentagem(100,20)}
      calculo porcenResultadotagem: ${geradorDePorcentagem(20,200).toFixed(1)}%
     `)
    