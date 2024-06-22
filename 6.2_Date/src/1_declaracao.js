// É bastante comum o uso de datas na programação no geral
// Geralmente começamos com a criação de um "Objeto Date" para armazenar as informações necessárias
// Podemos fazer isso com alguns parâmetros diferentes

const data1 = new Date()

// Aqui teremos a data "de agora" ou, melhor dizendo, do momento exato de quando a constante for chamada
// isso, é claro, em ms e, tendo como "marco 0" o dia "1 de janeiro de 1970".

const data2 = new Date(5464984545)

// Aqui eu passo um momento no tempo em ms, que tembém poderia estar numa variável ou constante

const date3 = new Date("Jan 31, 2025 10:00:00");
const date4 = new Date(2024, 5, 21, 12, 34, 56, 789);

// Nesses dois últimos casos eu pego datas específicas, tal qual fiz com os ms mais acima, porém aqui
// no primeiro caso passo numa string: "mes dia, ano hora:minutos:segundos" e, no segundo caso passo
// apenas valores numéricos sendo a ordem: ano, mes, dia, horas, minutos, segundos, milisegundos.