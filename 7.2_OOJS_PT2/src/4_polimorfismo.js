// Honestamente, a aplicação do polimorfismo ficou mais intuitiva e
// menos verbosa, mas dado ao que vimos até agora, não há nada de
// novo, a ideia continua sendo "reescrever o método" dentro do
// objeto que deverá responder de maneira diferente ao callback
// agora com as sintaxes mais modernas vistas abaixo e anteriormente

class Guerreiro {
    constructor(nome, armaQueUsa, LvGuerreiro, vida, bonus){
        this.nome = nome
        this.arma = armaQueUsa
        this.Lv = LvGuerreiro
        this.hp = vida
        this.bonus = bonus
    }
    
    showHP(){
        console.log(`${this.nome} possui ${this.hp}pt de vida`)
    }
    atacar(nomeAtaque){
        console.log(`${this.nome} usou ${this.arma} e atacou com ${nomeAtaque}`)
    }
    recebeAtaque(){
        console.log(`${this.nome} recebe o ataque em cheio`)
        this.hp -= 10;
    }
    esquivou(){
        console.log(`${this.nome} esquivou do ataque inimigo`)
    }
}

///////////////////////
//___POLIMORFISMO___ //
///////////////////////

class Viking extends Guerreiro {
    atacar(nomeAtaque){
        if(this.berserkMode){
            console.log(`${this.nome} usou ${this.arma} e atacou ferozmemnte com ${nomeAtaque}`)
        }
        else{
            console.log(`${this.nome} usou ${this.arma} e atacou com ${nomeAtaque}`)
        }
    }
}

const rolf = new Viking('Rolf', 'Machadinhas', 23, 220, 'Resistência ao frio')
rolf.atacar('Fúria')

// Esse é um exemplo de polimorfismo como citei acima,
// a reescrição de um méetodo. Nesse caso o bloco executado
// é o "else", mas caso se o teste lógico de "if" (que não existe 
// no método original) retornasse "true", seria o bloco de "if"
// a ser executado.

// Eu poderia escrever um algoritmo totalmente diferente também,
// as bases da estrutura do polimorfismo ainda estariam ali, mas
// dependendo do caso, já estaríamos fugindo da ideia principal