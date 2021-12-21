var jogador1 = 0;
var jogador2 = 0;
var placar;

// //if ternário
// jogador1 != -1 & jogador2 != -1 ? console.log("Os jojadores são válidos") :
// console.log('Jogadores Inválidos');


if (jogador1 > 0 & jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}

else if (jogador2 > 0 & jogador1 == 0) {
    console.log('Jogador 2 marcou ponto!');
    placar= jogador2 > jogador1;
}

else {
    console.log('Ninguem marcou ponto');
}

console.log("teste de controle script");