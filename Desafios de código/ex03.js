// Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios
// O salário a ser transferido é calculado da seguinte maneira:

// valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// para calcular o percentual de imposto, seguem as alíquotas:

// de R$ 0,00 a R$ 1100,00 - 5.00%
// de R$ 1100,01 a R$ 2500,00 - 10.00%
// Maior que 2500,00 - 15.00%

const { gets, print } = require('./funcao-auxiliar-ex03');

let salarioBruto = gets()
let beneficios = gets()
let imposto = 0
let salarioL = 0

function aliquotaImposto(salarioBruto) {
    let valor = 0
    if (salarioBruto >= 0 && salarioBruto <= 1100) {
        valor = salarioBruto * (5 / 100)
    } else if (salarioBruto > 1100 && salarioBruto <= 2500) {
        valor = salarioBruto * (10 / 100)
    } else if (salarioBruto > 2500) {
        valor = salarioBruto * (15 / 100)
    } else {
        print("Valor inválido")
    }
    return valor
}

imposto = aliquotaImposto(salarioBruto)

salarioL = salarioBruto - imposto + beneficios

print(salarioL)