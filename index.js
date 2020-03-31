
    const express = require('express');

    const app = express();
    const amor = function(){
        while (true){
            return "Eu te amo!"}}
            

    app.get("/", (request, response) => {
        return response.send(amor);
    });

    app.listen(3333);
    

