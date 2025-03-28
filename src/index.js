const express = require('express');
const path = require('path');
const app = express();
const port = 8080;


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/temperatura',(req, res)=>{
    res.sendFile(path.join(__dirname, '..','public', 'temperatura.html'));
});

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '..','public', 'index.html'));
});

app.get('/api/data', (req, res) => {
    const dadoDinamico = {
        temperatura: (Math.random() * 10 + 20).toFixed(2)
    };
    res.json(dadoDinamico);
});

app.listen(port, ()=>{
    console.log("Server Running at http://localhost:"+port);
});