/*  Elaborar um programa para uma loja que leia o preco de um produto.
    O programa deve informar as opções de pagamento da loja
    O programa deve calcular o 10% de desconto no valor a vista
    O programa deve informar o valor de cada parcela em caso de pagamento com cartão */

let precoProduto = parseFloat(prompt('Digite o valor do produto'))
let opcoesDePagto = alert(`Você pode pagar o valor R$ ${precoProduto} no cartão parcelado ou a vista com desconto de 10%`)

let parcelas = parseInt(prompt(`Digite o número de parcelas para ver o valor delas`))
let totalParcelas = precoProduto/parcelas
let cartao = alert(`Para pagamento no cartão parcelado, as parcelas serão de R$ ${totalParcelas}`)

let desconto = precoProduto * (10/100)
let aVista = alert(`Para pagamento no cartão a vista, o desconto será de R$ ${desconto} e você pagará o valor de ${(precoProduto - desconto).toFixed(2)}`)