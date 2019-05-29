const Roast = require('../models/roast');

module.exports = {
    create
};


function create(req, res) {
    Roast.findById(req.params.id, function(err, roast) {
        roast.reviews.push(req.body);
        roast.save(function(err) {
            res.redirect(`/roasts/${roast_id}`);
        });
    });
}