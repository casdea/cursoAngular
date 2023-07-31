const express = require('express');
const app = express();

app.listen(4000,function(erro) {
    if (erro) {
        console.log("erro ao iniciar servidor");
    }
    else {
        console.log("Servidor iniciado com sucesso!");
    }
})