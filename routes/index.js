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
    if(session.email !== undefined) {
        res.render('404');
    } else {
        res.render('user_form');
    }
});

/**
 * GET update user form page.
 */
router.get('/updateUserForm', (req, res, next) => {
    if(typeof session.email === 'undefined') {
        res.render('error');
    } else {
        res.render('update_user_form');
    }
});

/**
 * Deactivates the already logged in user account.
 */
router.get('/deactivate', (req, res, next) => {
    if(typeof session.email === 'undefined') {
        res.render('error');
    } else {
        res.redirect('/data/deactivateUser');
    }
});

router.get('/activate', (req, res, next) => {
     if(typeof session.email === 'undefined') {
         res.render('activation_form');
     } else {
         res.render('404');
     }
});

/**
 * GET module form page.
 */
router.get('/moduleForm', function(req, res, next) {
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
 * GET index redirecting success static page.
 */
router.get('/success', function(req, res, next) {
    res.render('success');
});

/**
 * GET dashboard redirecting success static page.
 */
router.get('/success_dash', function(req, res, next) {
    res.render('success_dash');
});

/**
 * GET Password reset form page.
 */
router.get('/passResetForm', function(req, res, next) {
    res.render('password_reset');
});

/**
 * GET Form after Password reset form page.
 */
router.get('/afterPassResetForm', (req, res, next) => {
    res.render('new_pass_nold_form');
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
   session.email = undefined;
   res.render('index');
});

module.exports = router;
