var http = require('http');

console.log("Iniciando o servidor na porta 8181...");
http.createServer(
    function(requisicao, resposta) 
    {
        return resposta.end("Ola mundo");
    }

).listen(8181);
console.log("Servidor iniciado.");

