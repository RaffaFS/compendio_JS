

const meuArray = ['lucas', 'adir', 'rafael', 'michele', 6, 1]
const mA2 = ['Tiburcio']

// Aqui vai uma listinha de métodos para arrays
// 1. O primeiro grupo são métodos "de ação", digamos assim. Podem ser usados soltos
// da mesma maneira que estão escritos aqui. 

// 3. O terceiro grupo são chamadas de dados, então devem ser usados como parte de um 
// algoritmo ou condição ou, armazenados em uma const/let.

// 2. No grupo do meio, temos métodos que realizam algo, então podem ser escritos soltos
// para modificar o array original mas também retornam dados, podendo então serem escritos 
// como parte de um algoritmo ou como condição/similar, ou serem armazenados em const/let
// como novos arrays/objetos ou valores


meuArray.push(9)            // Como já vimos, cria uma nova posição no fim do array e, nessa, aloca o elemento/item passado
meuArray.sort()             // Organiza o array, primeiro os números de menor para maior, depois o restante em ordem alfabética
meuArray.unshift(5, 2)      // Adiciona no início do array os elementos/itens passados 
console.log(meuArray)

meuArray.shift()            // Remove o primeiro item do array e retorna ele se em um algoritmo ou const/let
meuArray.pop()              // Remove o último item do array e retorna ele se em um algoritmo ou const/let
meuArray.concat(mA2, 7)     // Concatena os valores do array target com os demais valores soltos ou de arrays, em um novo array
meuArray.splice(2, 1)       // A partir do índice passado na primeira posição (2), remove o mesmo número de elementos em ordem
                            // que o número passado na segunda posição (1)
meuArray.slice(2,3)         // A partir do índice passado na primeira posição (2), mantém a quantidade de elementos igual ao
                            // número passado na segunda posição (3)

meuArray.length             // Retorna o comprimento do array (número real de espaços existentes, contando com os vazios se houver)
meuArray.indexOf('adir')    // Busca dentro do array o valor passado e retorna o índice correspondente, se não existir, retorna "-1"
meuArray.includes(9)        // Busca dentro do array o valor passado e retorna um boleano caso exista ou não
console.log(meuArray)
