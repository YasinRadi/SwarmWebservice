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
    res.render('user_form');
});

/**
 * GET module form page.
 */
router.get('/moduleForm', function(req, res, next) {
    res.render('module_form');
});

/**
 * GET version form page.
 */
router.get('/versionForm', function(req, res, next) {
    res.render('version_form');
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

router.get('/newPassForm', function(req, res, next) {
    res.render('new_password_form');
});

module.exports = router;
