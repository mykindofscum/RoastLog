const User = require('../models/user');
const Roast = require('../models/roast');

module.exports = {
    index,
    privateView,
    createReview
};

function index(req, res, next) {
    console.log(req.user);
    User.find({}, function(err, foundUsers) {
        foundUsers,
        res.render('users/index', {
        user: req.user,
        title: 'Coffee Roasting Log'
            });    
        });
    }

function privateView(req, res) {
    res.send("You found something private");
}

function createReview(req, res) {
    Roast.findById(req.params.id, function(err, roast) {
        roast.reviews.push(req.body);
        roast.save(function(err) {
            res.redirect(`/roasts/${roast_id}`);
        });
    });
}

