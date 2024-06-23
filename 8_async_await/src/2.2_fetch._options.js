// Agora que temos as bases do fetch, vamos falar sobre "opções" na sua chamada
// Qualquer dúvida volte ao documento anterior, mas no geral, todo código novo
// aqui entrará como "argumento" do fetch, da seguinte maneira:

// fetch(url, { 
//      config1, 
//      config2, 
//      config3)
// })
//      .then()
//      .catch()

fetch('https://api.example.com/data', {
    method: 'POST',                                 // GET(obter), POST(enviar), PUT(atualizar) E DELETE(excluir) são as possibilidades
    headers: {                                      // Adicionar cabeçalhos HTTP personalizados
        'Content-Type': 'application/json',             // especifíca o tipo de dados recebidos ou enviados
        'Authorization': 'Bearer token_aqui'            // enviar tokens de autorização
    },
    body: JSON.stringify({                          // Enviar dados no corpo da requisição
        name: 'John',
        age: 30
    }),
    mode: 'cors',                                   // Controlar a política de CORS (Cross-Origin Resource Sharing).
    credentials: 'include',                         // Controlar o envio de cookies e cabeçalhos de autorização.
    cache: 'no-cache',                              // Controlar a política de cache para a requisição.
    redirect: 'follow',                             // Controlar o comportamento de redirecionamentos HTTP.
    referrer: 'client',                             // Controlar o valor do cabeçalho Referer.
    integrity: 'sha256-abcdef'                      // Verificar a integridade dos recursos baixados usando sub-resource integrity (SRI).
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Esse acima é um exemplo com todas as configurações de um fetch setadas, não 
// que eu entenda completamente nessa altura cada uma delas, mas é bom manter
// um exemplo assim por aqui.