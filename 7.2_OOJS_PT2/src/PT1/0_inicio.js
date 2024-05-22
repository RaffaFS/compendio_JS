// Seguindo a ordem correta de estudos, já vimos um pouco de objetos anteriormente
// mas vejamos novamente com mais detalhes agora

// // // // // // // // // // // // // // // // // // // // CRIAÇÃO DE OBJETOS (PADRÃO)

const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function(){
        console.log("vruum");
    }
}

const carroDaMaria = {
    modelo: 'Uno',
    fabricante: 'Fiat',
    anoModelo: 2022,
    anoFabricacao: 2021,
    acelerar: function(){
        console.log("vruum");
    }
}

const carroDoAfonso = {
    modelo: 'Corsa',
    fabricante: 'Wolkswagen',
    anoModelo: 2016,
    anoFabricacao: 2015,
    acelerar: function(){
        console.log("vruum");
    }
}

// // // // // // // // // // // // // // // // // // // // CRIAÇÃO DE OBJETOS (ABSTRAÇÃO ==> INSTÂNCIA)

function Carro(modelo, fabricante, anoModelo, anoFabricacao){
    this.modelo = modelo;
    this.marca = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log("vrun vrun")
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("Uno", "Fiat", 2022, 2021);
const carroDoAfonso2 = new Carro("Corsa", "Wolkswagen", 2016, 2015);

// Note como otimizamos o código e nosso tempo também criando objetos a partir de uma abstração
// Já podemos chamar isso de herança também, sendo a abstração o elemento pai e os objetos
// criados posteriormente, os herdeiros, veja: 

// 1. Eu defino um construtor/abstração/classe como uma função (nesse caso: "Carro")
//    é importante que uma abstração seja sempre nomeada com a primeira letra maiuscula

// 2. defino como argumentos formais da função, os "atributos" que todos os objetos terão
// 3. com "this" digo que "este".atributo = o argumento real dessa posição, no novo objeto
// 4. se houverem, passo os métodos (funções internas de uma abstração), como por exemplo "acelerar"

// 5. Nas linhas 48, 49 e 50, faço a criação de três objetos diferentes, utilizando a mesma "forma":
//    "Carro", alterando apenas os "ingredientes" com os argumentos reais nas posições corretas