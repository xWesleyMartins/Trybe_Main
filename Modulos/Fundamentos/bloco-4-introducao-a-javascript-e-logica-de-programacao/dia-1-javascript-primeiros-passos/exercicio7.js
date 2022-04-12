 // Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras: Porcentagem >= 90 -> A
//  Porcentagem >= 80 -> B
//  Porcentagem >= 70 -> C
//  Porcentagem >= 60 -> D
//  Porcentagem >= 50 -> E
//  Porcentagem < 50 -> F

let valorPercentual=60;












if (valorPercentual < 0 || valorPercentual > 100){
    console.log("Erro! Valor não Corresponde ao Percentual de '0 a 100'")
}
if (valorPercentual >= 90){
    console.log("A")
}else if (valorPercentual >= 80 && valorPercentual < 89){
    console.log("B")
}else if (valorPercentual >= 70 && valorPercentual < 79){
    console.log("C")
}else if (valorPercentual >= 60 && valorPercentual < 69){
    console.log("D")
}else if (valorPercentual >= 50 && valorPercentual < 59){
    console.log("E")
}else if (valorPercentual < 50){
    console.log("F")
}


