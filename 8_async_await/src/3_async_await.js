// Após entendermos sobre promises, fetch e seus usos e funcionamentos,
// podemos finalmente falar sobre "async" e "await". Não é algo tão complexo
// na verdade, isso se tivermos compreendido os assuntos anteriores.

///////////
// ASYNC //
///////////

// Basicamente utilizaremos "async" na criação de um bloco de algoritmo
// declarando que uma função será assíncrona, ou seja, permitindo que o
// código siga rodando sem bloquear o restante dos algoritmos. É algo como
// uma "grande promise", vamos entender o porque, abaixo no "await".

///////////
// AWAIT //
///////////

// "await" é a palavra que utilizaremos para definir, dentro da função
// assíncrona criada com async, que em "tal ponto" a execução do código 
// dentro do bloco async, deve esperar a resolução/retorno da requisição
// seguinte para dar seguimento ao seu próprio algoritmo

// Vamos entender um pouco melhor observando o exemplo:

async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();

// Vamos notar algumas coisas acima:
// 1. Ter um bloco de função criada com async vai nos permitir uma função não bloqueante
//    em sua chamada, ou seja, se essa função demorasse 2 minutos para obter um retorno,
//    sem o o "async", tudo que viesse após sua callback em um algoritmmo maior, teria de
//    aguardar, e nem sempre queremos isso já que podemos ter outras funções ou até mesmo
//    telas de carregamento que poderiam estar sendo executadas.
// 2. Async sempre possuirá um bloco try{} e um bloco catch{}, que funcionará basicamente
//    como um then/catch ou um resolve/reject que já vimos anteriormente. O bloco try será
//    executado inicialmente e, dando tudo certo o catch não será executado, caso contrário
//    o catch será executado e é ali que estará minha tratativa de erro
// 3. Dentro do try eu crio constantes para armazenar os dados necessários, analisemos linha a linha.
// 4. Na linha 27, response recebe o retorno de uma API
// 5. Na linha 28, data recebe o retorno da mesma API formatada em .json
// 6. Na linha 29, eu solicito a exibição da API já formatada, no console
// 7. Agora note que, é apenas graças ao uso de "await" antes do fetch, que na linha seguinte
//    eu posso formatar o retorno em .json, pois o async espera que o fetch seja resolvido
//    antes de definir o valor real de data. Sem o "await" as duas constantes tentariam obter
//    valor quase ao mesmo tempo sem que a segunda esperasse pela primeira ser resolvida, e
//    essa espera é muito necessária já que a segunda faz uso do valor da primeira.
//    O mesmo acontece com a segunda em relação ao console.log(), este só consegue exibir algo
//    quando esse algo possui algum valor, e esse valor só existe quando console.log() é chamado
//    porque, com o "await" da linha 28, a função espera a resolução/retorno de "data" antes
//    de seguir com sua execução. 
