const Router = require('express').Router;
const contact = require('../controllers/contact');

// Architecture RESTful (convention d'URL)
// Lister GET /prefix
// Ajouter POST /prefix
// Remplacer PUT /prefix/123
// Afficher GET /prefix/123
// Supprimer DELETE /prefix/123

const router = new Router();

router.get('/', contact.list);
router.post('/', contact.add);

module.exports = router;