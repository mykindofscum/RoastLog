const express = require('express');
const router = express.Router();
const roastsCtrl = require('../controllers/roasts');

// TODO: Protect this route with isLoggedIn
router.get('/', isLoggedIn, roastsCtrl.index);
router.get('/new', roastsCtrl.new);
router.get('/:id', roastsCtrl.show);
router.post('/', roastsCtrl.create);
router.delete('/:id', roastsCtrl.delete);
router.get('/:id/edit', roastsCtrl.edit);
router.put('/:id', roastsCtrl.update);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;