// A ideia inicial de uma variável composta é comportar vários valores numa mesma variável
// Também chamadas de arrays/vetores, essas estruturas são amplamente utilizada

let arrNome = ['Lucas', 'Rafael', 'Michele', 'Adir']
const familia = ['Shampoo', 'Lucas', 'Rafael', 'Michele', 'Adir']
console.log(arrNome)

// Podemos atribuir um array tanto à "const" quanto à "let", em ambos os casos poderemos
// adicionar, remover e modificar elementos do array, a diferença é que com let podemos
// reatribuir completamente o valor da variável para outro tipo totalmente diferente ou
// até mesmo para outro array:

arrNome = 2
console.log(arrNome)

arrNome = 'Ronaldinho Gaúcho'
console.log(arrNome)

arrNome = familia
console.log(arrNome)

// Em const não podemos reatribuir o valor dessa maneira

///////////////
////////

// Dentro de um array posso colocar quantos elementos desejar
// Um elemento é composto por "nome (espaço de alocação na memória)"
// "valor" (que nesse caso é o próprio nome) e um índice/index ou chave/key

// Lembre-se sempre, o índice sempre começa em "0", então um array com
// 10 elementos definirá para eles os índices 0, 1, 2, 3, 4, 5, 6, 7, 8 e 9