// Operadores relacionais fazem a comparação entre valores e nos retornam um "boolean"
// Ou seja, nos retornam uma afirmação de "verdadeiro" ou "falso" que pode ser útil por si só ou
// Pode também ser utilizada como trigger para funções caso o resultado seja um ou outro.

console.log(5>2)            // retorna "true" se o primeiro valor for "maior que" o segundo
console.log(5>2<1)          // retorna "true" se o primeiro valor for "maior que" o segundo e o segundo "menor que" o terceiro
console.log(5<2)            // retorna "true" se o primeiro valor for "menor que" o segundo
console.log(2>=2)           // retorna "true" se o primeiro valor for "maior ou igual" ao segundo
console.log(2<=2)           // retorna "true" se o primeiro valor for "menor ou igual" ao segundo
console.log(5=='5')         // retorna "true" se o primeiro valor for "igual" ao segundo
console.log(5==='5')        // retorna "true" se o primeiro valor for "igual" ao segundo "em valor e tipo do dado"
console.log(5!=5)           // retorna "true" se o primeiro valor for "diferente" do segundo
console.log(5!=='5')        // retorna "true" se o primeiro valor for "diferente" do segundo "em valor ou tipo do dado"

// Lembre que mesmo que aa princípio estejamos tratando mais de números pelo entendimento
// Usaremos muito alguns destes operadores em outros casos, vejamos alguns exemplos abaixo

console.log("=======Segunda_Parte")
const nome = 'Rafael'
const idade = 24
const curso = 'JavaScript'

console.log(idade > 18)                 // retornará verdadeiro por 24 ser maior que 18
console.log(idade > 30)                 // retornará falso por 24 ser menor que 18
console.log()
console.log(nome == 'Rafael')           // retornará verdadeiro por o dado ser o mesmo
console.log(curso == 'javascript')      // retornará falso pois mesmo a informação sendo a mesma, aqui escrevi tudo em minúsculas
console.log()
console.log(idade === '24')             // retornará falso pois "tem o mesmo valor mas", o tipo de um é "number" e do outro é "string"
console.log(nome != idade)              // retornará true pois os valores das variáveis diferem entre si

