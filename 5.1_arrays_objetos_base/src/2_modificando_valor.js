// Temos duas maneiras simples de atribuir um novo valor à um array

const num = [9, 'rafael', 2]
console.log(num)

num.push(7)         // array.push() cria um novo espaço e aloca nele o valor passado
num[2] = 6          // aqui, referencio o array, e um índice, se esse índice não existir
console.log(num)    // será criado com o valor passado; se existir, o valor atual será substituído

// Caso eu force a crianção de um novo espaço, longe dos espaços existentes
// meu array apresentará "itens vazios", veja:

num[6] = 1
console.log(num)

// Nesse caso, o índice do último item existente era "3", alocando um item no índice "6"
// faz com que tenhamos "2 itens vazios", nos espaços de índice "4" e "5"