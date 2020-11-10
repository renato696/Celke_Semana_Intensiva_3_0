const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/celke', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then (() => {
    console.log("Conexao com o BD MongoDB realizada com sucesso!");
}).catch((err) => {
    console.log("Erro: conexao com o BD MongoDB não realizada com sucesso! " + err);
});


app.get('/', (req, res) => {
    res.json({name: "Cesar"});
});

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso na porta 8080: http://localhost:8080")
});