const Roast = require('../models/roast');

module.exports = {
    index,
    show,
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

function show(req, res) {
    Roast.findById(req.params.id)
    console.log(Roast);
        res.render('roasts/show', {
            title: 'All Roast Log', roast
    });
};
      
function newRoast(req, res) {
    res.render('roasts/new', { title: 'Add Roast Log'});
}

function create(req, res) {
    req.body.nowSharing = !!req.body.nowSharing;
    
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    

    // Roast.create(req.body, function(err, createdRoast) {
    //     if (err) {
    //         console.log(err)
    //         return res.redirect('/roasts/new');
    //     }
    //     res.redirect(`/roasts`);
    // });

    var roast = new Roast(req.body);
    console.log('///////////////////////////////')
    console.log(roast);
    console.log('///////////////////////////////')
    roast.save(function(err) {
        console.log(roast.save);
        if (err) return res.redirect('/roasts/new');
        res.redirect(`/roasts`);
    });
}