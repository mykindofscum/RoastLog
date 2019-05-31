const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.get('/:id', reviewsCtrl.show);
router.post('/roasts/:id/reviews', reviewsCtrl.create);

module.exports = router;