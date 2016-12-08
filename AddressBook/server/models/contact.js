const mongoose = require('mongoose');

const Contact = mongoose.model('contacts', {
    prenom: String,
    nom: String,
    email: String,
    telephone: String
});

module.exports = Contact;