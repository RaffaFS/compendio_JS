// A princípio eu pensava que eventos eram os algoritmos criados por nós
// para realizar algo a partir de um trigger

// A verdade é que os "eventos" são justamente os "triggers" que disparam
// nossos algoritmos.

// click, dblclick, auxclick, mouseenter, mouseout...
// Estes são alguns exemplos de eventos de mouse

// https://developer.mozilla.org/en-US/docs/Web/Events
// Esse é um link com um compêndio de todos os eventos existentes atuais

const txtBox = document.querySelector('#text-box');
const txt = document.querySelector('#description')

txtBox.addEventListener('dblclick', mudarDescricao);

function mudarDescricao(){
    txtBox.style.backgroundColor = 'crimson'
    txtBox.style.border = 'solid 8px rgb(154, 15, 43)'
    txtBox.style.transition = 'all 0.6s linear'
    txt.innerText = 'Só a bailarina que não tem.'
}

// Além de uma demonstração de como funcionam os eventos, o código acima é um exemplo 
// de que podemos utilizar o trigger em um elemento para fazer uma alteração em outro
// além de outras coisas que podemos observar, como o uso de dos parâmetros de style

// 1. Armazeno em uma constante a seleção do elemento que desejo que tenha o "evento/trigger"
// 2. Armazeno em uma constante a seleção do elemento que desejo alterar a partir do "evento/trigger"
//    (Nesse caso mudaremos os dois elementos)
// 3. Menciono a primeira constante e entrego a ela o método ".addEventListener()"
// 4. 'dblclick' é o "evento/trigger" em si, e mudarDescricao é a função que será disparada

// Veja, caso eu clique uma única vez nada acontecerá, devo dar um "double click" para isso
// Acaba aqui o que diz respeito diretamente à "eventos", mas para completar, vejamos a função

// 5. Defino uma função com o nome da "função a ser disparada" e programo seu algoritmo
// 6. Para cada alteração que eu deseje fazer devo mencionar primeiro o elemento
// 7. Depois disso, temos dois casos para observar, o caso de innerText e o dos outros três parâmetros

// 8. No primeiro caso, chamo o parâmetro diretamente por ele se conectar diretamente ao HTML base
// 9. No segundo caso devo definir primeiro o "onde", com style e depois o parâmetro
// 10. Em ambos os casos o valor é definido dentro de uma string.