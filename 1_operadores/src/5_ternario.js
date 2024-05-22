// O operador ternário é composto por dois simbolos numa mesma expressão: "?" e ":"
// E por três informações: "bloco1 ? bloco2 : bloco3"

// A ideia é: rodo um algoritmo, teste ou expressão (bloco1)
// Se a resposta final for true/existe, o conteúdo do bloco2 será chamado
// Se a reposta final for false/não existe, o conteúdo do bloco3 será chamado

const aprovado = "Parabéns! Você foi aprovado para a nossa universidade!"
const reprovado = "Infelizmente você não foi aprovado, mas pode tentar novamente no próximo ano!"
const atividades = [atv1 = 50, atv2 = 90, atv3 = 80, qatv4 = 40]

let media = atividades.reduce(function(acumulador, item){
    acumulador += item;
    return acumulador
})
media /= atividades.length

// Esse primeiro bloco de código é apenas para que tenhamos um cenário mais real
// O uso do operador vem abaixo

console.log(media >= 70 ? aprovado : reprovado)

// Lembre que além de triggers, posso usar esse tipo de operador para o armazenamento de informações
// para referência futuras, dentro de uma const por exemplo, mais ou menos assim:
// "const statusAluno = media >= 70 ? aprovado : reprovado"