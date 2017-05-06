/**
 * Created by YasinR on 02/05/2017.
 */
'use strict';

let express = require('express');
let router  = express.Router();
let bodyParser = require('body-parser');
const data = require('../lib/DataModel');
let urlencodedParser = bodyParser.urlencoded({ extended: false });

//<editor-fold desc="Full Tables Data GET">

/**
 * GET All tables data.
 */
router.get('/', function(req, res, next) {
    data.getAllData(res);
});

/**
 * GET All tables data using a given id.
 */
router.get('/id/:id', function(req, res, next) {
    data.getAllDataByAccountId(res, req.params.id);
});

/**
 * GET All tables data using a given email.
 */
router.get('/email/:email', function(req, res, next) {
    data.getAllDataByEmail(res, req.params.email);
});

/**
 * GET All tables data using a given name.
 */
router.get('/name/:name', function(req, res, next) {
    data.getAllDataByName(res, req.params.name);
});

/**
 * GET All tables data using a given surname.
 */
router.get('/surname/:surname', function(req, res, next) {
    data.getAllDataBySurname(res, req.params.surname);
});

/**
 * GET All tables data using a given username.
 */
router.get('/username/:username', function(req, res, next) {
    data.getAllDataByUsername(res, req.params.username);
});

//</editor-fold>

//<editor-fold desc="Full Tables Data POST">

router.post('/newUser', urlencodedParser, function (req, res, next) {
    let response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        confirm: req.body.confirm,
        email: req.body.email,
        username: req.body.username
    };
    data.insertUser(res, response.first_name, response.last_name, response.password,
        response.confirm, response.email, response.username);
});

router.get('/example', function(req, res, next) {
    data.insertModule(res, '', 'yasin.ben.hamman@gmail.com');
});

//</editor-fold>

module.exports = router;