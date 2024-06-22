// A quantidade de métodos que se tem para trabalhar com Dates é absurda
// Vou listar abaixo o que considero serem os principais métodos para Date

/////////////////////////
// MÉTODOS DE CAPTAÇÃO //
/////////////////////////

getTime()               // Retorna o momento em milissegundos tendo como "marco 0" o dia "1 de janeiro de 1970"

getHours()              // retorna a hora (0...23)
getMinutes()            // retorna os minutos (0...59)
getSeconds()            // retorna os ssegundos (0...59)

getDate()               // Retorna o dia e mês (1-31)
getDay()                // Retorna o dia da desemana (0...6)
getMonth()              // Retorna o mês (0...11)
getFullYear()           // Retorna o ano com quatro dígitos

getUTCHours()           // Explicação abaixo

// Com exceção de getTime, todos eles tem suas "versões UTC", basta escrever "UTC" logo após get e, a diferença
// entre esses e os padrões sem UTC, é que os primeiros utilizam o fuso local, enquanto aqueles com UTC utilizam
// o fuso do "Meridiano de Greenwich", "UTC+0" como referência global para aplicações mais específicas.

///////////////////////////
// MÉTODOS DE DECLARAÇÃO //
///////////////////////////

setDate(diaN)           // Eu posso utilizar todos os métodos acima com set, ao invés de get, mesmo aqueles com
                        // UTC, isso para definir uma data específica para um Date passando ela como argumento

// Sempre vou passar algumentos com valores numéricos de acordo com qual é o método e, para métodos que pegam
// mais de um argumento, passo aquele de razão maior primeiro. Por exemplo

setHours(23, 59, 59, 999)
setFullYear(2024, 12, 31)

///////////////////////////
// MÉTODOS DE FORMATAÇÃO //
///////////////////////////

toString()                                  // Retorna a data como uma string legível.
toUTCString()                               // Retorna a data como uma string em UTC.

toDateString()                              // Retorna a parte de data de um objeto Date como uma string legível.
toTimeString()                              // Retorna a parte de hora de um objeto Date como uma string legível.
toLocaleDateString(locale, options)         // Retorna a parte de data de um objeto Date como uma string, de acordo com o idioma.
toLocaleTimeString(locale, options)         // Retorna a parte de hora de um objeto Date como uma string, de acordo com o idioma.
toISOString()                               // Retorna a data no formato ISO (YYYY-MM-DDTHHmm.sssZ).
toJSON()                                    // Retorna a data como uma string JSON.