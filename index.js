
    const express = require('express');

    const app = express();            

    app.get("/", (request, response) => {
        return response.json({
            evento: "Semana OmniStack",
            aluno: "José Carlos da Silva Filho",
            matricula: 2017102009,
            turma: 823,
            unidade: "Méier II"
        });
    });

    app.listen(3333);
    

