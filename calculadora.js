function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação(*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação(**)'));

    if (!operacao || operacao > 7 ){
        alert('Erro - opção inválida!');
        calculadora();
   
    } else {

        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        if (!n1 || !n2){
            alert('Erro - parâmetros inválidos!')
            calculadora()

        } else {
            function soma(){
                resultado = n1 + n2;
                alert(`Resultado:\n${n1} + ${n2} = ${resultado}`)
                novaoperacao()
            }

            function subtracao(){
                resultado = n1 - n2;
                alert(`Resultado:\n${n1} - ${n2} = ${resultado}`)
                novaoperacao()
            }

            function multiplicacao(){
                resultado = n1 * n2;
                alert(`Resultado:\n${n1} x ${n2} = ${resultado}`)
                novaoperacao()
            }

            function divisaoreal(){
                resultado = n1 / n2;
                alert(`Resultado:\n${n1} / ${n2} = ${resultado}`)
                novaoperacao()
            }

            function divisaointeira(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre: ${n1} e ${n2} é igual a ${resultado}`)
                novaoperacao()
            }

            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
                novaoperacao()
            }

            function novaoperacao(){
                const operacao = prompt('Deseja fazer outra operação:\n 1 - Sim\n 2- Não')
                if (operacao == 1){
                    calculadora()
                } else {
                    alert(`Até logo!`)
                }
            }

            // if (operacao == 1){
            //     soma();
            // } else if (operacao == 2){
            //     subtracao();
            // } else if (operacao == 3){
            //     multiplicacao();
            // } else if (operacao == 4){
            //     divisaoreal();
            // } else if (operacao == 5){
            //     divisaointeira();
            // } else if (operacao == 6){
            //     potenciacao();
            // }

            switch (operacao){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoreal();
                    break;
                case 5:
                    divisaointeira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
        }
        }

        calculadora();
