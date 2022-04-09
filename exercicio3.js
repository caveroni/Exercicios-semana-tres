//3 - Crie um algoritmo que receba três notas de um aluno, 
//calcule sua média e mostre as seguintes mensagens de acordo com cada situação:
//- Se a media for igual ou maior que 7 - Aprovado
//- Se a media for maior e igual a cinco e menor que 7 - Recuperação
//- Se a media for menor que 5 - Reprovado

const nota1 = 5
const nota2 = 10
const nota3 = 10

const media = (nota1 + nota2 + nota3)/3

if (media >= 7){
    console.log('Aprovado com média ' + media)
} else if ((media >= 5) || (media < 7)){
    console.log('Recuperação com média ' + media)
} else if (media < 5){
    console.log('Reprovado com média ' + media)
} else {
    console.log('insira valores válidos.')
}