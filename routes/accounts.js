'use strict';

let express = require('express');
let router  = express.Router();
const DB    = require('../lib/DB');
const data  = new DB();
let fileUp  = require('express-fileupload');
let valid   = require('../lib/Validator');
const account  = require('../lib/AccountModel');
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
router.use(fileUp());

//<editor-fold desc="GET">
/***
 *      GET SECTION.
 ******/
//<editor-fold desc="Full Account Data">
/**
 * GET all User Accounts.
 */
router.get('/data', function(req, res, next) {
    account.getAccountData(res);
});

/**
 * GET Account data by id.
 */
router.get('/data/id/:id', function(req, res, next) {
    account.getAccountById(res, req.params.id);
});

/**
 * GET Account data by email.
 */
router.get('/data/email/:email', function(req, res, next) {
    account.getAccountByEmail(res, req.params.email);
});

/**
 * GET Account data by name.
 */
router.get('/data/name/:name', function(req, res, next) {
    account.getAccountByName(res, req.params.name);
});

/**
 * GET Account data by surname.
 */
router.get('/data/surname/:surname', function(req, res, next) {
    account.getAccountBySurname(res, req.params.surname);
});

/**
 * GET Account data by username.
 */
router.get('/data/username/:username', function(req, res, next) {
    account.getAccountByUsername(res, req.params.username);
});

//</editor-fold>

//<editor-fold desc="Email Data">
/**
 * GET all User Emails.
 */
router.get('/emails', function(req, res, next) {
    account.getEmails(res);
});

/**
 * GET User Emails by id.
 */
router.get('/emails/id/:id', function(req, res, next) {
    account.getEmailById(res, req.params.id);
});

/**
 * GET User Emails by name.
 */
router.get('/emails/name/:name', function(req, res, next) {
    account.getEmailByName(res, req.params.name);
});

/**
 * GET User Emails by surname.
 */
router.get('/emails/surname/:surname', function(req, res, next) {
    account.getEmailBySurname(res, req.params.surname);
});

/**
 * GET User Emails by username.
 */
router.get('/emails/username/:username', function(req, res, next) {
    account.getEmailByUsername(res, req.params.username);
});

//</editor-fold>

//<editor-fold desc="Names Data">
/**
 * GET all User Names.
 */
router.get('/names', function(req, res, next) {
    account.getNames(res);
});

/**
 * GET all User Names by id.
 */
router.get('/names/id/:id', function(req, res, next) {
    account.getNameById(res, req.params.id);
});

/**
 * GET all User Names by surname.
 */
router.get('/names/surname/:surname', function(req, res, next) {
    account.getNameBySurname(res, req.params.surname);
});

/**
 * GET all User Names by username.
 */
router.get('/names/username/:username', function(req, res, next) {
    account.getNameByUsername(res, req.params.username);
});

/**
 * GET all User Names by email.
 */
router.get('/names/email/:email', function(req, res, next) {
    account.getNameByEmail(res, req.params.email);
});

//</editor-fold>

//<editor-fold desc="Surnames Data">
/**
 * GET all User Surnames.
 */
router.get('/surnames', function(req, res, next) {
   account.getSurnames(res);
});

/**
 * GET all User Surnames by id.
 */
router.get('/surnames/id/:id', function(req, res, next) {
    account.getSurnamesById(res, req.params.id);
});

/**
 * GET all User Surnames by name.
 */
router.get('/surnames/name/:name', function(req, res, next) {
    account.getSurnamesByName(res, req.params.name);
});

/**
 * GET all User Surnames by email.
 */
router.get('/surnames/email/:email', function(req, res, next) {
    account.getSurnamesByEmail(res, req.params.email);
});

/**
 * GET all User Surnames by username.
 */
router.get('/surnames/username/:username', function(req, res, next) {
    account.getSurnamesByUsername(res, req.params.username);
});

//</editor-fold>

//<editor-fold desc="Full Names">

/**
 * GET all User Full Names.
 */
router.get('/fullnames', function(req, res, next) {
   account.getFullNames(res);
});

//</editor-fold>

//<editor-fold desc="Usernames Data">

/**
 * GET all UserNames.
 */
router.get('/usernames', function(req, res, next) {
   account.getUserNames(res);
});

/**
 * GET all UserNames by id.
 */
router.get('/usernames/id/:id', function(req, res, next) {
    console.log(req.params);
    account.getUsernameById(res, req.params.id);
});

/**
 * GET all UserNames by name.
 */
router.get('/usernames/name/:name', function(req, res, next) {
    account.getUsernameByName(res, req.params.name);
});

/**
 * GET all UserNames by surname.
 */
router.get('/usernames/surname/:surname', function(req, res, next) {
    account.getUsernameBySurname(res, req.params.surname);
});

/**
 * GET all UserNames by email.
 */
router.get('/usernames/email/:email', function(req, res, next) {
    account.getUsernameByEmail(res, req.params.email);
});

//</editor-fold>

//<editor-fold desc="Data and Ids">

/**
 * GET all Emails and Account id.
 */
router.get('/emailids', function(req, res, next) {
    account.getEmailsIds(res);
});

/**
 * GET all Full Names and Account id.
 */
router.get('/fullnameids', function(req, res, next) {
    account.getFullnamesIds(res);
});

/**
 * GET all User-nams and Account id.
 */
router.get('/usernameids', function(req, res, next) {
    account.getUsernamesIds(res);
});

//</editor-fold>

//</editor-fold>

//<editor-fold desc="POST">
/***
 *          POST SECTION.
 ******/

/**
 *
 */
router.post('/passReset', urlencodedParser, function(req, res, next) {
    account.getPasswordByData(req.body.email, req.body.name, req.body.surname, req.body.username, (data) => {
        if(data[0].shadow) {
            session.email = req.body.email;
            res.redirect('/newPassForm');
        }
    });
});

router.post('/passUpdate', urlencodedParser, function(req, res, next) {
    let password = req.body.current_password;
    let newPass  = req.body.new_password;
    let confPass = req.body.confirm_new_password;
    let email    = session.email;
    account.getPasswordByEmail(email, (shadows) => {
        if(valid.validatePassword(newPass, confPass)) {
            let newSalt     = data.generateSalt();
            let oldSalt     = shadows[0].salt;
            let newPassword = data.sha256(password + oldSalt);
            let oldPassword = shadows[0].shadow;
            if(valid.isSamePassword(password, oldPassword, oldSalt)) {
                let new_pass = data.sha256(newPassword + newSalt);
                account.updatePassword(new_pass, oldPassword, newSalt, oldSalt, () => {
                    res.redirect('/success');
                });
            } else {
                res.send('Wrong user password.');
            }
        } else {
            res.send('New Passwords don\'t match.');
        }
    });
});

//</editor-fold>

module.exports = router;
