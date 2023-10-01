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
function morango() {
    title = document.getElementById('title').innerText = 'Morango'
    text = document.getElementById('text').innerText = 'O morango é uma fruta rica em vitaminas C, A, E, B5 e B6. Além disso, ele também é uma fonte de cálcio, potássio, ferro, selênio, magnésio e compostos fenólicos, que são antioxidantes. Todas essas substâncias têm a capacidade de proteger as células contra os efeitos dos radicais livres produzidos pelo organismo.'
    conf.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
function limao() {
    title = document.getElementById('title').innerText = 'Limão'
    text = document.getElementById('text').innerText = 'O limão é rico em vitamina C por isso modula o sistema imunológico, reduz processos alérgicos e resfriados, e aumenta ação das células imunológicas como os linfócitos e macrófagos.'
    conf.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
function abacaxi() {
    title = document.getElementById('title').innerText = 'Abacaxi'
    text = document.getElementById('text').innerText = 'O abacaxi é um bom aliado. Afinal de contas, possui vitaminas, minerais e enzimas, como a bromelina. Esses nutrientes ajudam a fortalecer o sistema imunológico e eliminar as inflamações do corpo. Ajuda na perda de peso: sendo um alimento diurético, o abacaxi ajuda na eliminação de líquidos e toxinas do organismo.'
    conf.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
function uva() {
    title = document.getElementById('title').innerText = 'Uva'
    text = document.getElementById('text').innerText = 'Por conta de seus nutrientes, como a vitamina K, as uvas são uma ótima opção para garantir a saúde desse órgão e de todo o sistema circulatório, auxiliando na coagulação sanguínea, no fortalecimento das artérias e na redução do colesterol ruim.'
    conf.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
function melancia() {
    title = document.getElementById('title').innerText = 'Melancia'
    text = document.getElementById('text').innerText = 'Como já dissemos, a melancia tem um pouco de vitamina C, o que pode ser útil para o fortalecimento do sistema imune. Além disso, por conter luteína e zeaxantina, a fruta pode favorecer também a saúde da visão.'
    conf.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
function acerola() {
    title = document.getElementById('title').innerText = 'Acerola'
    text = document.getElementById('text').innerText = 'A acerola é a segunda fruta mais rica em vitamina C e ocupa o primeiro lugar quando considerada apenas as frutas mais populares. Além disso, ela tem diversos benefícios. Um dos mais conhecidos é a proteção das células contra o ataque de radicais livres, prevenindo o envelhecimento precoce.'
    conf.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
function maracuja() {
    title = document.getElementById('title').innerText = 'Maracujá'
    text = document.getElementById('text').innerText = 'Ajuda a controlar os níveis de colesterol e glicose e regula a pressão sanguínea. Com antioxidantes como a vitamina C, flavonoides e betacaroteno, a polpa e a casca do maracujá protegem as células que produzem insulina e ajudam o organismo a absorver os carboidratos lentamente.'
    conf.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
function tanjerina() {
    title = document.getElementById('title').innerText = 'Tanjerina'
    text = document.getElementById('text').innerText = 'A tangerina é uma fruta cítrica rica em vitaminas A e C e sais minerais como potássio, cálcio e fósforo. A vitamina C é essencial para o sistema imunológico. A vitamina A é indispensável para a saúde dos olhos e da pele e aumenta a resistência às infecções.'
    conf.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
function pessego() {
    title = document.getElementById('title').innerText = 'Pessego'
    text = document.getElementById('text').innerText = 'O pêssego é rico em fibras, bom para o funcionamento do intestino. Contém minerais como fósforo, magnésio, manganês, cobre, iodo e ferro. Encontra-se também carboidratos, proteínas, vitaminas A, C e do complexo B. A vitamina B5 evita problemas de pele, do aparelho digestivo e do sistema nervoso.'
    conf.style.display = 'flex'
    document.body.style.overflow = 'hidden'
}
function manga() {
    title = document.getElementById('title').innerText = 'Manga'
    text = document.getElementById('text').innerText = 'É aliada do intestino: a manga é rica em fibras, que atuam no bom funcionamento do intestino e evitam prisão de ventre. Reforço no sistema imunológico: as vitaminas A e C presentes em sua composição aumentam a imunidade e previnem doenças.'
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
            valor.innerText = numero * 7 * 1 + ' R$'
            break;
        case 'Médio':
            valor.innerText = numero * 7 * 1.5 + ' R$'
            break;
        default:
            valor.innerText = numero * 7 * 2 + ' R$'
            break;
    }
    if (numero > 0 && numero <= 500) {
        alert('Sua compra foi realizada com sucesso')
    } else {
        valor.innerText = 'Digite uma quantidade valida'
    }
}