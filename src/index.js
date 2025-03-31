const express = require('express');
const path = require('path');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({server});
const port = 8080;


app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/temperatura',(req, res)=>{
    res.sendFile(path.join(__dirname, '..','public', 'temperatura.html'));
});

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '..','public', 'index.html'));
});

wss.on('connection', (ws) =>{
    console.log("Client´s connection",+ws.id);

    ws.on('message', (message) =>{
        wss.clients.forEach((client) =>{
            if (client.readyState === WebSocket.OPEN){
                client.send(message);
            }
        });
    });

    ws.on('close', () =>{
        console.log("Client´s desconnection")
    });
});


app.listen(port, ()=>{
    console.log("Server Running at http://localhost:"+port);
});