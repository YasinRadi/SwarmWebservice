/**
 * Created by YasinR on 24/04/2017.
 */
'use strict';

let express = require('express');
let router  = express.Router();
const DB    = require('../lib/DB');
let data    = new DB();

router.get('/', function(req, res, next) {
    data.query('SELECT * FROM account', res);
});

module.exports = router;