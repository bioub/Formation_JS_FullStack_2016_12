const Contact = require('../models/contact');

module.exports.list = function (req, res, next) {
    Contact.find((err, contacts) => {
       res.json(contacts);
    });
};

module.exports.add = function (req, res, next) {
    let contact = new Contact({prenom: 'Jean', nom: 'Dupont'});
    contact.save((err, contact) => {
        res.json(contact);
    });
};