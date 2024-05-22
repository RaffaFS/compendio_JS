// Um argumento/parâmetro opcional é um argumento formal com um valor já
// anexado para o caso de um argumento real não ser passado em determinada
// posição, vejamos uma função sem parâmetro opcional:

function soma(n1, n2){
    return n1+n2
}

console.log(soma(6, 4))
console.log(soma(6))

// Rodando o código vemos que o resultado da primeira chamada é o retorno "10"
// enquanto o da segunda é "NaN", "Not a Number", que pode ser considerado um erro
// já que isso ocorreu porque não foi definido um valor para "n2", apenas para "n1"

// Vejamos a mesma função com parâmetro opcional

function soma2(n1=0, n2=0){
    return n1+n2
}

console.log(soma2(6))

// Aqui não teremos um "NaN", pois eu previamente defino que se não for passado
// um argumento real na chamada da função, n1 == 0 e n2 == 0, e nesse caso passo
// um argumento real apenas para n1, o "6", então, 6+0 retorna "6"