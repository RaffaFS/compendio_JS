// Aqui eu tenho uma outra maneira de trabalhar com os arrays
// Essa formatação de código é útil para quando eu tenho que trabalhar com 
// vários arrays e vou utilizar um método mais de uma vez

// A ideia é criar métodos reutilizáveis, enxugando o código e o deixando 
// mais organizado e com o uso de callback para os métodos

//////////////////////
// _____ARRAYS_____ //
//////////////////////

// Primeiro façamos a criação dos arrays que utilizaremos como exemplo

const conhecidos = ['João', 'José', 'Wanderleisson'];
const estudantes = ['Rafael, Lucas, Pedro']
const numeros = [4, 10, 230, 12];
const idadeEstudantes = [18, 19, 19, 23, 22, 19, 18, 17, 20, 20];

///////////////////////
// _____FUNÇÕES_____ //
///////////////////////

// Aqui é importante lembrar e/ou entender, que todo método é basicamente
// um algoritmo de interpretação de função, ou seja, tudo que eu criei no
// documento anterior eu criarei aqui abaixo e posso criar em qualquer
// outro lugar apenas como "function"

function numeroXNumero(numero){             // map
    return numero*numero
}
function todosMaiores(){                    // every (sem argumentos pois trato de um array simples, não objeto)
    return idadeEstudantes >= 18
}
function reduceNumber(resultado, item){     // reduce
    resultado += item;
    return resultado
}
function reduceString(resultado, item){     // reduce
    resultado += item
    return resultado
}

// Depois de criadas as funções já tendo em mente com qual método
// utilizarei cada uma, realizo os callbakcs de maneira simples

/////////////////////////
// _____CALLBACKS_____ //
/////////////////////////

// Note que estou armazenando os callbacks dentro de constantes para
// poder chamar o resultado depois (sim, um callback dum callback...)

// Porém o que importa é que perceba que
// 1. declaro uma constante
// 2. menciono o array target seguido do método
// 3. realizo o callback da função e, nesse momento é como se eu estivesse
//    pegando todo o algoritmo mencionado, desde function até a última "}",
//    e colocando ele ali dentro do "()" "pós método". O que, caso fosse feito
//    manualmente, daria para perceber que ficaria identico ao uso de um método
//    qualquer do documento anterior, e é isso que acontece (sem que vejamos)

const numeroQuadrado = numeros.map(numeroXNumero)
const todosDeSC = idadeEstudantes.every(todosMaiores)
const soma = numeros.reduce(reduceNumber)
const todosEstudantes = estudantes.reduce(reduceString)

////////////////////////////////
// _____CHAMADAS CONSOLE_____ //
////////////////////////////////

// Aqui abaixo faço a chamada final de cada resultado armazenado
// Lembrando: caso eu queira reutilizar um método já escrito, em
// outro array, basta escrever um novo callback logo acima,
// mencionando array, método e callback da função e, depois,
// escrever aqui em baixo a chamada do valor armazenado

console.log(numeroQuadrado)
console.log(todosDeSC)
console.log(soma)
console.log(todosEstudantes)