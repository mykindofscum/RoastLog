const User = require('../models/user');

module.exports = {
    index,
    privateView
};

function index(req, res, next) {
//     console.log(req.query)
// let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
// let sortKey = req.query.sort || 'name';
// User.find(modelQuery)
// .sort(sortKey).exec(function(err, students) {
//     if (err) return next(err);
    res.render('index', {
        user: req.user,
        title: 'Welcome to OAuth'
        });
    }

function privateView(req, res) {
    res.send("You found something private");
}
