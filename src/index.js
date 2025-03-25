const express = require('express');
const path = require('path');
const app = express();
const port = 8080;


app.use(express.static(path.join(__dirname, '..')));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '..','public', 'index.html'));
});


app.listen(port, ()=>{
    console.log("Server Running at http://localhost:"+port);
});