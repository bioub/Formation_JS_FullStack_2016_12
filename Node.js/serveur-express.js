const express = require('express');

const server = express();

server.all('/', (req, res, next) => {
    res.send('<h2>Accueil</h2>');
});

server.all('/toto', (req, res, next) => {
    res.send('<h2>Toto</h2>');
});

server.listen(8080, () => {
    console.log('Server started : http://localhost:8080');
});