// Além de podermos mudar propriedades de estilo e conteúdo do HTML,
// Podemos também alterar propriedades e atributos diretas de uma tag/elemento

// Um bom uso disso seria o seguinte:
// As vezes precisamos alterar vários valores de estilo para um elemento
// então vale mais deixar uma classe pronta no css e, Por meio do JS, 
// apenas alterar a classe do elemento para a classe com os estilos desejados

const txtBox2 = document.querySelector('#text-box2')

txtBox2.addEventListener('dblclick', alteraClasse)
function alteraClasse(){
    txtBox2.classList.add('yellow-box')
}

// Seguindo a ordem correta de estudos, as linhas 9, 11 e 12 já estão explicadas
// Na linha 13 menciono o elemento e, assim como acesso uma propriedade de estilo
// "inline" com "element.style", aqui com "element.classList", acesso a propriedade
// de classes, dentro dela eu escolho add('classe') ou remove('classe') de acordo
// com as minhas necessidades para o projeto

// Se eu quiser manter no elemento alguns parâmetros que já possui, basta que eu
// adicione a nova classe, lembrando de, dentro do arquivo de estilo, defini-la
// após a classe principal, pré-mudança, do contrário utilizariamos remove na "velha classe"

// Além disso, algo que temos aqui que pode ser considerado um problema é que
// o elemento "não volta ao normal ao repetirmos a ação/evento", há um tempo 
// teríamos de elaborar um algoritmo com cases ou ifs

// Atualmente apenas utilizamos "classList.toggle('classe')"
// Ele faz o papel de adicionar uma classe caso ela não exista ou, removê-la
// caso ela exista, como um liga/desliga, basicamente transformando o evento em um "interruptor"

const txtBox3 = document.querySelector('#text-box3')

txtBox3.addEventListener('dblclick', alteraClasse2)
function alteraClasse2(){
    txtBox3.classList.toggle('blue-box')
}

// Eu poderia utilizar quantos toggles eu desejasse, enquanto alguns atuariam como add,
// outros atuariam como remove, a depender do existir ou não de determinada classe
// Tal qual com remove, o "desligar uma classe" pelo toggle é útil quando não queremos
// reutilizar propriedades da antiga classe.

// Não vou imaginar um grande caso, mas com a propriedade position, por exemplo,
// Imaginemos que temos um elemento com position: relative e outro com position: absolute
// 1. O absolute está como "top: 0; left: 0;" e quero movê-lo para direita
// 2. Se eu quero apenas jogar o elemento para o outro extremo usando classList.toggle
// 3. Criaria uma classe com "right: 0;", mas, isso ao invés de mover, esticaria o elemento
// 4. Por isso eu precisaria ter dois .toggle, um para a classe atualmente existente
//    e outro para a ainda não adicionada, além disso, esta última, precisaria de "top: 0;"
//    também, já que a classe velha será desativada.

// Claro, talvez nem seja a melhor forma de fazer isso, mas é só para exemplificar
// como a reutilização de código indesejada pode atrapalhar algumas vezes