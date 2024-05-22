// Em resumo, o DOM (Document Object Model) é uma ponte entre o HTML e o JavaScript
// É um conjunto de objetos integrado ao navegador que nos da acesso aos componentes do site

// Para conseguirmos fazer isso é importante que entendamos a "Árvore DOM":
// 1. Todos os elementos pertencem a "window"
// 2. Dentro de window poderemos acessar "location", "history" e principalmente "document"
// 3. Dentro de "document" precisamos encontrar e selecionar um elemento
// 4. Após a seleção do elemento dizemos o que queremos fazer com ele
// 5. Se a ação precisar receber um valor, passamos esse valor. Veja:

window.document.getElementsByClassName('title')[0].innerText = 'Rafael'

// Com a linha de código acima naveguei corretamente pela Árvore DOM
// 1. Acessei window
// 2. Acessei document
// 3. Escolhi encontrar o elemento "por classe", getElementsByClassName()
// 4. Mencionei a classe ('title') e o índice do elemento [0]
// 5. Passei o que desejo fazer, "innerText", que é escrever dentro do elemento
// 6. Passei um valor para innerText, que é o que desejo escrever, 'Rafael'.

// Nesse caso eu puxei o elemento pela sua classe, mas temos outras maneiras de fazer isso
// Além disso, podemos também omitir a palavra window para a maioria dos casos

///////////////   document.getElementsByClassName()[0]   ===== Por classe
///////////////   document.getElementsByTagName()[0]     ===== Por tag
///////////////   document.getElementsByName()[0]        ===== Por nome
///////////////   document.getElementById()              ===== Por id

// Estas são todas as maneiras de selecionar um objeto por uma propriedade específica
// Note que os 3 primeiros citam "Elements", enquanto o último cita "Element"
// Isso porque apenas por "id" selecionamos automaticamente um elemento único
// Nos outros casos precisamos passar um número de índice referente a posição do elemento

// Além disso, uma prática boa e comum é armazenar as chamadas dentro de constantes
// Pois assim para cada ação podemos apenas chamar a const ao invés de reescrever tudo

const sub = document.getElementsByClassName('subtitle')[0]

sub.innerText = 'Rafael Gonçalves Ribeiro'
sub.innerText += ' nasceu em 2000'
sub.innerText += ' e mora em SC'

// Acima armazenei a chamada do item de classe subtitle e índice correspondente a 0, em "sub"
// Então para cada nova ação utilizando a chamada, apenas referencio "sub" e passo a ".ação"
// Nesse caso todas as ações são innerText que recebem o seu próprio valor + um novo valor.

////////////////////////////////////////////////////
/////////////////////////////////
///////////////
/////

// Se quiser realizar qualquer ação em mais de um elemento por vez, escolhemos se vamos
// Seleciona-los por classe, tag ou nome, passamos a propriedade escolhida
// E apenas deixamos de passar o índice, veja:

const detalhes = document.getElementsByTagName('p')

Array.from(detalhes).forEach(paragrafo => {
    paragrafo.innerText = 'Rafa'
})

// A diferença aqui é que, por não ter um índice definido
// Precisamos de algum método de iteração sobre os elementos
// Poderia ser um "for(let i = 0; i < detalhes; i++)" também
// Mas nesse caso digo que

// 1. Quero um Array, a partir de (from()), "detalhes"
// 2. E para cada "paragrafo" (argumento que vai servir de invólucro para cada 'p')
// 3. Realizo a ação de escrever 'Rafa' no "p" da vez