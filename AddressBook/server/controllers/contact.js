const Contact = require('../models/contact');

module.exports.list = function (req, res, next) {
    Contact.find((err, contacts) => {
        res.json(contacts);
    });
};

module.exports.add = function (req, res, next) {
    let contact = new Contact(req.body);
    contact.save((err, contact) => {
        res.json(contact);
    });
};

module.exports.show = function (req, res, next) {
    const id = req.params.id;

};