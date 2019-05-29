var express = require('express');
var router = express.Router();
var roastsCtrl = require('../controllers/roasts');

// TODO: Protect this route with isLoggedIn
router.get('/', roastsCtrl.index);
router.get('/new', roastsCtrl.new);
router.get('/:id', roastsCtrl.show);
router.post('/', roastsCtrl.create);

// function isLoggedIn(req, res, next) {
//     if ( req.isAuthenticated() ) return next();
//     res.redirect('/auth/google');
// }

module.exports = router;