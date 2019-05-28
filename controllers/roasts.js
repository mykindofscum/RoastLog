const Roast = require('../models/roast');


module.exports = {
    index,
    // show,
    new: newRoast,
    create
};

function index(req, res, next) {
    Roast.find({}, (err, foundRoasts) => {
        res.render('roasts/index',
            {
            title: 'Roast Logs',
            roasts: foundRoasts
            }
        );
    });
}

function newRoast(req, res) {
    res.render('users', { title: 'Add Roast Log'});
}

function create(req, res) {
    var roast = new Roast (req.body);
    roast.save(function(err) {
        if (err) return res.redirect('/roasts/new');
        res.redirect(`/roasts/${roast._id}`);
    });
}