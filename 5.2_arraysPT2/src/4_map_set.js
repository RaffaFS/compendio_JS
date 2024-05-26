// Para início, vamos pensar agora em Array, Map e Set como objetos com
// objetivos diferentes, vamos pensar neles como no seguinte trecho abaixo

const array1 = new Array()
const map1 = new Map();
const set1 = new Set();

// Enquanto que com o array podemos declará-lo diretamente sem o "new Array()"
// para os outros dois isso não é possível, vejamos as diferenças nos baseando
// em um array comum

/////////////////
// ___ARRAY___ //
/////////////////

// 1. É uma lista ordenada de elementos, utilizamos principalmente para quando
//    precisamos fazer a manipulação de listas e seus itens
// 2. Os elementos são acessados através de índices
// 3. Métodos comuns são: "push()", "pop()", "forEach()", "map()", "reduce()"...

///////////////
// ___MAP___ //
///////////////

// 1. Funciona de maneira similar a um array, a diferença aqui é que ao invés de
//    apenas o valor, teremos elementos em pares "chave-valor" e a ordem de
//    inserção das chaves não pode ser alterada de maneira simples
// 2. Os elementos são acessados por suas "chaves"
// 3. Uma chave de elemento pode ser de qualquer "tipo", não apenas string ou number

map1.set("FAZER", "Top Speed de 155km")
map1.set("FAZER", "Top Speed de 153km")
map1.set("R3", "Top Speed de 180km")
map1.set("R1", "Top Speed de 299km")
console.log(map1)

// Acima fazemos o uso do método "set()" 3 vezes, ele recebe dois valores, sendo
// o primeiro a chave e, o segundo o real valor do elemento, criando assim 3
// elementos novos com suas próprias chaves dentro de "map1"
// Poderíamos ter, nome e profissão ou país e PIB, por exemplo, no lugar de modelo 
// e top speed, vejamos o uso de outros métidos comuns agora:

console.log(map1.size);                 // Retorna a quantidade de "items de um map" (similiar ao length)
console.log(map1.keys());               // Retorna as chaves de todos os elementos do map
console.log(map1.get("FAZER"));         // Retorna o valor do elemento cujo a chave foi passada no argumento
console.log(map1.has("R3"));            // Verifica a existência da chave mencionada e retorna um booleano
map1.delete("R1")                       // Deleta o elemento que teve a chave mencionada
map1.clear()                            // Limpa completamente o map
console.log(map1.size)                  // Nova chamada do size() para ver que agora não temos mais nada aqui

//__________________________________________//

// Incluindo novamente os elementos no map1 para os exemplos segintes
map1.set("FAZER", "Top Speed de 155km")
map1.set("FAZER", "Top Speed de 153km")
map1.set("R3", "Top Speed de 180km")
map1.set("R1", "Top Speed de 299km")

// Temos como iterar, sobre os maps também, de maneira muito similar a forma 
// simplificada que utilizamos nos arrays apenas substituímos o "in", pelo "of"

for (let chave of map1.keys()) {
    console.log(chave);
}

for (let valor of map1.values()) {
    console.log(valor);
}

for (let entradas of map1.entries()) {
    console.log(entradas);
}
for (let [chave, valor] of map1.entries()) {
    console.log(`${chave}: ${valor}`);
}

// Acima temos basicamente três tipos de iteração no "map1", a primeira feita
// sobre as chaves do map com "keys()", a segunda feita sobre os valores do map
// com "values()", e a terceira feita sobre as "entradas" do map com "entries()"

// A diferença principal entre elas é a de que enquanto:
// 1. a primeira armazena no argumento as chaves dos elementos
// 2. a segunda armazena no argumento os valores dos elementos
// 3. a terceira armazena o par "chave-valor" no argumento se
//    tiver um argumento único ou, ainda pode ter dois argumentos
//    entre "[]", armazenando assim no primeiro a chave e no
//    segundo o valor do elemento.

// Para o terceiro exemplo, usaremos o primeiro caso para consultas e coisas
// mais simples, e utilizaremos o segundo para uma manipulação mais ampla

// Assim como iteramos com o "for simplificado", podemos também iterar com o "forEach()"
// A diferença é que nele o primeiro argumento (ou único), armazenará o valor

map1.forEach((valor, chave) => {
    console.log(`${chave} é da Yamaha, e nos testes teve um ${valor}`)
})

///////////////
// ___SET___ //
///////////////

// Um "set", como objeto, é algo que está entre um map e um array comum
// 1. Recebe apenas um valor para cada elemento
// 2. Não aceita valores repetidos, tornando-se uma coleção de valores únicos
// 3. Não há acesso direto por índice, apenas pelo próprio valor do elemento
// Graças à essas peculiaridades, um bom uso é para criarmos uma lista onde
// não queremos correr o risco de ter duplicatas, uma lista de CPFs por exemplo

set1.add("67961031065")
set1.add("78702924005")
set1.add("89594170093")
console.log(set1)
console.log(set1.keys())
console.log(set1.values())

// Todos os métodos que vimos no map, podemos usar aqui, o que fazemos de diferente
// é utilizar "add()" ao invés de "set()" para adicionar um elemento

// Além disso, por um "set" possuir um conjunto de valores únicos, posso me referir
// à estes valores tanto como "keys()" quanto como "values()" como no exemplo acima

// Veja um outro bom uso do set:

const familiaDuplicada = ['Rafael', 'Lucas', 'Michele', 'Adir', 'Shampoo', 'Rafael', 'Lucas']
const arrayParaSet = new Set([...familiaDuplicada])
console.log(arrayParaSet)

const familia = [...arrayParaSet]
console.log(familia)

// Aqui, com a ajuda do spread "...", espalho todos os elementos dentro de um novo "Set"
// aramazenado dentro de "arrayParaSet", o Set desconsidera os valores duplicados e,
// depois disso assim criando uma coleção de valores não repetidos, depois apenas espalho
// os elementos de "arrayParaSet" dentro de um array simples em "familia"

