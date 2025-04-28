const express = require("express");
const path = require('path');
const app = express();

let valueAtual = "1";

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/api/data', (req, res) => {
    if (req.body) {
        valueAtual = req.body.value;
        console.log("Nova temperatura recebida:", valueAtual);
        res.status(200).send("Dados recebidos com sucesso");
    } else {
        res.status(400).send("Erro: Nenhuma temperatura foi enviada");
    }
});

app.get('/api/data', (req, res) => {
    res.json({ value: valueAtual });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..','public', 'index.html'));
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;