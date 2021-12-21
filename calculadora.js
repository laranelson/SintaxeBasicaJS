function calculadora() {
    const operacao = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação(*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação(**)');

    if (operacao <= 6){

    let n1 = Number(prompt('Insira o primeiro valor: '));
    let n2 = Number(prompt('Insira o segundo valor: '));
    let resultado;

    function soma(){
        resultado = n1 + n2;
        alert(`Resultado:\n${n1} + ${n2} = ${resultado}`)
        calculadora();
    }

    function subtracao(){
        resultado = n1 - n2;
        alert(`Resultado:\n${n1} - ${n2} = ${resultado}`)
        calculadora();
    }

    function multiplicacao(){
        resultado = n1 * n2;
        alert(`Resultado:\n${n1} x ${n2} = ${resultado}`)
        calculadora();
    }

    function divisaoreal(){
        resultado = n1 / n2;
        alert(`Resultado:\n${n1} / ${n2} = ${resultado}`)
        calculadora();
    }

    function divisapinteira(){
        resultado = n1 % n2;
        alert(`Resultado:\n${n1} % ${n2} = ${resultado}`)
        calculadora();
    }

    function potenciacao(){
        resultado = n1 ** n2;
        alert(`Resultado:\n${n1} ** ${n2} = ${resultado}`)
        calculadora();
    }

    if (operacao == 1){
        soma();
    } else if (operacao == 2){
        subtracao();
    } else if (operacao == 3){
        multiplicacao();
    } else if (operacao == 4){
        divisaoreal();
    } else if (operacao == 5){
        divisaointeira();
    } else if (operacao == 6){
        potenciacao();
    }

    } else {
        alert(`Opção Inválida!!!\nTente Novamente.`)
        calculadora();
    }
}

calculadora();
