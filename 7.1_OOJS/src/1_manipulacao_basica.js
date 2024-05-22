// Vejamos um pouco sobre a manipulação básica dos dados de objetos
// criarei um objeto simples para exemplo

function Pessoa(name, yo, gender){
    this.nome = name
    this.idade = yo
    this.sexo = gender
}

const pessoa1 = new Pessoa('Rafael', 24, 'Masculino')

console.log(pessoa1.nome);
console.log(pessoa1['nome']);        

// Aqui temos duas maneiras de acessar uma propriedade de um objeto.
// Ateção à sintaxe do segundo caso, uso [''] para chamar o atributo e não uma const
// De toda forma, o primeiro caso é mais utilizado, enquanto o segundo é utilizado quando
// o nome do atributo é armazenado em uma variável (seja lá o que isso signifique) ou 
// quando contém caracteres especiais não reconhecidos pela outra sintaxe

// Ainda poderíamos fazer uma chamada dinâmica de atributos assim:

function exibeAtributo(nomeObjeto, nomeAtributo){
    console.log(nomeObjeto[nomeAtributo])
}
                                        // importante lembrar de passar o atributo entre '', já que estaremos, 
exibeAtributo(pessoa1, 'idade')         // nessa chamada dinâmica, utilizando notação "[]" e não notação "."

// Mas sobre a função, perceba que é extremamente útil, pois otimiza tempo e código
// não precisando mais escrever console.log() em toda exibição

/////////////////////////
//////////////
///////

// Vejamos agora sobre verificações

console.log(typeof pessoa1.nome);             //string
console.log(typeof pessoa1.idade);            //number

console.log(pessoa1 instanceof Pessoa);
const pessoa2 = 'Lucas'
console.log(pessoa2 instanceof Pessoa);

// Nos primeiros dois exemplos utilizamos o operador "typeof" já conhecido
// mas aqui separadamente nos atributos do objeto, e não no objeto em si
// Nos exemplos seguintes utilizamos "instanceof" para perguntar se tal
// objeto é uma instância de tal abstração ou não

// Outro tipo de verificação que podemos fazer é a de atributos e valores
// de maneira mais ampla

console.log(pessoa1)
console.log(Object.values(pessoa1));
console.log(Object.keys(pessoa1));
console.log(Object.keys(pessoa1).length);

// Ao chamar "pessoa1" eu tenho todos os dados desse objeto, mas também posso
// utilizar "Object.values(pessoa1)" para trazer apenas os valores dos atributos
// utilizar "Object.keys(pessoa1)" para trazer apenas os atributos em si
// ou utilizar "Object.keys(pessoa1).length" para trazer a quantidade total de atributos

/////////////////////////
//////////////
///////

// Posso utilizar também uma verificação como condição de true ou false, Veja:

if (pessoa1.nome){
    console.log(`${pessoa1.nome} possui um nome`)
}

// Nesse caso a verificação pergunta se pessoa1 possui o atributo nome,
// se sim, dispara o algoritmo. Claro, eu poderia levar isso além, fazendo
// condicionais de comparação e por aí vai

if (pessoa1.idade >= 18){
    console.log(`${pessoa1.nome} é maior de idade`)
}
else{
    console.log(`${pessoa1.nome} é menor de idade`)
}

/////////////////////////
//////////////
///////

// Um objeto criado como instâcia de uma abstração, costuma ser armazenado em uma constante
// logo é fixo, porém seus atributos são alteráveis de maneira simples, como a reatribuição
// de valor à uma variável, basta declarar "objeto.atributo = novo valor"

pessoa1.nome = 'Joao';
console.log(pessoa1.nome);

// Agora, caso queira que mesmo os valores dos atributos sejam fixos, faço o seguinte

Object.freeze(pessoa1);             // para todos os atributos do objeto
//                                     ou
Object.freeze(pessoa1.nome);        // para um atributo específico

pessoa1.nome = 'Carlos';
console.log(pessoa1.nome);

// Fechamos com essas últimas duas linhas sendo uma entativa falha
// de reatribuição do nome após o freeze