// Ex : Jeu du plus ou mons
// 1- Générer un entier aléatoire entre 0 et 100 inclus (API Math sur MDN)
// 2- Demander et récupérer la saisie d'un entier (API readline de Node)
// et afficher si l'entier recherché est plus grand, plus petit ou trouvé
// 3- Pouvoir trouver en plusieurs tentatives
// 4- Stocker chaque tentative dans un tableau et les réafficher entre chaque tour (API Array sur MDN)
// 5- Afficher une erreur et rejouer si la saisie n'est pas un nombre

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Jeu {
    constructor(options = {}) {
        const min = options.min || 0;
        const max = options.max || 100;
        this.entierAlea = Math.floor(Math.random() * max - min + 1) + min;
        this.essais = [];
    }

    jouer() {
        if (this.essais.length) {
            console.log('Vous avez déjà joué : ' + this.essais.join(', '));
        }

        rl.question('Saisir un entier entre 0 et 100 : ', (answer) => {

            const entierSaisi = Number(answer);

            if (Number.isNaN(entierSaisi)) {
                console.log('Erreur : il faut saisir un nombre');
                return this.jouer();
            }

            this.essais.push(entierSaisi);

            if (entierSaisi < this.entierAlea) {
                console.log('Trop petit');
                return this.jouer();
            }

            if (entierSaisi > this.entierAlea) {
                console.log('Trop grand');
                return this.jouer();
            }

            console.log('Gagné');
            rl.close();
        });
    }
}


const jeu = new Jeu({
    max: 10
});

jeu.jouer();