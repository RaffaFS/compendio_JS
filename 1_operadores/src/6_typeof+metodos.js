// typeof é um operador que retorna o tipo de dado que
// uma variável, constante ou expressão armazena

const v = 4                         // number
const w = '4'                       // string
const x = 2 == 4                    // boolean (true ou false)
const y = [3, 'rafa', w]            // object (objetos e arrays)
const z = function calc(){}         // function

console.log(typeof u)
console.log(typeof v)
console.log(typeof w)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

// No começo pode se perguntar onde usará isso, mas no futuro, poderá voltar
// para cá pois sentirá a necessidade da utilidade que o typeof tem
// Possivelmente em momento que precisar de verificações ou validações

//////////////////////////////////////////////
// // // Métodos de cada tipo de dado // // //
//////////////////////////////////////////////

// Sabendo os tipos de dados, podemos agora tmbém aprender o que podemos fazer
// com cada um deles. Essa parte é na verdade um conjunto de anotações que devem
// ser estudadas apenas depois de ter visto sobre as funções. Está aqui já, pois
// estamos falando sobre tipos de dados e eu não queria criar uma pasta nova só
// para isso.

// Veremos sobre os métodos de funções, objetos e arrays nos próprios materiais
// aqui trarei uma listagem de métodos apenas para string, number e boolean

//////////////////
// ___STRING___ //
//////////////////

const str = 'string'

str.length()                            // Retorna o comprimento da string
str.charAt(index)                       // Retorna o caractere na posição especificada
str.substring(startIndex, endIndex)     // Retorna uma substring entre as posições especificadas
str.substr(startIndex, length)          // Retorna uma substring com base no índice de início e no comprimento desejado
str.slice(startIndex, endIndex)         // Retorna parte da sting, desde o índice de início até, mas não incluindo, o índice de fim
str.split(separator)                    // Divide a string em um array de substrings com base no separador (char existente na string)
                                        // por exemplo "str.split('/')" para str = 24/12/2032  
str.concat(str2)                        // Concatena duas strings e retorna uma nova string
str.toLowerCase()                       // Converte todos os caracteres da string em letras minúsculas
str.toUpperCase()                       // Converte todos os caracteres da string em letras maiúsculas
str.trim()                              // Remove os espaços em branco do início e do final da string
str.replace(oldValue, newValue)         // Substitui uma substring por outra na string
str.indexOf(substring)                  // Retorna o índice da primeira ocorrência da substring na string
str.lastIndexOf(substring)              // Retorna o índice da última ocorrência da substring na string
str.includes(substring)                 // Verifica se a string contém a substring especificada
str.startsWith(substring)               // Verifica se a string começa com a substring especificada
str.endsWith(substring)                 // Verifica se a string termina com a substring especificada

//////////////////
// ___NUMBER___ //
//////////////////

const num = 32

num.toString()              // Converte um número em uma string, permitindo especificar a base numérica
num.toFixed(decimais)       // Arredonda para a quantidade de casas decimais passada no argumento, se vazio
                            // arredonda para o inteiro mais próximo (retorna como string)
num.parseFloat()            // Analisa uma string e retorna um número de ponto flutuante (com decimais se houver)
parseFloat(num)
num.parseInt()              // Analisa uma string e retorna um número inteiro (arredondando se houver decimais)
parseInt(num)

Math.abs(num)               // Retorna o valor absoluto de um número (distância entre ele e o ponto 0)(abs de -5 é 5)
Math.ceil(num)              // Arredonda um número para cima para o inteiro mais próximo
Math.floor(num)             // Arredonda um número para baixo para o inteiro mais próximo
Math.round(num)             // Arredonda um número para o inteiro mais próximo
Math.max(num)               // Retorna o maior número de um conjunto de valores (array)
Math.min(num)               // Retorna o menor número de um conjunto de valores (array)
Math.sqrt(num)              // Retorna a raiz quadrada de um número.
Math.random(num)            // Retorna um número "pseudoaleatório" de 0 à 0.999... (esse random e esse pseudoaleatório
                            // tem uma nota para cada um logo abaixo)

///////////////////
// ___BOOLEAN___ //
///////////////////

// Não possuem "métodos" como o resto dos tipos e, como dito anteriormente
// Veremos sobre os métodos de funções, objetos e arrays nos próprios arquivos

//////////////////////////////////////////////////////////////////
// // // // // // // Nota sobre Math.random() // // // // // // //
//////////////////////////////////////////////////////////////////

// Sobre o uso geral desse método, ele funciona como um "sorteador de números"
// de 0 até 0.999...(infinito), sendo assim o uso mais comum desse método é:

const aleatorio1 = Math.floor(Math.random() * 20) + 1

// Antes de qualquer coisa substitua "20" pelo número máximo de possibilidades 
// desejadas, depois disso, vejamos o que está acontecendo:

// 1. Math.random vai pegar um número de 0 ao infinito (menor de 1) de casas decimais
// 2. Esse número será multiplicado pelo numero máximo de possibilidades
// 3. Math.floor arredondará o resultado e somará 1

// Isso quer dizer que o menor número obtido após o passo 2 é "0" e o maior é "19.999..."
// o primeiro arredondado para baixo e somando 1 se torna um, o segundo, na mesma
// operção, se torna 20, ou seja, terei um retorno pseudo aleatorio de 1; 2; 3; 4; 5; 6;
// 7; 8; 9; 10; 11; 12; 13; 14; 15; 16; 17; 18; 19; 20

// Além disso, inicialmente poríamos pensar que seria possível otimizar a operação assim:

const aleatorio2 = Math.ceil(Math.random() * 20)

// Porém aqui existe um problema, veja: ao invés de arredondar o número de infinitas 
// casas decimais, para baixo e então somar 1, apenas arredondo este para cima, nesse
// caso, 19.999... se torna 20 e 0.000...1 se torna 1, mas ná QUASE impossível 
// possibilidade de sair 0, ele não se torna 1, continua 0

// Logo não teríamos as possibilidades de 1 à 20, mas de 0 a 20 e, mesmo que quiséssemos
// a possibilidade de ter o "0", essa não é melhor prática, pois como citado, isso é
// quase impossível de acontecer nesse algoritmo, o melhor seria fazer o seguinte:

const aleatorio3 = Math.floor(Math.random() * 21)

// Assim como o que comentei antes, uma aparente alternativa seria o código abaixo, mas,
// pensando novamente na quase impossivel possibilidade de random retornar "0", esse,
// no final se tornará "-1", o que não desejamos

const aleatorio4 = Math.ceil(Math.random() * 21) - 1

//////////////////////////////////////////////////////////////////////////////
// // // // // // // Nota sobre pseudoaleatoriedade no JS // // // // // // //
//////////////////////////////////////////////////////////////////////////////

// Falamos de pseudoaleatoriedade e não aleatoriedade para esses algoritmos pois eles
// são determinísticos, disparados a partir de uma "semente inicial", e dela sai o 
// primeiro número e os seguintes baseados em cálculos diversos, ou seja, com a semente 
// em mãos poderíamos obter uma sequência numérica idêntica quantas vezes fossem necessárias.

// A ideia é que algo realmente é aleatório seria algo completamente "imprevisível e natural"

// Essa semente pode ser gerada a partir de um conjunto de fatores como: tempo atual,
// posição do mouse do usuário, utilização do teclado, e outros valores dinâmicos.
// Math.random() do JS geralmente utiliza uma semente baseada no relógio do sistema e
// outras fontes de entropia disponíveis no ambiente de execução.