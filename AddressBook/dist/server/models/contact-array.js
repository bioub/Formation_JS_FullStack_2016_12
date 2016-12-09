const contacts = [{
    prenom: 'Steve',
    nom: 'Jobs',
    id: 123
}, {
    prenom: 'Bill',
    nom: 'Gates',
    id: 999
}];

// Récupérer tous les contacts
// Contact.find(function(err, contacts) {
//
// });

// Ajouter un contact
// var contact = new Contact({prenom: 'Jean', nom: 'Dupont'});
// contact.save(function(err, contact) {
//
// });

class Contact {
    constructor(obj) {
        this._obj = obj;
    }
    save(cb) {
        this._obj.id = contacts[contacts.length - 1].id + 1;
        contacts.push(this._obj);
        cb(false, this._obj);
    }
    static find(cb) {
        cb(false, contacts);
    }
}

module.exports = Contact;