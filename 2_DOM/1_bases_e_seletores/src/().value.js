// Abrir esse arquivo novo foi minha melhor escolha em onde deixar as seguintes anotações

// Temos diversos métodos para realizar ações em um elemento selecionado
// ".innerText", ".innerHTML" e ".style" são alguns deles

// Dentre estes temos o ".value", mas o que me faz abrir um documento só para ele
// É o fato de que apenas com ele podemos acessar campos de formulários, ou seja
// Inputs do usuário no geral. Veja:

const campo = document.querySelector('input')
const valorCampo = document.querySelector('input').value

// "campo" armazena a seleção da tag em si como um todo
// "valorCampo" armazena a seleção do valor inserido pelo usuário
// Para deixar mais claro vou dar alguns exemplos

// Com "campo.métodos" poderíamos:
// 1. mudar parâmetros da folha de estilo no geral (cores, bordas, tamanho)
// 2. mudar o HTML interno ou texto interno (caso não fosse um input)

// Com "valorCampo.métodos" poderíamos:
// 1. captar o valor do input e utilizá-lo de inúmeras maneiras
// 2. passar um novo valor dentro do campo do input (ou "re-escolher a opção" se for o caso)

// Para finalizar, tendo "campo" definido, no lugar da linha 11 eu poderia fazer:

const valorCampoo = campo.value

// Mas, caso eu não precise apenas do valor do input, é melhor escrever apenas a linha 11