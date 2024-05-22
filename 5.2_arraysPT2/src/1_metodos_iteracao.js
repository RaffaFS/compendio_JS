// Agora que já aprendemos o básico da declaração e manipulação de arrays
// vamos à um próximo passo, vamos ver alguns métodos nativos mais complexos

// É importante dizer que, fazendo o uso de recursos mais recentes do 
// ECMA Script (ES6+) pode ser necessário o uso de algum tipo de plug-in
// como o Babel, por exemplo, para fazer a "transpilação" e aumentar a 
// compatibilidade do código com os navegadores.

//////////////////////////////
// _____MÉTODO FOREACH_____ //
//////////////////////////////

// Em Resumo, forEach é um método de laço/loop 

const conhecidos = ['João', 'José', 'Wanderleisson'];
conhecidos.forEach(function(nomeConhecido){
    console.log(`Ah, claro que conheço o ${nomeConhecido}!`)
})

// Chamo o array seguido do método, passando uma função e um argumento formal
// "forEach" faz com que a função seja disparada uma vez para cada "índice" do array
// O argumento passado, automaticamente armazena o valor do índice atual

// Outra coisa que poderíamos fazer é passar um segundo e um terceiro argumento
// Esse segundo armazenará o índice em si e o terceiro todos os elementos do array

conhecidos.forEach(function(nomeConhecido, indiceAtual, grupo){
    console.log(`#${indiceAtual} de ${grupo} - Ah, claro que conheço o ${nomeConhecido}!`)
})

//////////////////////////
// _____MÉTODO MAP_____ //
//////////////////////////

// O método "map", assim como forEach, é um método de iteração, porém
// a diferença é que este retorna os resultados no formato de um novo array,
// ou seja, usarei forEach quando precisar iterar sobre os elementos e
// realizar alguma operação em cada um, mas sem a necessidade de armazenar
// todos os resultados

// Utilizarei "map" quando a ideia for iterar, disparar um algoritmo e
// em seguida, armazenar TODOS os resultados, sendo que cada resultado
// ficará, no novo array, na mesma posição (terá o mesmo índice) 
// que o elemento original. Veja como funciona:

const numeros = [4, 10, 450];
const numerosAoQuadrado = numeros.map(function(numero){
    return numero*numero
})
console.log(numeros)
console.log(numerosAoQuadrado)

// Esse acima é um exemplo bem básico onde defino um array "numeros"
// E em seguida uma constante "numerosAoQuadrado" que deverá armazenar
// o map de numeros

// Chamo o array seguido do método passando uma função e um argumento
// formal (que sendo necessário poderiam ser até 3 como em forEach)
// que armazenará o valor do índice atual, e peço para que retorne
// esse valor*ele mesmo para cada elemento

// Veja agora um outro exemplo:

const estudantes = ['Maria', 'Ana', 'Filó'];
const estudantesDados = estudantes.map(function(nomeEstudante){
    return{
        nome: nomeEstudante,
        UF: 'Santa Catarina',
        curso: 'Ciências Contábeis',
    }
})
console.log(estudantes)
console.log(estudantesDados)

// Nesse caso o que quero fazer é criar, para cada elemento, um objeto simples
// que tem as mesmas características que os demais, diferentes apenas no nome,
// e armazenar estes objetos em um novo array

// A base de uso e a sintaxe são exatamente as mesmas, o que muda é o return
// e o local onde insiro o argumento real



///////////////////////////
// _____MÉTODO FIND_____ //
///////////////////////////

// Utilizamos esse método em casos onde temos arrays muito extensos ou,
// em caso onde não temos acesso direto ao array desejado. Assim, utilizamos
// "find", para encontrar determinado elemento, por algum atributo específico
// ao invés de pelo índice. Ao menos, esse é o uso "recomendado".

// Como nos outros casos, o primeiro argumento armazena o "elemento atual"

const ana = estudantesDados.find(function(pessoa){
    return pessoa.nome == 'Ana'
})
console.log(ana)

// Repare que eu armazeno o resultado dentro da const "ana", que nesse caso
// não haveria necessidade de existir, por se tratar de um retorno de valor
// único que poderia ser usado logo a partir do return, mas enfim.

// Nesse caso peço como retorno "o primeiro item que passar no teste lógico",
// Sendo o texte lógico: "atributo nome == Ana". Ao tratar de pessoas com esse
// método uma boa opção é utilizar o CPF, que não se repete.

// Em casos de nada corresponder ao pedido, teremos "undefined" como resposta
// Também temos "findIndex" que ao uso retornará o índice correspondente ao invés
// dos dados do objeto. Nesse caso, não encontrando nada, o retorno será de "-1"



///////////////////////////////////////////
// _____MÉTODO EVERY, SOME E FILTER_____ //
///////////////////////////////////////////

const todosDeSC = estudantesDados.every(function(dado){
    return dado.UF === 'Santa Catarina' && dado.curso === 'Ciências Contábeis'
})
console.log(todosDeSC)

// ___EVERY
// O "every", tal qual o find, realiza um teste lógico em cada elemento do array
// A diferença é que "every" não para no primeiro elemento que retornar um true
// para o teste, ele segue até o fim e então retorna um "boolean", "true" caso
// TODOS os elementos passem no teste lógico e "false" caso algum não passe

// ___SOME
// O "some" trabalha de maneira similar ao every, o que muda é que para "some"
// retornar "true", basta que um único elemento passe no teste lógico

// ___FILTER
// O "filter" é aplicado da mesma maneira que os outros dois, e o que faz é realizar
// o teste lógico em cada elemento e, ao invés de retornar um boolean, retorna os
// dados de cada elemento que passou no teste



/////////////////////////////
// _____MÉTODO REDUCE_____ //
/////////////////////////////

// O "reduce" reduz o conteúdo de um array em um único valor, podendo fazer isso
// tanto com tipos "number" quanto com tipos "string" ou atributos de "object"

// Para números ele efetuará uma soma e retornará o resultado. Claro que há como
// fazer isso também criando uma variavel de acumulação com valor inicial de 0
// e em seguida um laço "for" com algoritmo "acumulador += numbers[i]", porém
// o reduce otimiza isso.

const soma = numeros.reduce(function(resultado, item){
    resultado += item
    return resultado
}, 0)
console.log(soma)

// Na function de "reduce", o primeiro argumento armazenará o acumulador e,
// o segundo, o item atual. No final do algoritmo há um zero, aquele é o
// valor inicial do acumulador

// Novamente, nesse caso também é de minha escolha fazer o armazenamento do
// resultado dentro de uma nova constante, embora seja sempre uma boa prática
// já que as consts permitem o armazenamento de métodos

const todosEstudantes = estudantesDados.reduce(function(resultado, item){
    resultado += `${item.nome} `;
    return resultado
}, '')
console.log(todosEstudantes)

// Esse último exemplo é do "reduce" para objetos. Lembre-se, se faz necessário
// para o caso de objetos, a escolha de um dado específico, nesse caso o atributo
// escolhido foi nome, que é chamado então dentro de uma string dinâmica.

// No restante a sintaxe e organização do algoritmo permanece a mesma, com a 
// exceção do último parâmetro de reduce que antes, para os números, era um "0",
// e agora, para itens de objetos, será "''" que representa uma string vazia

// Para realizar reduce em um array de strings eu mencionaria "item" como fiz
// no exemplo de numbers e utilizaria '' de string vazia, como fiz aqui