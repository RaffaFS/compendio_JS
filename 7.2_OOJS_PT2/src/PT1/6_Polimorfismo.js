// Registrando receitas de café
// Aqui temos algo que poderíamos chamar e polimorfismo também
// Mas aplicado de uma maneira um pouco diferente

function Cafe(nome, criador, mlLeite, mlChocolate, gCanela){

    this.nome = nome
    this.criador = criador
    this.mlLeite = mlLeite
    this.mlChocolate = mlChocolate
    this.gCanela = gCanela

    this.inicio = function(){
        console.log(this.criador + " começou a preparar " + this.nome + " com 40ml de café passado")
    }
    this.leite = function(){
        console.log("Adicionou " + this.mlLeite + " de leite de vaca magra")
    }
    this.chocolate = function(){
        console.log("E então " + this.mlChocolate + " de chocolate")
    }
    this.canela = function(){
        console.log("por fim adicionou " + this.gCanela + " de canela em pau!")
    }
    this.mexeu = function(){
        console.log("E então ele mexeu! Mexeu, mexeu, mexeu... mexeu e mexeu novamente...")
        console.log("E finalmente " + this.nome + " estava pronto para ser bebido!")
    }
}

// Iniciamos fazendo a criação da abstração como os atributos e métodos necessários
// Abaixo faço a criação dos objetos em si, sendo estes instâncias de "Cafe"
// e a criação de constantes que farão as chamadas dos métodos de cada objeto

const cafeChoconela = new Cafe("Café Choconela", "Rafael", "50ml", "100ml", "40g")
const cafeSoCanela = new Cafe("Café Só Canela", "Gilberto", "120ml", "0", "60g")
const cafeLeitado = new Cafe("Café Leitado", "Tadeu", "180ml", "10ml", "10g")

const getChoconela = function(){cafeChoconela.inicio() + cafeChoconela.leite() + cafeChoconela.chocolate() + cafeChoconela.canela() + cafeChoconela.mexeu()}
const getSoCanela = function(){cafeSoCanela.inicio() + cafeSoCanela.leite() + cafeSoCanela.canela() + cafeSoCanela.mexeu()}
const getLeitado = function(){cafeLeitado.inicio() + cafeLeitado.leite() + cafeLeitado.chocolate() + cafeLeitado.canela() + cafeLeitado.mexeu()}

// É nessas chamadas acima que está o "polimorfismo" que comentei anteriormente
// Todos os cafés vem de uma mesma abstração, então recebem os mesmos atributos
// na sua criação, mesmo que com valor "0", como é o caso para o "mlChocolate"
// no "cafeSoCanela".

// A maneira que o "polimorfismo" é feito aqui se dá pelo armazenamento de uma
// função em uma constante, função essa que chama um métodos específicos de
// objetos especificos

// Abaixo note que:
// 1. chamo as constantes como se fossem funções, isso porque uma const que armazena uma function se torna um método
// 2. "getChoconela" e "getLeitado" chamam os mesmos métodos internos na function, mas cada um chama do seu objeto
//    correspondente, o que faz com que tenhamos os mesmos retornos porém com valores diferentes
// 3. "getSoCanela" não chama o método ".chocolate" e ainda assim funciona perfeitamente, o que deve ser notado também
//    é que isso se dá graças a eu ter declarado um argumento real para this.mlChocolate, mesmo que eu não vá usá-lo,
//    para manter a organização/ordenação dos argumentos

console.log()
getChoconela()
console.log()
getSoCanela()
console.log()
getLeitado()