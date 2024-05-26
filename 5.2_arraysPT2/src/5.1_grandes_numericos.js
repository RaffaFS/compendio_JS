// As vezes queremos criar um extenso array numérico por n motivos
// por exemplo para utilizar como multiplicador de um número de
// input do usuário para retornar uma tabuada de 1 a 100 daquele
// numero. Não fica otimizado nesse caso criarmos um array assim:

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

// Para melhorarmos isso podemos utilizar a seguinte estrutura:

const vezes = [...Array(100).keys()].map(i => i + 1);

// Para entendermos o código acima vamos destrincha-lo um pouco

const quant = Array(100)
const chaves = quant.keys()
const chavesS = [...chaves] 
const vezess = chavesS.map(function(i){return i+1})
console.log(quant)
console.log(chaves)
console.log(chavesS)
console.log(vezess)

// 1. A palavra reservada "Array" serve para a criação de um Array de
//    espaços vazios e estará praticamente sempre armazenada dentro 
//    de uma constante ou variável, então
// 2. "Array(100)" cria um array com 100 espaços vazios "sobrepostos",
// 3. Utilizo o método "keys" em "quant", e armazeno o retorno em "chaves"

// Note que, os números que antes eram índices (0,1,2,...,99) dentro
// de "quant", agora, dentro de chaves foram armazenados como valores,
// por enquanto estes números não estão em um array,então

// 4. "...chaves" faz com que os valores obtidos por quant.keys()
//    se espalhem, e por estarem dentro de [], isso se transforma em
//    um array que é armazenado em "chavesS"

// Agora possuo um array que tem os VALORES de "0 a 99", tal como tem
// a mesma numeração para seus índices

// 5. Por fim, itero com o método map sobre "chavesS" dizendo que para
//    cada valor (i), eu quero que ele me retorno "valor + 1" assim tenho
//    um novo array com os valores de "1 a 100", armazenado em vezess

// // // // //

// A linha 9 é apenas uma simplificação de tudo isso, onde passo todos
// os métodos em iterações numa mesma linha, criando um único array
// já com o resultado final que desejo, vejamos ela novamente:

const vezesss = [...Array(100).keys()].map(i => i + 1);

// "Array(100)"" cria o array com 100 espaços vazios; "keys()"" pega os 
// índices desses espaços e "..." espalha esses indíces dentro e "[]", 
// deixando-os agora como valores de um array que recebe o método "map",
// esse método faz a iteração de receber "valor" e retornar "valor + 1"
// para a posição do valor inicial, me deixando agora então com uma
// modificação do array recém formado, e é esse conjunto de valores
// modificados, "1 a 100" (que até há pouco eram "0 a 99"), que são
// armazendos em vezesss

// Outra diferença que se nota aqui é o algoritmo interno de map, onde
// utilizei uma arrow function ao invés de uma função tradicional