const Roast = require('../models/roast');

module.exports = {
    index,
    show,
    new: newRoast,
    create,
    delRoast,
    // edit,
    // update

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
    Roast.findById(req.params.id, function(err, roast) {
        console.log('req.params.id');
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
        console.log('roast.save')
        res.redirect(`/roasts`);
    });
}

function delRoast(req, res, next) {
    Roast.findOne({'roasts._id': req.params.id}, (err, student) => {
        roasts.id(req.params.id).remove();
        roast.save((err) => {
            res.redirect('/roasts');
        });
    });
}

// function edit(req, res) {
//     res.render('roasts/edit', {
//         roast: Roast.getOne(req.params.id),
//         idx: req.params.id
//     });
// }

// function update(req, res) {
//     req.body.done = req.body.done === 'on';
//     Roast.update(req.params.id, req.body);
//     res.redirext('/roasts');
// }




