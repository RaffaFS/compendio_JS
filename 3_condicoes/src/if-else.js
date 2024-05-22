// if{} else{}: Esse é o tipo mais clássico de condição para JavaScript
// Uma "estrutura" de condição funciona como um "averiguador" 
// da condição presente de um elemento ou caso.
// Após a averiguação, a estrutura aponta qual trecho de código deve rodar a seguir

// É importante que já tenha entendido as bases do DOM e o conceito de eventos

const btn = document.querySelector('#btn')
btn.addEventListener('click', resolver)

function resolver(){
    const msg = document.querySelector('#resultado')
    const valor1 = parseInt(document.querySelector('#n1').value)
    const valor2 = parseInt(document.querySelector('#n2').value)

    const result = valor1 - valor2
    
    if(result >= 1){
        msg.classList.add('maiorOuIgual')
        msg.innerHTML = `O resultado é ${result}`
    }
    else{
        msg.classList.add('menorQue')
        msg.innerHTML = 'O resultado é menor que 1'
    }
}

// Em resumo, eu capto btn e peço que ele ouça o evento 'click', quando o evento acontece
// capto os valores dos inputs em parseInt (conversão para número inteiro) e o campo do resultado
// Armazeno o resultado da subtração do primeiro valor pelo segundo

// E só aí abro meu primeiro bloco de condição

// 1. Com 'if{}' eu digo: Se determinada condição for verdadeira, execute esse bloco
// 2. Se a condição for falsa, ele pula esse bloco e vai para o próximo
// 3. Como o bloco else não possui nenhuma condição, basta o if ser falso para este ser executado

// Saiba que eu posso também utilizar a condição "if{}" sozinha
// No caso acima, se a condição de if{} for falsa, o bloco de else{} será executado
// Se o bloco else{} não existisse no caso acima, nada aconteceria enquanto fosse falsa a condição de if{}
// Não haveria um erro, bug ou coisa assim, mas também não haveria mudança alguma

const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', multa)

function multa(){
    const vel = parseInt(document.querySelector('#vel').value)
    const l1 = document.querySelector('#line1')
    const l2 = document.querySelector('#line2')
    const l3 = document.querySelector('#line3')
    
    l2.innerText = ''
    l1.innerText = `A velocidade é de ${vel}km/h`
    if(vel > 80){
        l2.innerText = 'você foi multado por excesso de velocidade'
    }
    l3.innerText = `Tenha uma boa viagem`
}

// Veja, este acima é um exemplo, o código lê o if{} e independente dele ser executado ou não
// O algoritmo da sequência às tarefas seguintes.

// 1. Explicando o algoritmo: eu capto para consts, o valor de um 'input' e 3 'h2' inicialmente vazios
// 2. Limpo o texto de l2, se houver (pois dependendo do valor de input, haverá após alguma das execuções)
// 3. Adiciono um novo texto para l1 com a velocidade atual
// 3. Adiciono um novo texto para l2 se a velocidade for maior que 80 (se não, nada acontece com l2)
// 4. Adiciono um novo texto para l3