'use strict';

let express = require('express');
let router  = express.Router();
const DB    = require('../lib/DB');
let data    = new DB();

/**
 * GET all User Accounts.
 */
router.get('/', function(req, res, next) {
    data.query('SELECT * FROM account', res);
});

module.exports = router;
