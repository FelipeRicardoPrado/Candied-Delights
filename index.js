/*Contato-Formulário de contato*/
function concluido() {
    alert('Seu formulário foi enviado com sucesso')
}

/*Produtos-Sabores*/
var conf, valor, numero, compra, title, text;
conf = document.getElementById('conf')

function laranja() {
    title = document.getElementById('title').innerText = 'Laranja'
    text = document.getElementById('text').innerText = 'A laranja é uma fruta com diversos benefícios à saúde e, ao ser consumida em conjunto com outros alimentos, contribui para combater doenças cardiovasculares, fornecer energia ao corpo, melhorar o sistema digestivo e fortalecer o sistema imunológico.'
    conf.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
function voltar() {
    conf.style.display = 'none'
    document.body.style.overflow = 'auto'
}
function compr() {
    valor = document.getElementById('valor')
    numero = document.getElementById('numero')
    numero = Number(numero.value)
    var tamanho = document.getElementById('Tamanho').value
    switch (tamanho) {
        case 'Pequeno':
            valor.innerText = numero * 15 * 1 + ' R$'
            break;
        case 'Médio':
            valor.innerText = numero * 15 * 1.5 + ' R$'
            break;
        default:
            valor.innerText = numero * 15 * 2 + ' R$'
            break;
    }
    if (numero > 0 && numero <= 500) {
        alert('Sua compra foi realizada com sucesso')
    } else {
        valor.innerText = 'Digite uma quantidade valida'
    }
}