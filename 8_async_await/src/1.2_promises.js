// Aqui eu trago apenas uma outra maneira de escrever uma promisse com seus
// blocos de execução

const frase = document.querySelector('#result')
const btn2 = document.querySelector('#btn2')

let condicao = false
let tempo = 3000

btn2.addEventListener('click', testar)

function testar(){
    frase.innerText = 'Processando...'
    promessa()
    .then((retorno) => {
        frase.innerText = retorno
    })
    .catch((retorno) => {
        frase.innerText = retorno
    })
}

// Abaixo eu tenho apenas a promessa dentro de uma função, também poderia estar dentro de uma
// constante como expressão de função anônima, o importante é que conste o "return" nesse caso

// Já acima tenho a função que chama a promisse e, de acordo com o seu retorno segue com um dos
// blocos de execução, sendo que nesse caso eles são "acorrentados" diretamente à função 
// mencionada anteriormente, não precisando a promisse em si ser mencionada antes do "."

function promessa(){
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
    
    return promessa
}

// Existe ainda a possibilidade de trabalhar sem o "then" e o "catch" (mas não sei o quão ok ou
// errado isso é), bastaria colocar as minhas alterações ou algoritmos dos blocos, diretamente
// no if e else. Talvez para alguns casos seja ok, para outros não

/// // Como extra, também vale citar que eu consigo colocar uma promessa num console.log()
/// // para utilizar num Debug por exemplo, sendo que o resultado esperado é "fulfilled"