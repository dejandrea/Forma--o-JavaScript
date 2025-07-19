// Faça um programa que receba N (quantidade de números) e seus respectivos valores
// imprima o maior número par e o menor número impar.


const {gets, print} = require("./funcao-auxiliar-ex02")

const N = gets()
let pares = []
let impares = []

for (let i = 0; i < N; i++) {
    let num = gets()
    num % 2 == 0 ? pares.push(num):impares.push(num)
}

print(pares.sort((a,b) => a - b)[pares.length-1])
print(impares.sort((a,b)=>a-b)[0])