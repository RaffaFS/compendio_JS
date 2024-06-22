// Antes de falarmos sobre "Promises" e programação assíncrona, é importante
// saber que o JS sempre foi síncrono, single thread, ou seja, ele parte por
// parte do código, lê e executa, lê e executa, lê e executa...

// Vamos criar um exemplo para ficar mais claro:

///////////////////////////
// ALGORITMO SEM PROMISE //
///////////////////////////

const frase = document.querySelector('#result')
const btn1 = document.querySelector('#btn1')

let condicao = false
let tempo = 3000

btn1.addEventListener('click', testar1)

function testar1(){
    setTimeout(() => {
        condicao = true
    }, tempo)

    if(condicao){frase.innerText = 'Deu certo'}
    else{frase.innerText = 'Deu errado'}
}

// No código acima eu defino uma variavel booleana com false, digo que após 3 segundos
// seu valor deve mudar para true e, também digo que de acordo com o valor da variável
// um novo texto deve ser exibido na tela.

// O comum é esperar que o texto exibido seja "Deu certo", mas o que acontece aqui é
// que o texto exibido na tela é "Deu errado", isso porque o JS leu que deve disparar
// o algoritmo de setTimeout em 3s, sendo assim ele segue adiante e lê o restante do
// código. Em 3 segundos "condicao" mudará para true, mas ele não espera esse tempo
// para seguir com a execução das próximas linhas, sendo assim, ele lê o if/else
// num momento onde ainda "condicao == false", e executa o bloco else.

// Façamos agora esse mesmo exemplo com o uso de uma promisse:

///////////////////////////
// ALGORITMO COM PROMISE //
///////////////////////////

const btn2 = document.querySelector('#btn2')

btn2.addEventListener('click', testar2)

function testar2(){
    let promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            condicao = true

            if(condicao){
                resolve('Deu certo')
            }
            else{
                reject('Deu errado')
            }
        }, tempo)
    })
    promessa.then((retorno) => {
        frase.innerText = retorno
    })
    promessa.catch((retorno) => {
        frase.innerText = retorno
    })
    frase.innerText = 'Processando...'
}

// Nesse último caso o que acontece é que, com o uso da promisse, o java ainda lê e executa
// tudo em ordem como no primeiro caso, mas ao ler que tem uma promisse é como se ele ligasse
// um "alerta" para o retorno da promisse e, a partir da obtenção desse retorno, ele seguisse
// com o bloco de código configurado. 

// Note que ao executar, a frase muda para "Processando...", que está ao fim do algoritmo, mas
// após trêssegundo a frase se torna "Deu certo", porque a promisse foi resolvida e o bloco
// "promessa.then" foi acionado. Se a promisse fosse rejeitada, o bloco a ser acionado seria o
// "promessa.catch"

//////////////////////////
// ESTRUTURA DE PROMISE //
//////////////////////////

let promessa = new Promise((resolve, reject) => {
    condicao = false

    if(condicao){
        resolve('sucesso')
    }
    else{
        reject('falha')
    }
})
promessa.then((retorno) => {
    retorno
})
promessa.catch((retorno) => {
    retorno
})

// Essa é a estrutura base de uma promisse.
// Na linha 85 temos sua declaração, toda promisse recebe dois argumentos, o primeiro armazenará
// o retorno no caso de sucesso, o segundo armazenará o retorno no caso de falha

// Em seguida descrevo todo o algoritmo que desejo e defino as condições de sucesso e falha

// Por fim crio um bloco "then" e um bloco "catch". O primeiro será executado se a promisse for
// bem sucedida, o segundo será executado se a promisse não for bem sucedida. Além disso, cada
// um deles pode, conforme necessidade, receber um argumento para armazenar o retorno obtido da 
// promisse