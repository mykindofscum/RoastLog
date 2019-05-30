const Roast = require('../models/roast');
const Review = require('../controllers/reviews');

module.exports = {
    create,
    show
    // addReview,
};


// function addReview(req, res, next) {
//     req.roast.reviews.push(req.body);
//     req.roast.save(function(err) {
//         res.redirect('/roasts');
//     });
// }

function create(req, res) {    
    Roast.findById(req.params.id, function(err, roast) {
        roast.reviews.push(req.body);
        roast.save(function(err) {
            if (err) {
                console.log(err)
                res.redirect(`/roasts/${roast._id}`);
            }
            res.redirect(`/roasts/${roast._id}`);
        });
    });
}

function show(req, res) {
    Review.findById(req.params.id, function(err, roast) {
        console.log('req.params.id');
        if (err) return res.redirect(`/roasts/show`);
        res.render('roasts/show', {
            title: 'Roast Reviews', 
            review 
        });
    });
}