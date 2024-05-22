// É immportante que já tenha visto e entendido toda a "parte 1" de OOJS
// De toda maneira, deixarei uma pasta com os arquivos do que aprendemos
// na "parte 1" para efeito de comparação com os novos códigos.

// Aqui veremos algumas sintaxes e estruturas mais recentes que facilitam
// e/ou otimizam o código. Tudo começa com a declaração de uma "class",

// Uma "class" pode ser utilizada sem um construtor, mas ela ou vai ter
// o mesmo uso de uma função comum (o que não faz o menor sentido de uso)
// ou será útil caso herde as propriedades de outra "class", tendo em si
// tais propriedades e ainda permitindo a adição de novos atributos, como 
// no exemplo abaixo

class Pokemon {}
const pikachu = new Pokemon();

pikachu.nome = 'Pikachu'
pikachu.tipo = 'Elétrico'

console.log(pikachu);

// Note que, apenas a linha 12 já me abre a possibilidade de criar várias
// instâncias de "Pokemon", apesar de que todas estas estarão vazias a
// princípio, e poderão ser prenchidas declarando "objeto.atributo = valor"

// Vejamos então um exemplo de uso mais completo e comum de "class":

class Personagem {
    constructor(nomePersonagem, idadePersonagem){
        this.nome = nomePersonagem
        this.idade = idadePersonagem
    }
}
const naruto = new Personagem('Naruto(shippuden)', '17 anos');
const kakashi = new Personagem('Kakashi(shippuden)', '31 anos');

console.log(naruto);
console.log(kakashi);

// Aqui já conseguimos ver melhor o equivalente a uma "abstração pós ES6"
// 1. a princípio, apenas substituímos a palavra reservada "function" pela "class"
// 2. ao invés de declararmos diretamente para a classe, os argumentos formais
//    que captarão os argumentos reais como valores dos atributos do objeto,
//    abrimos o bloco de propriedades do objeto e, nele, declaramos um "constructor()"
// 3. declaramos também os argumentos formais para constructor
// 4. dentro de constructor fazemos a construção dos atributos como de costume
//    faziamos nos objetos pré ES6

// Após isso faço a criação dos obejetos "naruto" e "kakashi" a partir da 
// abstração "Personagem".

// Vejamos agora a criação de métodos dentro das classes

class Guerreiro {
    constructor(tipoGuerreiro, LvGuerreiro){
        this.tipo = tipoGuerreiro
        this.lv = LvGuerreiro
    }

    atacar(nomeAtaque){
        console.log(`${this.tipo} atacou com ${nomeAtaque}`)
    }
}
const viking = new Guerreiro('Viking', '18');

console.log(viking)
viking.atacar('machadada')

// Como pode ver, as coisas aqui também foram simplificadas, não sendo necessário
// mencionar "this" antes da declaração do método, que também já pode ter o bloco
// de algoritmos aberto logo após a declaração de "nomeMetodo(argumento)" diferente
// das versões mais antigas onde tínhamos "this.nomeMetodo = function(argumento){}"