const express = require('express');
const path = require('path');
const routerContact = require('./routes/contact');

const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/addressbook');

const app = express();

app.use(express.static(path.resolve(__dirname + '/../client')));
app.use('/api/contacts', routerContact);

app.use('/api', (req, res, next) => {
    res.statusCode = 404;
    res.json({
        msg: '404 Not Found'
    });
});

app.use('/api', (err, req, res, next) => {
    res.statusCode = 500;
    res.json(err);
});

// Pour que Angular traite les pages qui n'existe pas côté serveur
app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.listen(8080, () => {
    console.log('Server started http://localhost:8080');
});