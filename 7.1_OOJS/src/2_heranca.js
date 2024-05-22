// Abaixo teremos um exemplo com mais "níveis de herança"
// fazendo também o reaproveitamento de um construtor/abstração/classe

function Pessoa(nome, yo){
    this.nome = nome;
    this.idade = yo;

    this.dizOi = function(){
        console.log("Olá, meu nome é " + this.nome)
    }
    this.dizIdade = function(){
        console.log("Tenho " + this.idade + " anos de idade")
    }
}

// Acima eu declarei a abstração "Pessoa" com dois atributos e dois métodos
// Abaixo irei declarar uma nova abstração, "Funcionario", que herda essa

// Por vezes o atributo de uma abstração e argumento formal que recebe como
// valor pode ter a mesma nomeação, como é o caso de "this.nome = nome"

// Por isso é importante perceber que o que está sendo chamado abaixo, no
// momento da herança, Pessoa.call(this, nome, idade), são os atributos
// this.nome e this.idade, e não os argumentos, do contrário eu deveria
// chamar nome e "yo"

function Funcionario(nome, idade, cargo, salario){
    Pessoa.call(this, nome, idade);

    this.cargo = cargo;
    this.salario = salario;

    this.dizCargo = function(){
        console.log("Sou " + this.cargo);
    }
    this.dizSalario = function(){
        console.log("E ganho " + this.salario + " por mês")
    }
}

// Note algumas coisas aqui:
// 1. Logo na declaração, a nova abstração deve receber os argumentos formais
//    referentes aos atributos que irá herdar e fazer uso de, além de poder 
//    receber novos argumentos formais
// 2. Na linha seguinte faço a chamada da abstração herdada e declaro após this
//    quais atributos quero puxar
// 3. Declaro os dois novos atributos e dois novos métodos
// 4. Eu poderia ter feito apenas uma abstração, apenas "Funcionario" contendo
//    tudo isso, mas a ideia aqui é que eu quero ter justamente níveis diferentes
//    de interação, quero poder criar uma pessoa que não é funcionária, logo
//    essa não precisará dos dados de cargo e salário

// Veja por um outro exemplo: é como se eu tivesse um game de plataforma 2d
// montado em um grid com blocos, logo eu teria uma abstração "Bloco", onde
// não entrariam coisas como items ou personagens, mas tudo que tivesse
// relação com o terreno, e todos esses blocos teriam colisão.

// Então blocos comuns eu criaria com "new Bloco()", enquanto eu teria
// também a abstração "BlocoQuebravel", que herdaria a colisão e outras
// possíveis informações de "Bloco" mas teria a característica de ser 
// quebrável, para esses eu criaria com "new BlocoQuebravel()"

// Para esses casos os diferentes níveis de abstração são necessários, caso
// contrário, nesse exemplo, todos os meus blocos seriam quebráveis, ou
// nenhum seria. Ainda seria possível criar dois objetos que não interagem
// entre si, ou seja, não há herança entre eles, mas isso em larga escala
// se torna algo nada otimizado e muito mais demorado.

/// // /

// Aqui abaixo crio os objetos em si, decarando uma constante de armazenamento, a abstração
// que quero utilizar e os argumentos reais para substituir os argumentos formais

const funcionario1 = new Funcionario("Maria", "38", "Dev front-end", 5000)
const funcionario2 = new Funcionario("Alberto", "42", "Analista de dados", 8500)
const funcionario3 = new Funcionario("Marceli", "19", "Auxiliar de TI", 2800)

console.log(funcionario1)

// O console.log acima traz uma exibição de como está a estrutura final do nosso objeto
// isso serve para uma verificação simples de "atributos: valores" e "métodos disponíveis"

// Para executar um método basta que chamemos o objeto final seguido de .métodoDesejado()

funcionario2.dizOi()
funcionario2.dizIdade()
funcionario2.dizCargo()
funcionario2.dizSalario()