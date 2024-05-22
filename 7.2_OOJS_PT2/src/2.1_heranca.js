// Levando em conta que você esteja lendo e aprendendo ou relembrando os
// arquivos na ordem em que estão organizados, vejamos um pouco de como
// ficou o pilar "herança" de OOP pós ES6

class Guerreiro {
    constructor(nome, armaQueUsa, lvGuerreiro, hp){
        this.nome = nome
        this.arma = armaQueUsa
        this.lv = lvGuerreiro
        this.hp = hp
    }
    
    showHP(){
        console.log(`${this.nome} possui ${this.hp}pt de vida`)
    }
    atacar(nomeAtaque){
        console.log(`${this.nome} usou ${this.arma} e atacou com ${nomeAtaque}`)
    }
    recebeAtaque(){
        this.hp -= 10;
    }
    esquivou(){
        console.log(`${this.nome} esquivou do ataque inimigo`)
    }
}

// Todo o código acima não é tão importante assim para a proposta desse
// arquivo, é grande apenas por conta de que eu queria treinar e realizar
// alguns testes também. O que importa de verdade, está abaixo:

///////////////////
// ___HERANÇA___ //
///////////////////

class Samurai extends Guerreiro {
    correr(){
        console.log(`${this.nome} correu`)
    }
}

// Sim, é basicamente isso, não precisa passar dentro da nova abstração:
// o nome da abstração pai + call + (this e argumentos que devem ser herdados)

// Basta declarar "class", "nomeAbstraçãoHerdeira", "extends" e "nomeAbstraçãoPai",
// Nesse caso, Viking é a herdeira, extends faz o trabalho de dizer que
// Viking "é uma extensão de" e, Guerreiro é a abstração pai

// Para adicionar métodos na nova classe, não tem segredo, basta adicionar como
// fizemos na classe pai, e como está no exemplo acima, agora, para adicionar 
// novos atributos, devemos chamar o "super constructor". Veja abaixo:

class Viking extends Guerreiro {
    constructor(nome, armaQueUsa, lvGuerreiro, hp, vantagem){
        super(nome, armaQueUsa, lvGuerreiro, hp)
        this.bonus = vantagem
    }
}

// Basicamente é como se eu estivesse refazendo o conjunto de atributos, então
// 1. preciso declarar "constructor" com os atributos herdados e os novos,
// 2. dentro de constructor declaro "super" com apenas os atributos herdados,
//    sinalizando que estes atributos vem de um escopo superior
// 3. declaro "this.novoAtributo = novoAtributo" já que este é interno unicamente
//    do constructor de Viking até o momento

///////////////////
// ___OBJETOS___ //
///////////////////

const arqueiroViking = new Viking('Thorv','Arco curto', '19', 100, 'Bonus de resistencia ao frio')
const berserker = new Viking('Herleif', 'Machados', '19', 140, 'Bonus de resistencia ao frio')
const aventureiro = new Guerreiro('Astolfo', 'Punhos', '14', 115)

////////////////////
// ___CALLBACK___ //
////////////////////

console.log(arqueiroViking)
console.log(berserker)
console.log(aventureiro)

arqueiroViking.showHP()
arqueiroViking.atacar('chuva de flechas')
arqueiroViking.recebeAtaque()
arqueiroViking.esquivou()
arqueiroViking.showHP()