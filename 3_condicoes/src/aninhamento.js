// O aninhamento nada mais é que a prática de colocar uma condição dentro de outra
// Isso pode ser feito repetidas vezes,

// É especialmente útil como verificação em etapas ou categorização por valor, por exemplo.

// Já para casos onde precisamos organizar elementos de acordo com as condições,
// Mas sem a necessidade de estabelecer vários filtros para cada um
// Ou categorizá-los em alguma ordem de valores, teremos outra opção melhor mais adiante

// Veja do que estou falando

/// /// /// /// ANINHAMENTO NA FILTRAGEM DE INFORMAÇÕES

const btn3 = document.querySelector('#btn3')
btn3.addEventListener('click', filtragem)

function filtragem(){
    const input = document.querySelector('#elemento').value
    const elemento = input.toUpperCase()
    const title = document.querySelector('#title')

    if(elemento == 'TERRA' || elemento == 'ÁGUA' || elemento == 'AR' || elemento == 'FOGO'){
        title.innerText = 'É um dos quatros elementos'

        if(elemento == 'ÁGUA' || elemento == 'AR' || elemento == 'FOGO'){
            title.innerText += ', essencialmente limpo/puro'

            if(elemento == 'AR' || elemento == 'FOGO'){
                title.innerText += ', não palpável'
            }

            if(elemento == 'FOGO'){
                title.innerText += ', e quente'
            }
        }
    }
    else{
        title.innerText = 'Não é um dos quatro elementos'
    }
}

// Nesse caso, para cada "etapa" que o elemento passa, ele ganha mais um pedaço de frase
// Poderíamos fazer isso de diversas formas, a maneira que defini as coisas aqui é como se
// Apenas fogo tivesse todas as características necessárias para chegar até o fim da peneira


/// /// /// /// ANINHAMENTO NA ORDENAÇÃO POR VALORES

const btn4 = document.querySelector('#btn4')
btn4.addEventListener('click', filtrar)

function filtrar(){
    const altura = parseInt(document.querySelector('#altura').value)
    const peso = parseInt(document.querySelector('#peso').value)
    const UF = document.querySelector('#UF').value.toUpperCase()
    const msg = document.querySelector('#msg')

    if(altura >= 170 && peso <= 62 && UF == 'SC'){
        msg.innerText = 'Parabéns, você tem todas as características que procuramos'
    }
    else{
        if((altura >= 170 && peso <= 62) && (UF == 'SC' || UF == 'RS' || UF == 'PR')){
            msg.innerText = 'Você está um pouco longe, mas tem as características que procuramos'
        }

        else{
            if((altura >= 165 && peso <= 60) && (UF == 'SC' || UF == 'RS' || UF == 'PR')){
                msg.innerText = 'Obrigado pela inscrição, assim que possível entraremos em contato'
            }

            else{
                msg.innerText = 'Não temos essas vagas disponíveis no momento, tente novamente em algumas semanas'
            }
        }
    }
}

// A essência do que acontece aqui é a mesma do primeiro exemplo, porém enquanto lá eu
// "Testava" um elemento em várias etapas, para ver até onde ele chegava
// Aqui é como se eu pedisse por algo muito específico e, não conseguindo encontrar todas 
// as características, eu torno minha busca mais branda eliminando as condições menos importantes
// ou melhor dizendo, nesse caso, aumentando a área e baixando os padrões de seleção

// Além disso essa é uma maneira mais "completa", de se escrever condições aninhadas,
// Mas temos uma maneira mais usada e simples que cumpre as mesmas funções

const btn5 = document.querySelector('#btn4')
btn5.addEventListener('click', filtrar)

function filtrar(){
    const altura = parseInt(document.querySelector('#altura').value)
    const peso = parseInt(document.querySelector('#peso').value)
    const UF = document.querySelector('#UF').value.toUpperCase()
    const msg = document.querySelector('#msg')

    if(altura >= 170 && peso <= 62 && UF == 'SC'){
        msg.innerText = 'Parabéns, você tem todas as características que procuramos'
    }
    else if((altura >= 170 && peso <= 62) && (UF == 'SC' || UF == 'RS' || UF == 'PR')){
            msg.innerText = 'Você está um pouco longe, mas tem as características que procuramos'
    }
    else if((altura >= 165 && peso <= 60) && (UF == 'SC' || UF == 'RS' || UF == 'PR')){
                msg.innerText = 'Obrigado pela inscrição, assim que possível entraremos em contato'
    }
    else{
        msg.innerText = 'Não temos essas vagas disponíveis no momento, tente novamente em algumas semanas'
    }
}

// Esse é exatemente algoritmo que o anterior, porém simplificado, mais limpo