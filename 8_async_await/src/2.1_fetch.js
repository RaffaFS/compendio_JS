// Após aprendermos sobre promises aprenderemos agora sobre "fetch" que é
// algo muito útil no dia a dia e comummente faz uso de promises.

// O fetch ele vem como um substituto mais moderno "XMLGttpRequest" para
// fazermos requisições de APIs por exemplo.

/// // /   -----   / // ///

// fetch(url, options)
//     .then(response => {

//     })
//     .catch(error => {

//     });

/// // /   -----   / // ///

// Basicamente esse é a sintaxe do fetch, muito parecida com o que vimos
// para as promises. O "fetch" faz uma requisição, e inicia uma promisse,
// quando a requisição for completada, é retornado o bloco then ou o bloco
// catch a depender do resultado.

const username = 'RaffaFS'

fetch(`https://api.github.com/users/${username}`)
    .then(retorno => console.log(retorno))
    .catch(retorno => console.error('houve um problema'))

// Veja de maneira simples ainda o funcionamento de um fetch puxando uma
// API do GitHub, ao mesmo tempo, note que, ao comentar aquele exemplo vazio
// acima e rodar esse pelo node, os dados que recebo são um tanto confusos,
// por isso é interessante que eu formate os dados para ".json"

fetch(`https://api.github.com/users/${username}`)
    .then(retorno1 => {
        return retorno1.json()
    })
    .then(retorno2 => {
        console.log(retorno2)
        return retorno2
    })
    .then(retorno3 => {
        console.log(retorno3.public_repos)
    })
    .catch(retorno => console.error('houve um problema'))

// Agora sim, com esse último algoritmo acima eu consigo encontrar os dados
// que preciso ao rodar o node, como nome, avatar e outros.

// Além disso é um bom momento para comentar sobre o uso de encadeameto de 
// "then", que como deve ter percebido, utilizei três deles desta vez e,
// na teoria posso utilizar inúmeros.

// Eu utilizo esse encadeamento quando quero realizar uma ação por vez com
// base no primeiro retorno. Note que "then" seguinte sempre receberá como 
// argumento o retorno do anterior, por isso no primeiro preciso fazer uma
// formatação antes de passar para frente, já no segundo ainda preciso passar
// para frente para realizar a próxima ação, mas agora já estou utilizando
// um novo retorno formatado então não preciso do .json novamente.

fetch(`https://api.github.com/users/${username}`)
    .then(retorno => {
        return retorno.json()
    })
    .then(retorno => {
        console.log(retorno)
        console.log(retorno.public_gists)
        console.log(retorno.following)
    })
    .catch(retorno => console.error('houve um problema'))

// Aqui está o último código porém com o encadeamento apenas onde ele é
// realmente necessário, que nesse caso preciso primeiro resolver uma
// promise onde ocorre a formatação dos dados para ".json" para então
// após isso resolvido apenas, fazer a requisição de informações específicas
// dentro desse .json