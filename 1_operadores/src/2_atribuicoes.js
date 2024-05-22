// Os operadores relacionais são basicamente variações do "=" (leia "=" como "recebe")
// utilizados para atribuir determinado valor (numérico ou não) à uma var, let ou const

let variavel1 = 6             // aqui eu faço uma atribuição simples de valor
console.log(variavel1)

variavel1 = 3+8               // aqui eu faço uma reatribuição já que estou lidando com uma variável
console.log(variavel1)

variavel1 = "Rafael carrega um grão de feijão no bolso"     // novamente faço uma reatribuição de valor
console.log(variavel1)

// Essas são atribuições simples utilizando o "="
// Mas também temos "+=", "-=", "*=", "/=", "%=" e "**="

// Essas são auto-atribuições
// "n1 += 4" significa "n1 recebe ele mesmo mais quatro". Veja:

let n1 = 8
n1 += 4
console.log(n1)

// Se "n1 = 8", logo "n1 += 4" é o mesmo que "n1 = 8+4", então "n1 = 12"
// Veja outros exemplos

n1 = 8
n1 -= 4
console.log(n1)

n1 = 8
n1 *= 4
console.log(n1)

n1 = 8
n1 /= 4
console.log(n1)

n1 = 8
n1 %= 4
console.log(n1)

n1 = 8
n1 **= 4
console.log(n1)

// Além disso, há um desses operadores que também podemos utilizar para strings e outros casos, veja:

let var1 = "Rafael Gonçalves Ribeiro"
var1 += " da Silva Santos Xavier"
console.log(var1)