// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro

const a = 50
const b = 50
const c = 80
if (a+b+c > 180){
    console.log("Erro! 'Angulo informado invalido'")
}
if (a+b+c === 180){
    console.log("True")
}else{
    console.log("False")
}

console.log("O angulo atual somado informado é "+ (a+b+c));