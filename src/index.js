const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);
const port = 3000;

const fs = require('fs');
const os = require('os');
const interfaces = os.networkInterfaces();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(express.json());

let valueAtual = "1";

let localIp = '';


for (const iface of Object.values(interfaces)) {
    for (const config of iface) {
      if (config.family === 'IPv4' && !config.internal) {
        localIp = config.address;
      }
    }
  }

  if (localIp) {
    // Lê conteúdo atual do .env (se existir)
    let envContent = '';
    try {
      envContent = fs.readFileSync('.env', 'utf-8');
    } catch (err) {
      // .env não existe, vamos criar
    }
  
    // Substitui ou adiciona a variável IP_LOCAL
    const newLine = `IP_LOCAL=${localIp}`;
    if (envContent.includes('IP_LOCAL=')) {
      envContent = envContent.replace(/IP_LOCAL=.*/g, newLine);
    } else {
      envContent += `\n${newLine}`;
    }
  
    fs.writeFileSync('.env', envContent.trim());
    console.log('IP local salvo no .env!');
  } else {
    console.log('Não foi possível detectar o IP.');
  }

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

app.get('/config', (req, res) => {
    res.json({ localIp });
});

app.get('/',(req, res)=>{
   res.sendFile(path.join(__dirname, '..','public', 'index.html'));
});

app.listen(port, ()=>{
    console.log("Server Running at http://localhost:"+port);
    console.log('IP local:', localIp);
});