class Contact {
    constructor(prenom) {
        this.prenom = prenom;
    }

    hello() {
        return `Bonjour je m'appelle ${this.prenom}`;
    }
}

console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function

const romain = new Contact('Romain');
console.log(romain.hello());

const jean = new Contact('Jean');
console.log(jean.hello());

console.log(romain.hello === jean.hello);

console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
