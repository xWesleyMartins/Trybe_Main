// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecasDeXadrez = {
rei: "O Rei se movimenta, se deslocando uma casa na direção horizontal, vertical ou diagonal. Ele tem um movimento especial chamado roque.",


rainha : "A Dama também chamada de Rainha possui o movimento combinado da Torre e do Bispo, movendo-se em linha reta nas fileiras, colunas e diagonais.",

torre : "A Torre move-se em linha reta nas colunas e fileiras do Tabuleiro.",

bisbo : "O Bispo movimenta-se em linhas retas nas diagonais do tabuleiro. Devido ele andar somente nas diagonais seu movimento é restrito pela cor das casas, ou seja, alcança somente 32 casas no tabuleiro (claras ou escuras).",

cavalo : "O Cavalo pode mover para a casa mais próxima de onde está desde que não seja na mesma coluna, diagonal ou fileiras do Tabuleiro, com o formato característico da letra L, podendo pular peças intervenientes.",

peao: " Peão se movimenta para a casa desocupada imediatamente a sua frente na mesma coluna ou no primeiro movimento opcionalmente por duas casas na mesma coluna desde que ambas as casas estejam desocupadas. Catura ao tomar o lugar ocupada pela peça oponente que está na direção diagonal na fileira imediatamente à sua frente, tomando o lugar da peça. Ele tem um movimento especial chamado En passant. ",
}

console.log(pecasDeXadrez.rainha);
console.log("****************")
console.log(pecasDeXadrez.rei);
