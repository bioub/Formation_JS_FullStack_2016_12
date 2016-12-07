const Contact = function(prenom) {
    this.prenom = prenom;
};

Contact.prototype.hello = function() {
    return `Bonjour je m'appelle ${this.prenom}`;
};

const romain = new Contact('Romain');
console.log(romain.hello());

const jean = new Contact('Jean');
console.log(jean.hello());

console.log(romain.hello === jean.hello); // true

console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
