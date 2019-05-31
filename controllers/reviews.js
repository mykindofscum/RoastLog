const Roast = require('../models/roast');
const Review = require('../controllers/reviews');

module.exports = {
    create,
    show
};

function create(req, res) {    
    Roast.findById(req.params.id, (err, roast) => {
        roast.reviews.push(req.body);
        roast.save((err) => {
            if (err) {
                res.redirect(`/roasts/${roast._id}`);
            }
            res.redirect(`/roasts/${roast._id}`);
        });
    });
}

function show(req, res) {
    Review.findById(req.params.id, (err, roast) => {
        if (err) return res.redirect(`/roasts/show`);
        res.render('roasts/show', {
            title: 'Roast Reviews', 
            review 
        });
    });
}