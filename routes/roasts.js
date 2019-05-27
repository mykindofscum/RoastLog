var express = require('express');
var router = express.Router();
var roastsCtrl = require('../controllers/roasts');

router.get('/', roastsCtrl.index);


module.exports = router;