var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.get('/:id', reviewsCtrl.show);
router.post('/roasts/:id/reviews', reviewsCtrl.create);

module.exports = router;