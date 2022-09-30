/*  Elaborar um programa para uma pizzaria que leia o valor total de uma conta e quantos clientes vão pagar.
    Calcular e informar o valor a ser pago pelo cliente
*/

let conta = parseFloat(prompt(`Digite o valor da conta: `))
let pessoas = parseInt(prompt('Quantas pessoas farão o pagamento dessa conta? '))
let totalDividido = conta/pessoas

alert(`A conta deu R$ ${conta} e dividido por ${pessoas} pessoas, cada pessoa pagará o total de R$ ${totalDividido.toFixed(2)}`)