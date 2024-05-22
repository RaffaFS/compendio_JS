// Bem, toda a base do DOM, da sua Árvore e a navegação por ela já foi descrita em metodosSelecao.js

// O query selector é uma maneira mais prática de selecionarmos elementos
// A sintaxe de toda a chamada é a mesma que já aprendemos no outro documento
// As diferenças aqui são:

// 1. utilizamos "querySelector()" para selecionar um único elemento
// 2. utilizamos "querySelectorAll()" para selecionar todos os elementos
// 3. utilizamos os "seletores CSS" na propriedade, ou seja:
//    "." antes de mencionarmos uma classe
//    "#" antes de mencionarmos um id
//    e para tags só passamos a tag em si

const title2 = document.querySelector('#title')
const subtitle2 = document.querySelector('h3')
const descricao2 = document.querySelector('.description')

title2.innerText = 'Rafael(query)'
subtitle2.innerText = 'Rafael Goncalves Ribeiro (query)'
descricao2.innerText = 'Rafa(query)'

// 4. Ao utilizar "querySelector()" numa classe ou tag
//    ele retornará o primeiro elemento com a propriedade passada, note o caso de ".description"
//    É para esses casos que vamos preferir trabalhar com os antigos seletores
//    Ou podemos também fazer o seguinte:

const segundoBloco = document.querySelector('#text-box')
const dia = segundoBloco.querySelector('h6')

dia.innerText = '31/02/1046'

// Veja, diferente do caso de ".description", embora ambos os blocos possuam um h6
// Apenas no segundo bloco foi adicionada uma data, isso porque
// 1. primeiro eu armazenei dentro de uma constante a seleção do "segundoBloco"
// 2. depois mencionei a constante antes do query, o que quer dizer que o
//    query só fará sua busca dentro do "segundoBloco"

/////////////////////////////////////////////////////////
////////////////////////////////////////
/////////////////////////
////////////

// Para o "querySelectorAll()" valem todas as mesmas regras citadas acima
// Porém utilizaremos ele quando queremos selecionar um grupo de elementos
// Note:

// 1. Utilizar ele "solto no documento" selecionara todos os elementos com determinada propriedade
// 2. Caso queira selecionar um grupo isolado primeiro armazeno o elemento pai
//    como fiz acima com "querySelector()", então neste caso vou usar a constante já pronta
//    do "segundoBloco" para o exemplo, veja:

const elementos2 = segundoBloco.querySelectorAll('p')

Array.from(elementos2).forEach(paragrafo => {
    paragrafo.style.color = 'red'
})

// Aqui eu peço por todos os 'p' dentro de "segundoBloco"
// Depois faço um "Array" "a partir" dos "elementos2" obtidos
// E "para cada" utilizo o argumento "paragrafo" como referência do 'p' atual
// e então, chamando "paragrafo", mudo a cor do 'p' atual