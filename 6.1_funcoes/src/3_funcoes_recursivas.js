// Uma "recursão" acontece quando uma função chama ela mesma
// Vamos fazer uma função de calculo de fatorial para exemplo

// O fatorial de um número é ele * um numero menor * um numero menor...
// O 5! é 5*4*3*2*1, ou seja, 5! é 120

function fatorial(n){
    if(n == 1){
        return 1
    }
    else{
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

// Nesse caso o que acontece é que chamamos fatorial com argumento 5, logo
// "fatorial(5)", na linha 12 chama "fatorial(4)"
// "fatorial(4)", na linha 12 chama "fatorial(3)"
// "fatorial(3)", na linha 12 chama "fatorial(2)"
// "fatorial(2)", na linha 12 chama "fatorial(1)"
// "fatorial(1)" retorna 1

// A partir do momento em que o algoritmo conseguiu todas as informações que precisava
// ele começa a retornar os resultados de volta para cima, multiplicando cada valor pelo
// fatorial do número anterior. Assim, "fatorial(2)" retorna 2*1 = 2; "fatorial(3)" retorna
// 3*2 = 6; "fatorial(4)" retorna 4*6 = 24 e por fim "fatorial(5)" retorna 5*24 = 120.

// As funções recursivas possum outras aplicações, mas por enquando basta saber isso