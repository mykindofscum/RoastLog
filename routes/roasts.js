var express = require('express');
var router = express.Router();
var roastsCtrl = require('../controllers/roasts');

router.get('/', roastsCtrl.index);
router.get('/new', roastsCtrl.new);
router.get('/:id', roastsCtrl.show);
router.post('/', roastsCtrl.create);

module.exports = router;