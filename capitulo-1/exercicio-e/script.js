/*  Elaborar um programa que leia um número.
    Calcule o próximo número
    Calcule o número anterior */

let numeroDigitado = parseInt(prompt('Digite um número'))
let proximoNumero = numeroDigitado + 1
let numeroAnterior = numeroDigitado - 1

alert(`O número que vem depois de ${numeroDigitado} é ${proximoNumero} e o número que vem antes dele é o ${numeroAnterior}`)