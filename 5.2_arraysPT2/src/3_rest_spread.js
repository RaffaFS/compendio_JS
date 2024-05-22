// Rest e Spread são duas possibilidades novas para trabalharmos com arrays
// Em resumo, a primeira nos permite "criar um array por um argumento",
// enquanto a segunda nos permite "espalhar os valores de um array",
// Entenderemos ambas mais adiante



//////////////////////////////
// _____COONSIDERAÇÕES_____ //
//////////////////////////////

// Vou usar um exemplo de soma, porém vale lembrar que o foco aqui não é a
// função sem si, mas a possibilidade de criar um array através de uma função

function somar (a, b){
    return a+b;
}
console.log(somar(10, 20))

// Esse primeiro algoritmo é um algoritmo básico que me permite somar apenas
// a quantidade de argumentos reais correspondente a quantidade de argumentos
// formais que foram passados na declaração da função

// O exemplo abaixo já me permitirá passar quantos argumentos reais eu quiser
// e todos eles serão somados normalmente

function somar2 (){
    let resultado = 0;
    for (let i = 0; i < arguments.length; i++){
        resultado += arguments[i];
    }
    return resultado
}
console.log(somar2(10, 20, 30))

// O que acontece aqui é simples:
// 1. eu não passo argumentos formais, isso não limita meus argumentos mas,
//    normalmente não seria possível executar qualquer ação baseada num
//    argumento real por não termos uma referência
// 2. "arguments" é uma palavra reservada que cria essa referência direta
//    ao espaço (variável nesse caso), similar a um array, mas bem de longe



////////////////////
// _____REST_____ //
////////////////////

// O "rest" é basicamente o uso de "..." logo antes de um argumento formal que,
// graças a ele, passará a funcionar como um array que receberá como elementos
// todos os argumentos reais passados na chamada da função. Veja:

function somarComRest(...numeros){
    const soma = numeros.reduce((resultado, numeroAtual) => {
        resultado += numeroAtual;
        return resultado
    }, 0)
    return soma
}
console.log(somarComRest(10, 20, 30, 40))

// Claro, eu poderia também ter feito o uso de "for", mas como ele é um array
// me permite o uso de métodos

// Aqui o que ocorre, como comentei, é: 
// 1. a criação de um array no espaço do argumento
// 2. o armazenamento em "soma", do resultado de "reduce" aplicado sobre o array
// 3. o retorno desse resultado armazenado para a função

function bolinhasGude(nome, ...numeros){
    const soma = numeros.reduce((resultado, numeroAtual) => {
        resultado += numeroAtual;
        return resultado
    }, 0)
    return `${nome} possui ${soma} bolinhas de gude`
}
console.log(bolinhasGude('Rafael', 10, 20, 30, 40))

// Esse é um exemplo de que a função que recebe "...argumento", também pode
// receber outros argumentos formais de valor único, basta que estes precedam 
// na declaração, o argumento que faz uso do "..."

// No geral todo o algoritmo continua funcionando da mesma maneira, o que muda
// é que os argumentos reais passados na chamada da função, primeiro ocuparão 
// os espaços dos argumentos formais de valor único antes de "entrarem no rest"



//////////////////////
// _____SPREAD_____ //
//////////////////////

// Seu uso se dá também a partir de "...", mas para spread ele vem antes da "chamada"
// de um array, e não da declaração de um argumento como no caso de rest. Como citei
// anteriormente, seu uso simples apenas "espalha" os itens de um array.

const grupo1 = [1,2,3]
const grupo2 = [4,5,6]
const grupo3 = [7,8,9]
console.log(grupo1)
console.log(...grupo1)

// Perceba que em ambos os console.log ele me traz todos os elementos, porém no
// segundo ele faz isso fora de um array. No exemplo Abaixo o que faço é uma
// concatenação utilizando o spread. Armazeno dentro de uma nova constante um
// array formado pelo "espalhamento" dos elementos anteriores e o número 10

const grupo4 = [...grupo1, ...grupo2, ...grupo3, 10]
console.log(grupo4)

