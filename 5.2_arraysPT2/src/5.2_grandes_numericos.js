const contagem = [...Array(20).keys()].map(i => i + 1);
console.log(contagem)

// Sabendo agora da estruturação correta e do que está acontecendo
// no código acima, podemos pensar em outras maneiras de utilizar
// essa estrutura a fim de tornala mais versátil. Como vimos antes,
// o código acima nos permite criar grandes arrays numéricos com os
// números subindo de um em um com uma única linha de código

const contagem2 = [...Array(20).keys()].map(i => (i+1)*5);
console.log(contagem2)

// Nesse segundo exemplo eu tenho a mesma contagem que no primeiro,
// porém aqui, além de poder escolher quantos números eu quero no
// array, escolho também o "passo", ou seja, de quanto em quanto
// eu quero que o meu array conte, nesse caso, de 5 em 5.

const contagem3 = [...Array(Math.floor(22 / 5)).keys()].map(i => (i+1)*5);
console.log(contagem3)

// Outra alternativa, como vemos nesse terceiro exemplo, seria
// não escolher a quantia de números e o passo, mas o número
// máximo e o passo.

// Tenhamos que 22 como número máximo e ambos os 5 como passo

// No caso acima, ao invés de criar um Array a partir do número 20
// crio a partir do resultado matemático de "22/5 arredondado pra
// baixo", é isso o que faz o "Math.floor".

// Ou seja, o Array é criado a partir do número 4, tendo então
// índices de "0, 1, 2 e 3", esses índices são transformados em
// valores e map transforma isso em "1, 2, 3 e 4" a partir de i+1
// e depois em "5, 10, 15, 20", a partir de resultado*5

// (por curiosidade, Math.ceil, arredonda pra cima, então criaria
// o Array com 5 espaços e, no fim teríamos uma contagem até 25)