const Contact = require('../models/contact');

module.exports.list = function (req, res, next) {
    Contact.find('prenom nom')
        .then(contacts => res.json(contacts))
        .catch(next);
};

module.exports.add = function (req, res, next) {
    let contact = new Contact(req.body);
    contact.save()
        .then(contact => res.json(contact))
        .catch(next);
};

module.exports.show = function (req, res, next) {
    const id = req.params.id;

    Contact.findById(id)
        .then(contact => {
            if (!contact) {
                return next();
            }
            res.json(contact)
        })
        .catch(next);
};