const Roast = require('../models/roast');


module.exports = {
    index,
    show,

}

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

function show(req, res) {
    Roast.findById(req.params.id)
    
}
