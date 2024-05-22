// O conceito inicial de objetos é muito parecido com o de arrays
// Basicamente uma constante ou variável que guarda vários valores

// Porém enquanto as "keys/chaves" dos arrays são formadas por um
// índice pré estabelecido, essas "keys" nos objetos são na verdade
// "atributos" que, por sua vez, são passados pelo programador

const fullstack = 'cuso completo das tecnologias de front-end + back-end'
const analiseS = 'curso completo sobre análise de sistemas'

const arrayAluno = ['Rafael', 24, fullstack]
console.log(arrayAluno)

// Esse é um array comum comportando algumas informações

const objetoAluno = {
    nome: 'Amanda',
    idade: 22,
    curso: analiseS
}

console.log(objetoAluno)

// Este é um objeto com a mesma função, porém claramnte mais legível
// e acessível graças aos atributos que substituem o padrão de índice

// Os objetos também nos permitem guardar funções que, dentro deles
// passamos a chamar de métodos, veja:

const objetoAluno2 = {
    nome: 'Raquel',
    idade: 26,
    curso: analiseS,

    media(n1, n2, n3, n4){
        return (n1+n2+n3+n4) / 4
    }
}

console.log(objetoAluno2)
console.log(objetoAluno2.media(4,2,9,7))

// Para finalizar com os primeiros passos de objetos, também tem mais
// uma coisa que podemos fazer, "instâncias", criar uma "forma" de objeto
// para prencher depois com conteúdo que quisermos, é mais ou menos como
// escrever uma receita de bolo com os ingredientes mas sem mencionar
// as quantidades, sempre que usar a receita eu terei um bolo, porém
// o resultado do bolo fica a depender das porções que coloquei de 
// cada ingrediente. Veja:

function Aluno(nome, yo, curso){
    this.nome = nome
    this.idade = yo
    this.curso = curso

    this.calcMedia = function(n1, n2, n3, n4){
        this.media = (n1+n2+n3+n4) / 4
    }
}

const jeremias = new Aluno('Jeremias', 41, analiseS)

jeremias.calcMedia(8,7,8,7)
console.log(`${jeremias.nome} teve a média de ${jeremias.media}`)

// Esse é um exemplo básico do que chamamos de abstração (linhas 51 à 59)
// A tal receita que eu comentei, enquanto o objeto em si está sendo criado
// na linha 61.

// Montamos uma abstração com "function nomeAbstracao(argumentos){}"
// Depois dizemos: "this.atributo = argumento" para cada atributo que
// desejamos que seja definido já no momento da criação do objeto

// Da linha 56 à 58 passo um método (calcMedia) com a sintaxe esperada e digo
// que para "this" deve ser criado o atributo "media" de valor "tal (cálculo)"

// Na linha 61 faço a criação do objeto, armazenando ele dentro de uma const
// e utilizando a "forma" de criação quando chamo new "nomeAbstracao" e passo
// os argumentos reais para substituir os argumentos formais.

// Na linha 63 chamo o método para o objeto jeremias e em seguida peço a
// exibição de dois atributos do objeto jeremias com um texto dinâmico ``