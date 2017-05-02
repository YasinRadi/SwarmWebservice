/**
 * Created by YasinR on 02/05/2017.
 */
'use strict';

let express = require('express');
let router  = express.Router();
const data = require('../lib/DataModel');

//<editor-fold desc="Full Tables Data">

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

module.exports = router;