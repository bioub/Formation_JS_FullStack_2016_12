const express = require('express');
const path = require('path');
const routerContact = require('./routes/contact');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/addressbook');

const app = express();

app.use(express.static(path.resolve(__dirname + '/../client')));
app.use('/api/contacts', routerContact);

app.listen(8080, () => {
    console.log('Server started http://localhost:8080');
});