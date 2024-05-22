// O encapsulamento "torna privado" um atributo que antes era público.
// Vimos no documento 1_ que um atributo comum pode ter o valor reatribuido facilmente
// Vimos também que caso queiramos tornar um atributo inalterável, utilizamos Object.freeze

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

// O que acontece é que por vezes queremos que o valor de determinados atributos continuem
// "alteráveis", mas não de qualquer maneira ou em qualquer lugar do código, isso é o 
// "tornar privado" do encapsulamento, explicarei mais abaixo

// Como no documento anterior, acima tenho a primeira abstração e abaixo
// a segunda, que herda completamente o conteúdo da primeira e declara
// novos atributos e métodos, porém de maneira um pouco diferente agora

function Funcionario(nome, idade, cargo, salario){
    Pessoa.call(this, nome, idade);

    this.cargo = cargo;
    let _salario = salario;

    this.dizCargo = function(){
        console.log("Sou " + this.cargo);
    }
    this.getSalario = function(){
        console.log(`E ganho ${_salario} por mês`)
    }
    this.setSalario = function(novoSalario){
        if (typeof novoSalario === 'number'){
            _salario = novoSalario;
        }
    }
}

// Um atributo pode ser alterado em qualquer "nível" do código, basta mencionar o objeto
// Porém uma variável "let" só é alcançada por códigos e algoritmos no mesmo nível
// Por isso dessa vez, ao invés de declarar salario como atributo diretamente, eu

// 1. Declaro _salario como variável e a variável fica como atributo
// 1.2 Tenho agora um método diferente para captar o valor de salário, o "getSalario",
//     já que ele não é mais um atributo, mas uma variavel let. Para ver o que mudou
//     basta comparar como o "dizCargo" acima

// 2. _salario pode até ser alcançado por fora para consulta, como veremos adiante, 
//    mas por se tratar agora de uma variável, só pode ser alterado por dentro, ou seja
// 3. Consigo alterá-lo com a chamada do método interno "setSalario" que recebe um argumento
//    e após isso faz uma verificação/teste lógico, para redefinir ou não o valor

// Vamos criar um objeto a partir de funcionário para testarmos as teorias acima

const funcionario1 = new Funcionario("Maria", "38", "Dev front-end", 5000)

funcionario1.dizOi()
funcionario1.dizIdade()
funcionario1.dizCargo()
funcionario1.getSalario()           // Aqui vemos o salário passado na criação (5000)

funcionario1.setSalario(7000)
funcionario1.getSalario()           // Aqui vemos que o salário é alterado para 7000 com a chamada do método

//console.log(funcionario1._salario);

funcionario1._salario = 3000        // Aqui acontece algo interessante, nessa linha o que eu fiz foi "adicionar
                                    // um novo atributo" e definir seu valor, podemos perceber isso porque
funcionario1.getSalario()           // O valor retornado dessa antepenúltima chamada continua sendo 7000

console.log(funcionario1._salario);
console.log("E ganho " + funcionario1._salario + " por mês");

// Apenas nesses últimos dois consoles, onde fazemos a chamada do "novo atributo" 
// é que temos a retorno de salario como sendo 3000.

// A prova de que este é um atributo "novo" e que não condiz com o salário real
// é a linha 70 que deixei como comentário, se descomentar e rodar o código,
// terá um "undefined" como retorno dela

// É justamente para evitar esse tipo de confusão que para cada ação realizável
// em um atributo encapsulado, eu preciso criar um método com a sintaxe correta
// diferentemente de atributos comuns, em que para alteração ou consulta, por
// exemplo, basta referenciar o objeto seguido pelo atributo