// Para melhor entendimento se faz necessário ter visto antes os arquivos
// da pasta "5.2_arraysPT2", este arquivo é uma versão otimizada, com o uso
// das "arrow function", dos códigos lá iniciados

// Em arrays e callbacks não há nada de novo, as mudanças ocorrem no bloco
// de "métodos"



//////////////////
// ___ARRAYS___ //
//////////////////

const conhecidos = ['João', 'José', 'Wanderleisson'];
const estudantes = ['Rafael, Lucas, Pedro']
const numeros = [4, 10, 230, 12];
const idadeEstudantes = [18, 19, 19, 23, 22, 19, 18, 17, 20, 20];

///////////////////
// ___MÉTODOS___ //
///////////////////

const textoConhecido = (nomeConhecido, numero) => console.log(`#${numero} - Ah, claro que conheço o ${nomeConhecido}!`)
const numeroXNumero = numero => numero*numero
const everySameUFAndCourse = () => idadeEstudantes >= 18
const reduceNumber = (resultado, item) => resultado += item
const reduceString = (resultado, item) => resultado += `${item.nome} `

// O que há de diferente aqui é apenas a sintaxe de declaração, onde
// eu não tenho uma "declaração de função" e sim uma "expressão de função",
// como vimos em "arrow.js"

// nessa expressão eu passo os argumentos, se houver, e logo em seguida o
// que desejo como return

/////////////////////
// ___CALLBACKS___ //
/////////////////////

conhecidos.forEach(textoConhecido)
const numerosAoQuadrado = numeros.map(numeroXNumero)
const todosMaiores = estudantes.every(everySameUFAndCourse)
const soma = numeros.reduce(reduceNumber)
const todosOsEstudantes = estudantes.reduce(reduceString)

////////////////////////////
// ___CHAMADAS CONSOLE___ //
////////////////////////////

console.log(numerosAoQuadrado)
console.log(todosMaiores)
console.log(soma)
console.log(todosOsEstudantes)