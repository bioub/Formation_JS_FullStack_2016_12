const express = require('express');
const routerContact = require('./routes/contact');

const app = express();

app.use('/api/contacts', routerContact);

app.listen(8080, () => {
    console.log('Server started http://localhost:8080');
});