const passport = require('passport');
const GoogleStrategy = require
('passport-google-oauth20').Strategy;
const User = require('../models/user');

passport.use(new GoogleStrategy({
   clientID: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_SECRET,
   callbackURL: process.env.GOOGLE_CALLBACK
},

    function(accessToken, refreshToken, profile, cb) {
        User.findOne({ 'googleId': profile.id }, 
        function(err, user) {
            if (err) return cb(err);
            if (user) {
                return cb(null, user);
            } else {
                var newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                newUser.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, newUser);
                });
            }
        });
    }
));
// method used to give Passport the nugget of data to put into
// the session for this authenticated user
passport.serializeUser((user, cb) => {
    cb(null, user.id);
});
// method used to give Passport with the user from the db
// we want assigned to the req.user object
passport.deserializeUser((id, cb) => {
    User.findById(id, (err, user) => {
        cb(err, user);
    });
});