const Roast = require('../models/roast');

module.exports = {
    index,
    show,
    new: newRoast,
    create,
    delete: delRoast,
    edit,
    update
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

function show(req, res) {
    Roast.findById(req.params.id, (err, roast) => {
        if (err) return res.redirect('/roasts/show');
        res.render('roasts/show', {
            title: 'Roast Detail', 
            roast 
        });
    });
}
      
function newRoast(req, res) {
    res.render('roasts/new', { title: 'Add Roast Log'});
}

function create(req, res) {
    req.body.nowSharing = !!req.body.nowSharing;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    var roast = new Roast(req.body);
    roast.save((err) => {
        if (err) return res.redirect('/roasts/new');
        res.redirect(`/roasts`);
    });
}

function delRoast(req, res) {
    Roast.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            console.log(err);
            res.redirect('/roasts');    
        }
        res.redirect('/roasts');
    });
};

function edit(req, res) {
    Roast.findById(req.params.id, (err, roast) => {
        res.render('roasts/edit', {roast});
    });
}

function update(req, res) {
    req.body.nowSharing = req.body.nowSharing === 'on';
    
    Roast.findByIdAndUpdate(req.params.id, req.body, (err, roast) => {    
        if (err) {
            console.log(err);
            res.redirect('/roasts');
        }
        res.redirect('/roasts');
    });
}




