// Composto por "inicialização", "teste lógico" e "incremento", uma estrutura de repetição
// com "variável de controle" é aquela nossa velha conhecida:


const btn3 = document.querySelector('#btn3')
btn3.addEventListener('click', algoritmo3)

function algoritmo3(){
    const elemento = document.querySelector('#texto3')

    for (let i = 0; i < 10; i++){
        elemento.innerText += ` Loop ${i+1}`
    }

    const novoElemento = document.querySelector('#container3')
    novoElemento.innerHTML += '<h2>Fim do Laço/Loop</h2>'
}

// A estrutura de repetição aqui é apenas o "for", onde eu defino os 3 itens que citei lá em cima
// 1. Aqui "i" é o nosso contador que inicialmente recebe "0", 
//    nomeei assim pois é comum vermos "i" nesse caso, representando 
//    a "posição no índice", enfim, poderia ter qualquer outro nome
// 2. Novamente, enquanto "i < 10" o algoritmo interno deve rodar
// 3. i++ adicionará uma unidade à "i", porém isso só ocorrerá após
//    a execução do algoritmo interno de for
// 4. O algoritmo roda, "i" é incremeentado em 1, o teste é feito 
//    novamente, dessa vez i == 1, ainda < 10, então o algoritmo continua 
//    se repetindo até i == 10, ou seja, i !< 10 e aí o teste lógico da falso.
// 5. Daí em diante, havendo mais do algoritmo pai a ser executado,
//    nesse caso, da função "algoritmo3", a execução prossegue 
//    fora do laço, fora do bloco "for"