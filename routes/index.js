let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendfile('./index.html');
});

/**
 * GET form page.
 */
router.get('/userForm', function(req, res, next) {
    res.sendfile('./public/userForm.html');
});

/**
 * GET module form page.
 */
router.get('/moduleForm', function(req, res, next) {
    res.sendfile('./public/module_form.html');
});

/**
 * GET version form page.
 */
router.get('/versionForm', function(req, res, next) {
    res.sendfile('./public/version_form.html');
});

router.get('/success', function(req, res, next) {
    "use strict";
    res.sendfile('./public/success.html');
});

module.exports = router;
