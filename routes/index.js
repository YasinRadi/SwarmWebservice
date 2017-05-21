let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

/**
 * GET form page.
 */
router.get('/userForm', function(req, res, next) {
    if(session.email === null) {
        res.render('error');
    } else {
        res.render('user_form');
    }
});

/**
 * GET module form page.
 */
router.get('/moduleForm', function(req, res, next) {
    console.log(session.email);
    if(typeof session.email === 'undefined') {
        res.render('error');
    } else {
        res.render('module_form');
    }
});

/**
 * GET version form page.
 */
router.get('/versionForm', function(req, res, next) {
    if(typeof session.email === 'undefined') {
        res.render('error');
    } else {
        res.render('version_form');
    }
});

/**
 * GET success static page.
 */
router.get('/success', function(req, res, next) {
    res.render('success');
});

/**
 * GET Password reset form page.
 */
router.get('/passResetForm', function(req, res, next) {
    res.render('password_reset');
});


/**
 * GET New Password form page.
 */
router.get('/newPassForm', function(req, res, next) {
    res.render('new_password_form');
});

/**
 * Tries to log in a user.
 */
router.get('/login', function(req, res, next) {
    res.render('login');
});

/**
 * GET Dashboard page.
 */
router.get('/dashboard', function(req, res, next) {
   if(typeof session.email === 'undefined') {
       res.render('error');
   } else {
       res.render('dashboard');
   }
});

/**
 * Destroys the current session email data.
 */
router.get('/logout', function(req, res, next) {
   req.session.email.destroy();
   res.redirect('/');
});

module.exports = router;
