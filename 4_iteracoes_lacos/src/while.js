// Em primeiro lugar: utilizamos estruturas de repetição para executar uma mesma terefa várias vezes
// com um único comando.
// Qualquer algoritmo pode estar dentro de uma estrutura de repetição, sendo ele um algoritmo sequencial
// comum, ou possuindo condições variadas de if{} else{} ou switch/case.

// O que realmente acontece é: uma condição será testada, se ela for verdadeira, o algoritmo do laço
// será executado. Ao fim do algoritmo, ao invés de fechar o bloco, a condição inicial será testada
// novamente, sendo verdadeira o algoritmo é executado novamente e, isso se repete enquanto a condição
// inicial for verdadeira.
// Então, o que realmente importa aqui é como configuramos a iteração/laço, com base em um elemento
// ou valor numérico comum passado

const btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', algoritmo1)

function algoritmo1(){
    const elemento = document.querySelector('#texto1')

    let contador = 0
    while(contador < 10){
        elemento.innerText += ` Loop ${contador}`
        contador++
    }
}

// A estrutura que importa aqui é a partir da linha 19
// As linhas anteriores são apenas a captação de elementos
// e a definição de evento que já aprendemos anteriormente

// 1. Defino uma variável "contador" que recebe o valor inicial de "0"
//    poderia ser outro número, mas iniciar com 0 é mais correto já que
//    no futuro trabalharemos com estruturas que possuem índices 
//    internos e estes sempre iniciam em "0"
// 2. Na linha 20 digo: "enquanto" a variável contador for menor que 10
//    execute o bloco a seguir
// 3. No bloco eu passo um elemento já selecionado e digo que seu innerText
//    receberá ele mesmo (atual) mais "Loop" e o valor atual de contador
// 4. "contador++" como vimos em operadores, irá adicionar uma unidade ao
//    valor de contador. Agora contador == 1, ainda < 10, então o laço
//    roda novamente e assim seguimos

// Rodando o código acima perceberá que embora tenhamos 10 loops o primeiro loop aparece como "Loop 0" e o último como "Loop 9"
// Isso porque o contador inicialmente é == 0, e manteremos assim, mas basta que adicionemos "+1" em ` Loop ${contador+1}` assim

const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', algoritmo2)

function algoritmo2(){
    const elemento = document.querySelector('#texto2')

    let contador = 0
    do{
        elemento.innerText += ` Loop ${contador+1}`
        contador++
    }while(contador < 10)
}

// Essa é outra maneira de escrever o praticamente a mesma estrutura, o que muda é que antes eu tinha o teste lógico
// no começo, agora eu tenho o teste lógico no final. Antes eu dizia "enquanto... faça...", agora digo "faça... enquanto..."
// Além disso, aqui adicionei o "+1" na chamada do contador