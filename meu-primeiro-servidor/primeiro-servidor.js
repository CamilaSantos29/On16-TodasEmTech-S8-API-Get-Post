const express = require('express');
const app = express();

app.listen(3000, () =>{
    console.log('deu certo sim ta rodando')
});

app.get("/", (request,response) =>{
    response.status(200).json([{
       "message": "ta aqui sua response "
    }])})

