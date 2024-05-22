// O polimorfismo é a capacidade de executar a mesma tarefa, de diferentes formas
// A ideia aqui é criar a função de "aumento de salário", que tera percentuais
// diferentes para cada funcionario

// A base de exemplo aqui é a mesma de encapsulamento.js
// Criação da primeira abstração:

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;

    this.dizOi = function(){
        console.log("Olá, meu nome é " + this.nome)
    }
    this.dizIdade = function(){
        console.log("Tenho " + this.idade + " anos de idade")
    }
}

// Criação da segunda abstração:

function Funcionario(nome, idade, cargo, salario){
    Pessoa.call(this, nome, idade);

    this.cargo = cargo;
    let _salario = salario;

    this.dizCargo = function(){
        console.log("Sou " + this.cargo);
    }
    this.getSalario = function(){
        console.log(`${_salario}`)
    }
    this.returnSalario = function(){
        return _salario
    }
    this.setSalario = function(novoSalario){
        if (typeof novoSalario === 'number'){
            _salario = novoSalario;
        }
    }

    //método de aumento 10% do salário geral
    this.aumento = function(){
        const salarioComAumento = _salario*1.1;
        _salario = salarioComAumento;
    }
}

//////////////////////////////
//////////////////
////////

// Acima temos o a mesma base de informações que no documento de encapsulamento
// Adiciono um novo método "returnSalario" que será importante par o polimorfismo
// e faço isso também para manter o "getSalario" com um console.log interno

// Crio então, para o atributo encapsulado em let (_salario), um método de aumento
// 1. Declaro a função
// 2. Crio uma constante que recebe o resultado do calculo necessário
// 3. Declaro que a let _salario recebe então o valor armazenado na constante

// A conta nesse caso será o salário atual passado como argumento na criação
// do objeto * 1.1, que resultará em um aumento de 10%

function Estagiario(nome, idade){
    Funcionario.call(this, nome, idade, "Estagiario", 1800);
    
    this.aumento = function(){
        const salarioComAumento = this.returnSalario()*1.07;
        this.setSalario(salarioComAumento);
    }
}

// É importante notar que em Estagiario e em Gerente, eu passo apenas dois
// argumentos (nome e idade), pois apenas esses dois serão definidos no 
// momento da criação do objeto, enquanto os outros dois previstos em funcionário, 
// eu já defino para a abstração como um todo ao puxar a herança, ou seja,
// todo funcionario recebe o cargo "Estagiario" e salario "1800", por exemplo,
// sem que esses valores precisem ser passados na criação do objeto

function Gerente(nome, idade){
    Funcionario.call(this, nome, idade, "Gerente", 8000);

    this.aumento = function(){
        const salarioComAumento = this.returnSalario()*1.15;
        this.setSalario(salarioComAumento);
    }
}

// Graças ao que chamamos de polimorfismo, consigo fazer com que o método se
// comporte de maneira levemente diferente em cada caso, a base aqui para
// Estagiário e Gerente é a mesma de Funcionário

// Embora eu não possa copiar o "this.aumento" de funcionario para cá, apenas
// alterando o valor, eu poderia escrever o "this.aumento" de funcionário da
// mesma maneira que reescrevi para estes outros dois cargos, isso porque através
// da chamada dos método que são internos de funcionário, eu posso alcançar e
// modificar salário de qualquer lugar, mas sem os métodos, apenas de dentro
// do próprio objeto funcionário

// Bem, agora o que realmente acontece aqui é
// 1. crio uma constante para armazenar o retorno de returnSalario() * X.xx
// 2. chamo setSalario com o resultado armazenado na constante acima como argumento
//    o método verifica esse argumento e, tudo certo, redefine o valor de _salario
//    para o valor armazenado na const

//criação de funcionários e definição dos atributos dos mesmos
const funcionario1 = new Funcionario("Maria", "38", "Dev front-end", 4000)
const funcionario2 = new Estagiario("Pedro", "21")
const funcionario3 = new Gerente("Joana", "36")

// Chamada dos métodos já vistos apenas para teste
funcionario1.dizOi()
funcionario1.dizIdade()
funcionario1.dizCargo()
funcionario1.setSalario(5000)
funcionario1.getSalario()

// Chamada do médoto de aumento e do salário pós aumento
console.log("// // // // // // // // // //ESPAÇAMENTO");
funcionario1.aumento()
funcionario1.getSalario()

// Chamada dos métodos para "funcionario2" sendo estagiário
console.log("// // // // // // // // // //ESPAÇAMENTO");
funcionario2.getSalario()
funcionario2.aumento()
funcionario2.getSalario()

// Chamada dos métodos para "funcionario2" sendo gerente
console.log("// // // // // // // // // //ESPAÇAMENTO");
funcionario3.getSalario()
funcionario3.aumento()
funcionario3.getSalario()