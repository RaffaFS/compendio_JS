// Sabendo o que já aprendemos nos arquivos anteriores sobre o funcionamento
// e utilização principal dos arrays, existe uma maneira mais otimizada para
// utilizarmos o  "for" com arrays e objetos, lembrando, essa maneira só
// funciona com arrays e objetos, não com outros tipos de dados únicos

const pessoa = ['Rafael', 'João', 'Adilson', 'Roberto']

for(let i in pessoa){
    console.log(`${pessoa[i]} está no índice ${i}`)
}

// Funciona aqui da mesma maneira que o for mais completo, é apenas uma 
// otimização do código para arrays/objetos mesmo

// "Para cada 'i' em 'pessoa' faça{}"