let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendfile('./index.html');
});

/**
 * GET form page.
 */
router.get('/form', function(req, res, next) {
    res.sendfile('./public/form.html');
});

/**
 * GET module form page.
 */
router.get('/moduleForm', function(req, res, next) {
    res.sendfile('./public/module_form.html');
});

module.exports = router;
