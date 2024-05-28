// Antes de falarmos sobre "Promises" e programação assíncrona, é importante
// saber que o JS sempre foi síncrono, single thread, ou seja, executava as
// tarefas de acordo com o que ele ia lendo do código de forma sequencial

// "Promise" é um objeto incluído pós ES6 e, graças à ele é possível hoje 
// trabalhar com o JS de forma assíncrona, executando tarefas em paralelo

// As promisses nos permitem executar duas ou mais partes/algoritmos do
// nosso código, simultâneamente. Isso é especialmente útil para o
// carregamento de dados ou de APIs em paralelo, veja uma comparação:





// Ao pressionar o "Botão 1", após o carregamento dos elementos <p> na page
// poderemos rolar a janela e ver que embora "places" seja mais "leve" de
// carregar, primeiro foi iniciado e finalizado o carregamento de "characters"
// para só então se ter início o carregamento de "places"

// É importante lembrar que:
// 1. Queremos executar as tarefas em paralelo e
// 2. estamos considerando que o tempo de execução de ambos os carregamentos 
// sejam imprevisíveis, seja por questões de hardware do usuário, ou por 
// questões de rede

// Se a ideia fosse apenas ordenar essas funções, poderíamos apenas trocar
// suas posições, e se quiséssemos ainda trabalhar com um momento mais
// específico da execução de cada uma delas, poderíamos trabalhar com
// setTimeout, mas em nenhum dos casos teríamos uma execução em paralelo





//////////////////////////////////////////////////////////////////////////

// Fica aqui como curiosidade que, uma função que chama 3 outras funções onde,
// cada uma delas possuí um "setTimeout", poderá ser considerada uma função
// assíncrona, já que o setTimeout pode definir o início da execução de cada
// função, sendo possível então que a última função chamada seja a primeira a
// ser executada se as outras duas tiverem um setTimeout maior.

// Claro, isso não tem grande interferência no que estudamos acima, afinal
// embora assícrona, nesse caso a função não executará as tarefas/loadings
// em paralelo, apenas decidirá o momento inicial da execução de cada uma

// No caso do "momento inicial da execução" de uma delas "chegar" e a
// anterior ainda estiver rodando, está segunda aguardará o fim da execução
// da primeira antes de iniciar sua própria execução.