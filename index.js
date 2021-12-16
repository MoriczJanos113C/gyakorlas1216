//űrlap eddig vett dolgok(text, input, checkbox, submit, button, ) MINDEGYIKET ID-val ellátni
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const port = 4444;

app.get('/', function (req, res) {
     const htmlFile = path.join(__dirname, "views/index.html");
     res.sendFile(htmlFile);
    
   
});

app.listen(port);