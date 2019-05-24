const express = require('express');
const router = require('express').Router();
const passport = require('passport');
const usersController = require('../controllers/users');

// get home page
router.get('/', usersController.index);
router.get('/protected', isLoggedIn,
usersController.private);

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Helper function for protecting pages
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirext('/auth/google');
}

module.exports = router;
