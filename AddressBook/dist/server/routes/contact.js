const Router = require('express').Router;
const contact = require('../controllers/contact');
const bodyParser = require('body-parser');

// Architecture RESTful (convention d'URL)
// Lister GET /prefix
// Ajouter POST /prefix


// Afficher GET /prefix/123
// Supprimer DELETE /prefix/123
// Remplacer PUT /prefix/123

const router = new Router();

router.get('/', contact.list);
router.post('/', bodyParser.json(), contact.add);
router.get('/:id', contact.show);

module.exports = router;