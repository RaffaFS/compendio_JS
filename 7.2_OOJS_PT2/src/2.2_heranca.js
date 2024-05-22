// Apenas para finalizar sobre herança, ainda há algo a mais
// que podemos fazer com o "super", Vamos começar repetindo
// as bases do nosso exemplo:

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

///////////////////
// ___HERANÇA___ //
///////////////////

// Imaginemos um cenário onde tenho diversos soldados vikings que serão
// criados como objetos diferentes e, muito embora possuam nomes e armas
// diferentes, eles compartilham não só atributos, mas os valores de
// alguns atributos também

// Imaginemos que todos os vikings criados terão os mesmos valores para 
// "lvGuerreiro", "hp" e para novo atributo "bonus", eu poderia então
// otimizar o código da seguinte maneira:

class Viking extends Guerreiro {
    constructor(nome, armaQueUsa, lvGuerreiro, hp, vantagem){
        super(nome, armaQueUsa, lvGuerreiro, hp)
        this.bonus = vantagem
    }
}

class BossV extends Viking {}

class SoldadoV extends Viking {
    constructor(nome, armaQueUsa){
        super(nome, armaQueUsa, 19, 120, 'resistência ao frio')
    }
}

// Dessa maneira, eu ainda posso ter "Vikings Especiais", como o "BossV"
// por exemplo, mas eu tenho um tipo de herdeiro de viking mais comum 
// que possuirá alguns atributos fixos para todas as suas instâncias 

///////////////////
// ___OBJETOS___ //
///////////////////

const arqueiroViking = new SoldadoV('Thorv','Arco curto')
const berserker = new SoldadoV('Herleif', 'Machados')
const brawler = new BossV('Rolf', 'Punhos', 22, 432, 'resistencia ao frio')

////////////////////
// ___CALLBACK___ //
////////////////////

console.log(arqueiroViking)
console.log(berserker)
console.log(brawler)

arqueiroViking.showHP()
arqueiroViking.atacar('chuva de flechas')
arqueiroViking.recebeAtaque()
arqueiroViking.esquivou()
arqueiroViking.showHP()