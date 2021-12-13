

var num1 = prompt('Digite um número: ')
var operacao = prompt('informe textualmente qual será a operação: soma ou subtração? ')
var num2 = prompt('Digite mais um número: ')
var resultado

num1 = parseInt(num1)
num2 = parseInt(num2)

var calculo = function(num1,operacao,num2) {
    
    if(operacao == 'soma' || operacao == 'Soma') {
        resultado = num1 + num2

    }else if(operacao == 'subtracao' || operacao == 'subtração'){
        resultado = num1 - num2

    }else{
        alert('Digite uma operação válida')
    }

    return resultado
}

calculo(num1,operacao,num2)

document.write('O resultado é: ' + resultado)



