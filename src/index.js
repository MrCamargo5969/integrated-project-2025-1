const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());

let valueAtual = "25.0";

app.post('/api/data', (req, res) => {
    if (req.body.data) {
        valueAtual = req.body.data;
        console.log("Nova temperatura recebida:", valueAtual);
        res.status(200).send("Dados recebidos com sucesso");
    } else {
        res.status(400).send("Erro: Nenhuma temperatura foi enviada");
    }
});

app.get('/api/data', (req, res) => {
    res.json({ value: valueAtual });
});

app.get('/temperatura',(req, res)=>{
    res.sendFile(path.join(__dirname, '..','public', 'temperatura.html'));
});

app.get('/',(req, res)=>{
   res.sendFile(path.join(__dirname, '..','public', 'index.html'));
});

app.get('/data', (req, res) => {
    res.send("Funciona!!!");
});


app.listen(port, ()=>{
    console.log("Server Running at http://localhost:"+port);
});