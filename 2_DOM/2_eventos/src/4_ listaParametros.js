///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// =============== =============== ======= LISTA DE PARÂMETROS ÚTEIS ======= =============== =============== //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const element = document.querySelector('#elemento')

// Em alguns deles vou comentar que podem ser usados como testes lógicos, ou como condições destes, isso porque
// esse é o uso principal de alguns deles, mas a realidade é que a maioria pode ser usado também dessa forma 

// =============== =============== =============== =============== =============== =============== =============== //
// =============== =============== =============== =============== =============== =============== =============== //
// =============== =============== =============== =============== =============== =============== =============== //

// De início temos as clássicas que se referem ao conteúdo do elemento

element.innerHTML =         // Me permite adicionar ou alterar estruturas HTML internas do elemento selecionado
element.innerText =         // Me permite adicionar ou alterar o conteúdo textual do elemento selecionado
element.textContent         // Retorna rodos os conteúdo textuais do elemento selecionado e seus filhos

// =============== =============== =============== =============== =============== =============== =============== //
// =============== =============== =============== =============== =============== =============== =============== //
// =============== =============== =============== =============== =============== =============== =============== //

// Existem também alternativas ao innerHTML quando o assunto 
// é alterar o HTML em casos simples, como adicionar, remover 
// ou substituir um elemento filho. Tenha "NE" para novo elemento, 
// "ER" para elemento referência e "EA" para elemento antigo 

element.appendChild(NE)                 // Adiciona ao fim do elemento selecionado, o elemento filho passado
element.insertBefore(NE, ER)            // Faz o mesmo que o anterior, mas antes implementa o NE acima do "ER"
element.removeChild(EA)                 // Remove do elemento selecionado, o filho passado
element.replaceChild(NE, EA)            // Substitui "EA" por "NE"

// Na maioria das vezes essas "crianças" serão tags HTML

// =============== =============== =============== =============== =============== =============== =============== //
// =============== =============== =============== =============== =============== =============== =============== //
// =============== =============== =============== =============== =============== =============== =============== //

element.style       // Aqui menciono o "campo de estilo" como um todo, 
                    // após isso eu devo especificar a propriedade de
                    // estilo que desejo criar ou alterar:

element.style.color = 
element.style.backgroundColor = 
element.style.fontSize =
element.style.margin =
element.style.padding =
element.style.border =
element.style.opacity =

// =============== =============== =============== =============== =============== =============== =============== //
// =============== =============== =============== =============== =============== =============== =============== //
// =============== =============== =============== =============== =============== =============== =============== //

// Essas acima são só algumas das possibilidade, além disso,
// uma maneira alternativa de modificar o estilo de um elemento
// é utilizar dos parâmetros de classe

element.classList

// Após mencionar a "lista de classes", devo dizer o que quero fazer ali dentro:

element.classList.add('classe_nova')                // Adiciona uma nova classe
element.classList.remove('classe_antiga')           // Remove uma classe existente
element.classList.toggle('classe_on_off')           // Adiciona se a classe não existir e remove-a se existir
element.classList.contains('classe_nova')           // Verifica a existência de uma classe e retorna um booleano

// Como citei antes, são ótimas maneiras de alterar o estilo de
// um elemento através do DOM, principalmente se várias
// propriedades precisarem ser alteradas, isso porque, ao invés
// de alterá-las uma a uma no JS, basta que eu tenha criado os
// "estados necessários" de um elemento, como classes no CSS
// e então, no JS, apenas adicione, remova ou faça um "liga e
// desliga" com toggle, das classes necessárias

// =============== =============== =============== =============== =============== =============== =============== //
// =============== =============== =============== =============== =============== =============== =============== //
// =============== =============== =============== =============== =============== =============== =============== //

// Podemos também incluir ou remover atributos diretamente com:

element.setAttribute('atributo', 'valor')       // Define um novo atributo para o elemento selecionado
element.removeAttribute('atributo')             // Remove o atributo mencionado do elemento selecionado
element.getAttribute('atributo')                // Retorna o atributo mencionado do elemento selecionado

// Para "valor", devo passar um valor que seja condizente/aceito pelo "atributo" passado
// Para "atributo", posso passar coisas como 'id', 'class', 'title', 'href', 'src', 'alt'... 
// Qualquer parâmetro que aquele elemento/tag possa receber normalmente, incluindo os
// atributos personalizados 'data-...'

// Note que todo atributo ou valor passado deve ser mencionado dentro de ''

// =============== =============== =============== =============== =============== =============== =============== //
// =============== =============== =============== =============== =============== =============== =============== //
// =============== =============== =============== =============== =============== =============== =============== //

// Assim como posso alterar parâmetros de "style" e setar novos parâmetros diretos
// posso também alterar parâmetros diretos/atributos já existentes, mencionando-os

element.value =                 // Altera o valor de um campo de input
element.placeholder =           // Altera o valor de um placeholder
element.disabled =              // Recebe um teste lógico de retorno booleano para desabilitar algo se o retorno for true
element.checked                 // Funciona como condição de um teste lógico, pode também ser "element[i].checked"
element.scr =                   // Altera o source do elemento
element.alt =                   // Altera o texto alternativo do elemento
element.data = ''               // Altera o parâmetro personalizado do elemento

// Dentre alguns outros