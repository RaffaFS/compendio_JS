// Perceba que, no primeiro exemplo de if-else.js, enquanto o elemento estiver cumprindo as condições
// ele passa para a etapa seguinte, mas se ele deixar de cumprir uma condição em algum momento
// a execução do "bloco condicional" é interrompida, e os algoritmos externos seguem rodando

// No segundo e terceiro exemplo, o que acontece é basicamente o mesmo, mas ao contrário, 
// O "bloco condicional" continua em execução até que, em alguma camada, todas as condições sejam
// cumpridas ou, até que termine no else{}.

// De toda maneira, há sempre uma possibilidade do "bloco condicional" ter a execução interompida
// (de maneira prevista), sem a necessidade de ter rodado por completo.

/////////////////////////////////////////////////////////
/////////////////////////////////////////
//////////////////////////
//////////

// Aqui o que acontece é um pouco diferente, a estrutura de Condição Múltipla será utilizada
// não para avaliar condições complexas como intervalos, >=, <=, &&, || ou similares, mas sim
// Para avaliar se um valor obtido é exatamente igual a um valor simples configurado, veja

const btnNu = document.querySelector('#btnNu')
btnNu.addEventListener('click', encontrar)

function encontrar(){
    const title1 = document.querySelector('#numeros')
    const numero = parseInt(document.querySelector('#numero').value)

    switch(numero){
        case 1:
            title1.innerText = 'Comummente esse é o número de narizes que um ser humano comum possui'
            break
        case 2:
            title1.innerText = 'Comummente esse é o número de olhos que um ser humano comum possui'
            break
        case 3:
            title1.innerText = 'Comummente esse é o número de rodas que um tricíclo possui'
            break
        case 4:
            title1.innerText = 'Comummente esse é o número de rodas que um carro comum possui'
            break
        case 5:
            title1.innerText = 'Geralmente, uma árvore adulta na primavera possui no mínimo esse número de folhas'
            break
        default:
            title1.innerText = 'Por favor, digite um dos seguintes valores: 1, 2, 3, 4 ou 5'
    }
}

// Da mesma maneira que com else if, aqui, quando o algoritmo encontrar o que busca ele executa o caso
// em questão e depois pula pra fora do "bloco condicional", a vantagem aqui é que escrevemos muito menos
// É importante ressaltar que aqui só tratamos de valores simples e fixos, também, justamente por isso
// Não precisamos colocar os valores em qualquer ordem, veja o exemplo seguinte:

const btnNo = document.querySelector('#btnNo')
btnNo.addEventListener('click', rimar)

function rimar(){
    const title2 = document.querySelector('#nomes')
    const nome = document.querySelector('#nomeInput').value

    switch(nome){
        case 'Rafael':
            title2.innerText = 'Rafael Pastel'
            break
        case 'Lucas':
            title2.innerText = 'Lucas Batucas'
            break
        case 'Vitor':
            title2.innerText = 'Vitor Ator'
            break
        default:
            title2.innerText = 'Este não é um dos nomes solicitados'
    }
}
