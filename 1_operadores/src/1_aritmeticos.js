// De início temos os operadores binários, aqueles que operam entre dois valores:

console.log(5+2)        // "+" Soma os valores passados
console.log(5-2)        // "-" Subtrai o segundo valor do primeiro
console.log(5*2)        // "*" Multiplica um valor pelo outro
console.log(5/2)        // "/" Faz uma divisão real do primeiro valor pelo segundo
console.log(5%2)        // "%" Faz uma divisão inteira do primeiro valor pelo segundo e retorna como resultado o resto da divisão
                        //     Nesse caso  divisão inteira de 5 por 2 é 2 e sobra 1, pois 1/2 não é 0.5 que não é inteiro
console.log(5**2)      // "**" Faz a potenciação do primeiro valor pelo segundo (5 ao quadrado nesse caso)

// Vejamos agora o próximo passo
// Devemos lembrar que, quando temos mais de um operador numa equação, dependendo do tipo
// Existe uma hierarquia sobre qual operação será realizada primeiro, essa hierarquia é: 
// 1. "**"
// 2. "%", "/" e "*" (o que vier primeiro será resolvido primeiro)
// 3. "-" e "+" (o que vier primeiro será resolvido primeiro)

// Caso deseje que um operador de prioridade mais baixa seja resolvido antes, coloco essa equação entre "()"
// Veja os exemplos abaixo

console.log("=======Segunda_Parte")
console.log(5*10**2)
console.log((5*10)**2)

console.log(5%2*8/2)
console.log(8/2%5*2)

console.log(10+2*6**2)
console.log(((10+2)*6)**2)

// Ainda temos também os operadores "++" e "--", incremento e decremento respectivamente
// que funcionam com um único valor, aumentando ou diminuindo em uma unidade o valor passado
// Note também que faz diferença se o operador vem antes ou depois do valor, veja:

console.log("=======Terceira_Parte")

let n1 = 10
console.log(`n1 é ${n1++}`)
console.log(`n1 é ${n1}`)

let n2 = 20

console.log(`n2 é ${++n2}`)
console.log(`n2 é ${n2}`)

// Quando o operador vem depois do valor ele só é alterado após o fechamento daquele algoritmo ou etapa
// Quando o operador vem antes do valor ele é alterado durante a execução do algoritmo ou etapa

console.log("=======Quarta_Parte")

let n3 = 10
console.log(`n3 é ${n3+++10}`)
console.log(`n3 é ${n3}`)

let n4 = 20
console.log(`n4 é ${++n4+10}`)
console.log(`n4 é ${n4}`)

// Ou seja, no primeiro caso o novo valor só será utilizado na próxima chamada do algoritmo
// enquanto que no segundo caso o valor será atualizado e este já utilizado na atual execução do algoritmo