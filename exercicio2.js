// 2 - Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, 
//se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let valorum = 8
let valordois = 85787

if (valorum > valordois) {
    console.log('O primeiro valor é maior pois ' + valorum +' é maior que ' + valordois)
} else if (valordois > valorum) {
    console.log('O segundo valor é maior pois ' + valordois +' é maior que ' + valorum)
} else if (valorum = valordois) {
    console.log('Ambos valores são iguais: ' )
} else {
    console.log('Insira valores válidos')
}