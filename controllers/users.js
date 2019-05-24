const User = require('../models/user');

module.exports = {
    index,
    privateView
};

function index(req, res, next) {
    console.log(req.user);
    User.find({}, function(err, foundUsers) {
        foundUsers,
        res.render('index', {
        user: req.user,
        title: 'Welcome to OAuth'
            });    
        });
    }

function privateView(req, res) {
    res.send("You found something private");
}


