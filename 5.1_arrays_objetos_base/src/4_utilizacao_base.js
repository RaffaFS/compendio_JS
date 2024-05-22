// Como os arrays são estruturas de armazenamento de vários dados
// É muito comum que façamos iterações sobre eles, quase uma regra.

const pessoa = ['Rafael', 'João', 'Adilson', 'Roberto']

for(let nome = 0; nome < pessoa.length; nome++){
    console.log(`${pessoa[nome]} é uma pessoa`)
}

// Aqui eu defino o laço e na posição do teste lógico digo que deve se repetir
// enquanto i < "comprimento do array pessoa", sendo o comprimento "4" mesmo
// que o último índice seja "3"

// O algoritmo vai mandar no prompt, para cada loop, uma mensagem contendo
// o nome da pessoa referente ao índice atual do array e o restante da mensagem

// Volto a repetir: geralmente vemos no lugar do que coloquei "nome", "i", assim:

for(let i = 0; i < pessoa.length; i++){
    console.log(`${pessoa[i]} é uma pessoa`)
}

// Na primeira volta pessoa[i] vai ser igual ao que estiver no índice "0" de pessoa
// com  i++ no fim de cada loop, a última volta vai pegar pessoa[i] como ao que
// está no índice "3" (Roberto) de pessoa. i++ ocorre, agora "i == 4", ou seja,
// "i == pessoa.lenght", não mais "<", mas sim "!<", então o laço não prossegue

console.log('////////////////////////////////==========================================')
console.log()

for(let i = 0; i < pessoa.length; i++){
    console.log(`${pessoa[i]} esta no índice ${i}`)
}