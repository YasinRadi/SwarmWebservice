/**
 * Created by YasinR on 24/04/2017.
 */
'use strict';

let express = require('express');
let router  = express.Router();
const DB  = require('../lib/DB.js');
let data = new DB();

router.get('/', function(req, res, next) {
    //
    // var name = req.params.name;
    // var id = req.query.id;
    // var pass = req.body.pass;

    data.query('SELECT * FROM account', res);
});

module.exports = router;