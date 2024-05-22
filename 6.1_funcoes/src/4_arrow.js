// As "arrows" ou, "arrow functions" são funções escritas com outra sintaxe
// pelo fim de otimizar o código de algumas maneiras, primeiro pelo encurtamento
// na declaração, segundo, por reaproveitar os argumentos do escopo pai
// (o que pode ser incômodo em certos casos) e terceiro, por apresentar uma
// leve melhora no desempenho no contexto de callbacks

// Enquanto uma function comum fica como: "function nome(){comando}"
// uma arrow function fica basicamente como: "() => comando"

setInterval(function dizOi(){console.log('Oi')}, 3000)
setInterval(() => console.log('Oi oi'), 3000)

// As arrows são especialmente úteis quando escrevemos funções internas a
// outro algoritmo como no caso acima pois não precisamos declarar 
// "function" nem "nome" pois não precisarão de um callback direto

// Também se faz irrelevante o uso de {} para quando temos uma única
// instrução dentro da função

// Quando não estiverem como funções internas, as arrow functions sempre
// serão escritas como "expressão de função"



///////////////////////////////
// ___EXPRESSÂO DE FUNÇÂO___ //
///////////////////////////////

// Chamamos assim as funções declaradas dentro de constantes, estas não
// possuem nomes próprios, são armazenadas dentro de constantes ou variáveis
// com nomes e estes serão chamadas no callback para execução

// Expressões de função recebem a palavra function, argumento se houver
// e o bloco do algoritmo a ser executado

// Sobre seu comportamento: enquanto as funções declaradas da maneira
// convencional são içadas para o topo do escopo, podendo assim terem seu
// callback antes mesmo da sua declaração, as expressões de função precisam
// ser escritas antes de serem chamadas no código

// Além disso, o fato de poder atribuir uma função anonimamente com uma
// expressão de função é algo que encaixa muito com as arrow functions


// Declaração de função
function minhaFuncao0(nome){
    return `Olá ${nome}`
}
console.log(minhaFuncao0('Alberto'))

// Expressão de função
const minhaFuncao1 = function(nome){
    return `Olá ${nome}`
}
console.log(minhaFuncao1('Bruna'))


// Abaixo teremos a mesma função escrita como expressão e com o uso de arrow

const minhaFuncaoArrow = nome => `Olá ${nome}`
console.log(minhaFuncaoArrow('Carlos'))

// A sintaxe mais limpa de uma arrow function seria "() => comando" como já
// citado acima, se faz desnecessário o uso de "{}" para um comando único,
// porém, se usadas, o algoritmo rodará da mesma maneira, enquanto que, ao
// passar mais de um comando à ser executado, o uso de "{}" volta a ser
// obrigatório para delimitar o bloco

// "return" não deve ser usado em comandos únicos como o exemplo acima, porém
// em casos onde fazemos um bloco de algoritmo com mais de um comando, o
// "return" volta a ter sua utilidade comum

// Caso a função precise receber argumentos, basta declara-los dentro de "()"
// e nos casos da função receber um único argumento o uso de "()" também se
// torna opcional



///////////////////
// ___OBJETOS___ //
///////////////////

// Vejamos agora o básico sobre as arrow functions com objetos, primeiro sobre
// a criação de um objeto com uma arrow function numa expressão de função:

const objeto = (x, y, z) => ({altura: x+'cm', largura: y+'cm', comprimento: z+'cm'})
const cubo = objeto(5, 5, 5)
console.log(cubo)

// Com a função acima poderíamos criar diversos objetos de dimensões variadas
// É importante notar que, para o caso de objetos, numa arrow function, devemos
// passá-los dentro de "()", sendo então "const nome = () => ({atributo: valor, ...})"

// Além disso devemos nos atentar ao tratamento de "this" dentro de uma arrow, 
// que é diferente de quando "this" está dentro de uma função convencional
// Essa atenção vem especialmente para a criação de objetos, falaremos mais
// deles mais a frente, mas por enquanto, veja:

const carro = {
    velocidadeAtual: 80,
    acelerar: function(){
        console.log(this)
        this.velocidadeAtual += 10
    },
    frearBruscamente: () => {
        console.log(this)
        this.velocidadeAtual -= 30
    }
}

carro.acelerar();
carro.frearBruscamente();
console.log(carro.velocidadeAtual)

// Nesse caso eu declaro um objeto comum com um atributo e dois métodos, sendo
// um destes, escrito com uma arrow. Note pelo console que a "velocidadeAtual"
// que temos como resposta é 90, ou seja, embora eu chame os dois métodos, o
// único que teve uma execução correta foi o "acelerar", pois se "frearBruscamente"
// tivesse sido executado teríamos uma resposta de 60

// Isso acontece porque o "this" dentro de uma arrow function trabalha de maneira
// não convencional. Enquanto no método acelerar, o this aponta para "carro"
// (escopo pai), ou seja, "this.velociadeAtual" capta 80; no método frearBruscamente
// o this aponta o para "window" (escopo global), ou seja, ele tenta captar o atributo
// fora do escopo de carro, não consegue por não existir algo assim e, mesmo que
// existisse, não alteraria o valor de "velocidadeAtual" dentro de carro

// Justamente por isso evitamos utilizar arrow functions em OOP