// Outra possibilidade com spread é utiliza-lo em objetos criando uma espécie
// de herança simples, diferente da herança de OOP que puxa os atributos com
// valores escolhidos na chamada, com o spread o que conseguimos fazer é 
// basicamente uma cópia dos dados de um objeto para dentro de outro e então
// sobreescrever algum dado caso haja necessidade. Veja

const vwGol = {
    modelo: 'gol',
    fabricante: 'Volkswagen',
    completo: 'Sim',
    motor: '1.8',
    cambio: 'Manual',
    combustivel: 'Gasolina',
    ano: '!!!'
}

const carro1 = {
    ...vwGol,
    ano: '2011'
}
const carro2 = {
    ...vwGol,
    ano: '2014'
}
const carro3 = {
    ...vwGol,
    ano: '2020'
}

console.log(carro1)
console.log(carro2)
console.log(carro3)



///////////////////////////////
// _____DESESTRUTURAÇÃO_____ //
///////////////////////////////

// Do meu ponto de vista a desestruturação poderia ser também chamada de "fragmentação"
// já que a ideia é que, com determinada sintaxe na "declaração de uma constante"
// possamos literalmente fragmentar o conteúdo de um array de maneira mais controlada
// que com o uso de spread.

// Eu vou trazer exemplos com array e com objeto, em ambos os casos seria possível
// reescrever o exemplo sem a desestruturação, porém teríamos de fazer índice a
// índice ou atributo a atributo e ainda não teríamos como fazer uso do "rest"

const motos = ['CG125', 'FZ250', 'CB650', 'NINJA900']
const [moto1, moto2, ...outrasMotos] = motos;

console.log(moto1)
console.log(moto2)
console.log(outrasMotos)

// Aqui eu primeiro criei uma constante "motos" e armazenei nela o array
// como o qual vamos trabalhar, depois disso:
// 1. declaro "const" para a abertura
// 2. ao invés de passar um nome único para ela, passo um array de nomes
// 3. por fim aponto meu "target", meu array principal (motos)

// O que acontece em seguida é:
// 4. ao invés de declarar uma nova constante única, estou declarando,
//    nesse caso, três novas constantes (aquelas chamadas nos console.log)
// 5. ao apontar "motos" como target, estou apontando para onde eu quero
//    que as novas constantes busquem seu conteúdo, sendo assim
// 6. "moto1" receberá a CG como conteúdo, o primeiro elemento do target
// 7. "moto2" receberá a FZ como conteúdo, o segundo elemento do target
// 8. enquanto isso, por conta do uso do "rest" em "outrasMotos", esta const
//    receberá todos os valores que ainda não foram captados de dentro de "motos"
// 9. e claro, a const "motos" continua existindo sem qualquer alteração

// Perceba: caso eu não tivesse feito o uso do rest, ou melhor, caso eu
// tivesse declarado apenas as duas primeiras constantes, tudo ainda
// funcionaria normalmente, as duas constantes receberiam os mesmos
// valores, a CB e a NINJA não seriam atribuidas à novas consts e
// "motos" se manteria da mesma forma


console.log(carro1.ano)

const anoCarro1 = carro1.ano
console.log(anoCarro1)

// Essas são duas maneiras que eu poderia usar para pegar um único atributo
// de um objeto, claro, poderia exemplificar com notação "[]" também, mas enfim

// O ponto é, assim como desestruturamos ou, fragmentamos um array, podemos
// fazer o mesmo com um objeto com uma sintaxe bem similar, veja

const {modelo: modeloCarro2, ano: anoCarro2, ...outrosDadosCarro2} = carro2;

console.log(modeloCarro2)
console.log(anoCarro2)
console.log(outrosDadosCarro2)

// A diferença aqui é que podemos e devemos escolher o valor de qual atributo
// desejamos captar referenciando o atributo em si e logo em seguida, a nova
// const na qual o valor será armazenado. Graças a isso podemos captar o valor
// de um dos últimos atributos, por exemplo, sem a necessidade de captar
// os que o precedem na ordem de declaração