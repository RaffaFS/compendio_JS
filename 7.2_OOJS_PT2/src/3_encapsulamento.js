// O encapsulamento foi outra coisa que foi muito melhorada nas versões
// mais recentes do ECMA Script, agora não precisamos mais declarar um
// atributo como variável para aproveitar os conceitos de encapsulamento

class Guerreiro {
    #hp

    constructor(nome, armaQueUsa, lvGuerreiro, vida){
        this.nome = nome
        this.arma = armaQueUsa
        this.Lv = lvGuerreiro
        this.#hp = vida
    }

// Repare no valor "vida" acima, ele esta sendo atribuído a uma propriedade
// privada, ou seja, "é um atributo encapsulado". Para fazer uso do 
// encapsulamento de forma nativa como foi introduzido no ES2022 basta:
// 1. declarar "#nomeAtributo" diretamente dentro da classe
// 2. declarar "this.#nomeAtributo = atributo" dentro do constructor

// Abaixo temos os métodos que serão utilizados adiante

    showHP(){
        console.log(`${this.nome} possui ${this.#hp}pt de vida`)
    }
    atacar(nomeAtaque){
        console.log(`${this.nome} usou ${this.arma} e atacou com ${nomeAtaque}`)
    }
    recebeAtaque(){
        console.log(`${this.nome} recebe o ataque em cheio`)
        this.#hp -= 20;
    }
    esquivou(){
        console.log(`${this.nome} esquivou do ataque inimigo`)
    }
}

////////////////////////////////
//___SUBCLASSE E INSTÂNCIAS___//
////////////////////////////////

class Viking extends Guerreiro{}

class Samurai extends Guerreiro {
    constructor(nome, armaQueUsa, lvGuerreiro, vida, vantagem){
        super(nome, armaQueUsa, lvGuerreiro, vida)
        this.bonus = vantagem
    }
}

// Aproveitei esse espaço para mostrar como herdamos as propriedades de
// uma classe que possui campos privados/encapsulados.

// Sinceramente não tem nada de mais, fazemos da mesma maneira que faríamos
// com uma classe sem campos privados, passamos a classe vazia, com novos
// métodos ou, com novos atributos através do uso de "super constructor"

const berserk = new Viking('Ragnar', 'Machado', '17', 100)
const espadachim = new Samurai('Akira', 'Katana', '17', 100, 'Bonus de velocidade')

///////////////////
//___CALLBACKS___//
///////////////////

espadachim.hp = 200
berserk.showHP()
espadachim.showHP()
berserk.atacar('Fúria')
espadachim.atacar('Corte Horizontal')
berserk.esquivou()
espadachim.recebeAtaque()
berserk.showHP()
espadachim.showHP()
console.log(espadachim)

// Aqui temmos vários callbacks, as temos duas coisas importantes a notar:
// 1. a tentativa de alteração do atributo "hp" de "espadachim" é falha,
//    percebemos isso pois ela é feita antes do início da batalha, e, quando
//    a batalha se inicia, Akira ainda tem os 100pt de vida declarados na
//    sua criação, e não os 200
// 2. o método "recebeAtaque" consegue alcançar e alterar o atributo encapsulado
//    "#hp", percebemos isso pois, após sua execução em "espadachim",
//    Akira passa a ter 80pt de vida

// Outra coisa que vale nossa atenção é que, no último callback, que chama
// o objeto "espadachim" inteiro, um dos atributos listados é "hp", e
// esse sim tem o valor de "200"

// O que acontece aqui é: não existe atributo "hp" dentro de "espadachim",
// então a linha 65 está simplesmente declarando esse novo atributo para
// espadachim com o valor de "200". Ao chamar o objeto inteiro, esse atributo
// estará ali, porém não influenciará em nada diretamente

// Enquanto isso, o atributo real de vida, "#hp", não aparece na chamada do
// objeto por conta de ser um atributo privado, mas ainda mantém o seu valor
// intacto, alterável apenas pelos métodos internos da classe, se isso não
// fosse verdade, o retorno do primeiro "espadachim.showHP()" seria 200, 
// não 100, e o retorno do segundo "espadachim.showHP()", seria 180, não 80.