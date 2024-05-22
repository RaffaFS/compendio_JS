// No total possuímos três operadores lógicos, negação(!), conjunção(&&) e disjunção(||)
// Tal qual os relacionais, estes podem fazer apenas comparações ou, servir de gatilho
// para algoritmos, nesse caso, o algoritmo automaticamente disparado se o resultado
// for true

// O primeiro é montado com apenas um operando após ele, geralmente uma variável ou const
// ele serve para verificar se um booleano é falso, veja:

console.log()

let chuva = true;
if(!chuva){
    console.log("Parou de chover, posso sair brincar!")
}
else{
    console.log("Ainda está chovendo, vou ficar em casa")       // Retornará o else pois chuva = true
}

let chuva2 = false;
if(!chuva2){
    console.log("Parou de chover, posso sair brincar!")         // Retornará o if pois chuva2 = false
}
else{
    console.log("Ainda está chovendo, vou ficar em casa")
}


// já os outros dois, levam um operando antes e um depois para cada utilização
// Sendo que && funciona como "e", enquanto || funciona como "ou"
// Ou seja, no primeiro caso todos os operandos/expressões precisam estar corretas
// No segundo basta que uma esteje correta, veja:

console.log

let professor = false
let estudante = true
let nome = "Rafael"
let idade = 24

console.log(idade >= 18 && idade <= 30)     // Retorna true pois idade está entre 18 e 30
console.log(idade >= 25 && idade <= 30)     // Retorna false pois idade não está entre 25 e 30
console.log()
console.log(nome == "Rafael" || nome == "Lucas")    // Retorna true pois ao menos um dos operandos é verdadeiro
console.log()
console.log(professor && estudante)     // Retorna false pois apenas um dos operandos é verdadeiro
console.log(professor || estudante)     // Retorna true pois ao menos um dos operandos é verdadeiro
console.log()
// Quando meus operandos possuem valores booleanos, não preciso compará-los à algo, basta citá-los

// Além disso, posso trabalhar com mais de dois valores para && ou || e também juntando ambos
// A ordem de prioridades de resolução para os lógicos é "!", "&&" e "||"

console.log(estudante && !professor && nome == "Lucas" && idade >= 21)
            // Neste exemplo note:
            // 1. O retorno será "false" pois todos os opeerandos/expressões são verdadeiras, com exceção do nome
            // 2. Apesar de "professor == false", "!professor == true", 

console.log(estudante || !professor || nome == "Lucas" || idade >= 21)
            // Trabalhar com || permitiria que outros usuários pudessem "acessar uma área" por exemplo
            // Mas na ao mesmo tempo permitiria que uma pessoa com menos de 21 ou que não fosse estudante
            // acessasse tal área também.

console.log(estudante && !professor && nome == "Lucas" || nome == "Rafael" || nome == "Gustavo" && idade >= 21)
            // Aqui só terá acesso quem:
            // 1. for estudante, 2. não for professor, 3. tiver 21 anos ou mais e 4. ter o nome Lucas ou Rafael ou Gustavo
            // Caso os nomes não tenham importância para esse "acesso", eu posso simplesmente retirar tudo referente a eles
            // Assim basta que os outros operandos/expressões retornem true

console.log(estudante && !professor && idade >= 21)