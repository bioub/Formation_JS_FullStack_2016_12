const express = require('express');
const morgan = require('morgan');

const server = express();

//
/*
server.use((req, res, next) => {
    console.log(`Requête ${req.method} ${req.url} HTTP/1.1`);
    next();
});
*/
server.use(morgan('dev'));

// GET /
server.get('/', (req, res, next) => {
    res.send('<h2>Accueil</h2>');
});

// POST /
server.post('/', (req, res, next) => {
    res.send('<h2>Accueil</h2>');
});

// répond à toutes les méthodes HTTP sur /toto
server.all('/toto', (req, res, next) => {
    res.send('<h2>Toto</h2>');
});

server.listen(8080, () => {
    console.log('Server started : http://localhost:8080');
});