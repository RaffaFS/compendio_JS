// Vejamos agora rapidamente sobre métodos que podemos utilizar em promises

const p1 = new Promise((resolve, reject)=>{
    resolve('p1 ok')
})
const p2 = new Promise((resolve, reject)=>{
    resolve('p2 ok')
})
const p3 = new Promise((resolve, reject)=>{
    resolve('p3 ok')
})

// Acima eu crio 3 promessas e o comum seria resolver uma à uma com callbacks
// únicos, mas o que posso fazer também é utilizar o "Promise.all"

Promise.all([p1, p2, p3]).then((retorno)=>{
    console.log(retorno)
})

// Assim eu evito de ter que mencionar as promessas uma a uma da maneira padrão
// como fizemos em 1.1_promises.js. Aqui eu passo todas as promisses dentro de um
// array com o método Promise.all e então encadeio o then diretamente nesse método
// sendo assim, o meu retorno virá com o resolve de todas elas de uma só vez

/// //

// Parecido com o "Promise.all", temos também o "Promise.race", como podemos ver
// abaixo a configuração é a mesma, o que muda é que enquanto "all" traz como
// retorno o resolve de todas elas, "race" trará como retorno apenas o resolve
// daquela que foi resolvida primeiro (nesse caso será sempre a p1, mas lidando
// com APIs o resultado pode variar bastante). Um dos casos de uso é quando quero
// um resultado rápido para o usuário ou não quero correr o risco de puxar API de
// um site que esteja fora do ar ou coisa parecido, então faço requisições de 
// algumas fontes diferentes de uma só vez.

Promise.race([p1, p2, p3]).then((retorno)=>{
    console.log(retorno)
})