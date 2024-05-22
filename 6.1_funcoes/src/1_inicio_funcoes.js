// Uma função é basicamente um algoritmo pré-programdo que será executado quando for chamado
// ela é composta por uma "chamada/call" e pelo "algoritmo" interno

// Uma função pode receber um ou mais "parâmetros/argumentos", o que aumenta as possibilidades
// e alcance do algoritmo. Também pode ter "retorno/callback", retornando o resultado do algoritmo.

// Em iterações e laços já temos exemplos de funções sem argumentos e sem retornos
// aqui vamos ver exemplos utilizando essas duas possiveis características

function parImp(num){
    if(num % 2 == 0){
        return 'Par'
    }
    else{
        return 'Ímpar'
    }
}

const numero = parImp(5)
console.log(numero)
//ou
console.log(parImp(22))

// Nesse caso temos na linha 10 a abertura da função "parImp" com argumento formal "num"
// depois digo que se "o resto da divisão de num por 2 for == 0", retorne "Par", se não
// retorne "Ímpar".

// Na linha 19 armazeno em uma constante o resultado, ou seja, o "return" obtido após a
// chamada de "parImp" com argumento real "5"

// Na chamada, o argumento real ocupa a posição do argumento formal, ou seja, a função
// será executada com "5" no lugar de "num", sobrando "1" na divisão que não é "== 0", 
// logo, parImp retorna "Ímpar".

// Nesse caso estamos rodando no node, mas para integrar com o front bastaria que eu
// criasse algo como:

const element = documet.querySelector('#elemento').value
// e chamasse
const numer = parImp(element)
// comente essas duas linhas para o código anterior rodar em node
// Mas sobre essas linhas, aqui eu selecionei um elemento de input de um HTML fictício
// e, ao chamar a função, ao invés de passar um número eu passo o nome da constante
// seletora, fazendo com que o algoritmo rode com o valor passado no input, pelo usuário

// Um outro exemplo simples:

function soma(n1, n2){
    return n1 + n2
}

console.log(soma(12, 32))

// Como vimos antes, o argumento real substitui o argumento formal na chamada da função
// então a execução é feita levando em conta essa substituição e retorna o resultado
// posso chamar o resultado direto como fiz agora, ou armazenar ele em uma const/let
// para usar depois, como fiz mais acima na outra função