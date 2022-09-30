/*  Elaborar um programa que lê duas notas
    Calcule a média dessas notas
    Informe a média dessas notas */

let nota1 = parseFloat(prompt(`Digite a primeira nota: `))
let nota2 = parseFloat(prompt(`Digite a segunda nota: `))
let media = (nota1 + nota2) / 2

alert(`A média das notas do aluno é de ${media}`)