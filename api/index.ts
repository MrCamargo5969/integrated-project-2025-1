const express = require("express");
const path = require('path');
const app = express();
const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco:', err);
    } else {
      console.log('Conexão com o banco de dados estabelecida com sucesso!');
    }
  });
let valueAtual = "1";

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/api/data', (req, res) => {
    if (req.body) {
        valueAtual = req.body.value;
        console.log("Nova medida recebida:", valueAtual);
        const query = 'INSERT INTO Volume (Volume) VALUES (?)';
        db.query(query, [valueAtual], (err, result) => {
            if (err) {
                console.error("Erro ao inserir no banco:", err);
                return res.status(500).send("Erro ao inserir no banco de dados");
            }
            res.status(200).send("Dados recebidos e inseridos com sucesso");
        });
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