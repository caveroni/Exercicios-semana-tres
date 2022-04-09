//7 - Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. 
//Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

const parametro1 = 10
const parametro2 = 2
const divisao = (parametro1/parametro2)

if ((divisao % 2) == 0){
    console.log(divisao + ' é um numero par')
} else{
    console.log(divisao + ' não é par')
}

