const Contact = function(prenom) {

    this.hello = function() {
        return `Bonjour je m'appelle ${prenom}`;
    };
};

const romain = new Contact('Romain');
console.log(romain.hello());

const jean = new Contact('Jean');
console.log(jean.hello());

console.log(romain.hello === jean.hello); // false
