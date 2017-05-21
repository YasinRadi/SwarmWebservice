/**
 * Created by YasinR on 26/04/2017.
 */
'use strict';
const DB    = require('./DB');
let data    = new DB();

class AccountModel
{
    constructor(){};

    //<editor-fold desc="GET">

    // <editor-fold desc="Account Data">

    /**
     * Query for all accounts data.
     * @param res
     * @returns {*}
     */
    static getAccountData(res)
    {
        return data.query('SELECT * FROM account', res);
    };

    /**
     * Query for data of the account where data is like @param id.
     * @param res
     * @param id
     * @returns {*}
     */
    static getAccountById(res, id)
    {
        return data.query('SELECT * FROM account WHERE id = ' + id, res);
    };

    /**
     * Query for data of the account/s where emails is like @param email.
     * @param res
     * @param email {String}
     * @returns {*}
     */
    static getAccountByEmail(res, email)
    {
        return data.query('SELECT * FROM account WHERE email LIKE \'%' + email + '%\'', res);
    };

    /**
     * Query for data of the account/s where name is like @param name.
     * @param res
     * @param name {String}
     * @returns {*}
     */
    static getAccountByName(res, name)
    {
        return data.query('SELECT * FROM account WHERE name LIKE  \'%' + name + '%\'', res)
    };

    /**
     * Query for data of the account/s where surname is like @param surname.
     * @param res
     * @param surname {String}
     * @returns {*}
     */
    static getAccountBySurname(res, surname)
    {
        return data.query('SELECT * FROM account WHERE surname LIKE  \'%' + surname + '%\'', res)
    };

    /**
     * Query for data of the account/s where username is like @param username.
     * @param res
     * @param username {String}
     * @returns {*}
     */
    static getAccountByUsername(res, username)
    {
        return data.query('SELECT * FROM account WHERE username LIKE \'%' + username + '%\'', res)
    };

    // </editor-fold>

    //<editor-fold desc="Email Data">

    /**
     * Query for all account emails.
     * @param res
     * @returns {*}
     */
    static getEmails(res)
    {
        return data.query('SELECT email FROM account', res);
    };

    /**
     * Query for an email given an id.
     * @param res
     * @param id {int}
     * @returns {*}
     */
    static getEmailById(res, id)
    {
        return data.query('SELECT email FROM account WHERE id = ' + id, res);
    };

    /**
     * Query for emails where name is like a given name.
     * @param res
     * @param name {String}
     * @returns {*}
     */
    static getEmailByName(res, name)
    {
        return data.query('SELECT email FROM account WHERE name LIKE \'%' + name + '%\'', res);
    };

    /**
     * Query for emails where surname is like a given surname.
     * @param res
     * @param surname {String}
     * @returns {*}
     */
    static getEmailBySurname(res, surname)
    {
        return data.query('SELECT email FROM account WHERE surname LIKE \'%' + surname + '%\'', res);
    };

    /**
     * Query for emails where username is like a given username.
     * @param res
     * @param username {String}
     * @returns {*}
     */
    static getEmailByUsername(res, username)
    {
        return data.query('SELECT email FROM account WHERE username LIKE \'%' + username + '%\'', res);
    };

    // </editor-fold>

    //<editor-fold desc="Username Data">

    /**
     * Query for all account user-names.
     * @param res
     * @returns {*}
     */
    static getUserNames(res)
    {
        return data.query('SELECT username FROM account', res);
    };

    /**
     * Query for all account user-names by id.
     * @param res
     * @param id {int}
     * @returns {*}
     */
    static getUsernameById(res, id)
    {
        return data.query('SELECT username FROM account WHERE id = ' + id, res);
    };

    /**
     * Query for all account user-names where name is like a given name.
     * @param res
     * @param name {String}
     * @returns {*}
     */
    static getUsernameByName(res, name)
    {
        return data.query('SELECT username FROM account WHERE name LIKE \'%' + name + '%\'', res);
    };

    /**
     * Query for all account user-names where email is like a given email.
     * @param res
     * @param email {String}
     * @returns {*}
     */
    static getUsernameByEmail(res, email)
    {
        return data.query('SELECT username FROM account WHERE email LIKE \'%' + email + '%\'', res);
    };

    /**
     * Query for all account user-names where surname is like a given surname.
     * @param res
     * @param surname {String}
     * @returns {*}
     */
    static getUsernameBySurname(res, surname)
    {
        return data.query('SELECT username FROM account WHERE surname LIKE \'%' + surname + '%\'', res);
    };

    // </editor-fold>

    //<editor-fold desc="Names Data">
    /**
     * Query for all account names.
     * @param res
     * @returns {*}
     */
    static getNames(res)
    {
        return data.query('SELECT name FROM account', res);
    };

    /**
     * Query for all account names given an id.
     * @param res
     * @param id {int}
     * @returns {*}
     */
    static getNameById(res, id)
    {
        return data.query('SELECT name FROM account WHERE id = ' + id, res);
    };

    /**
     * Query for all account names where surname is like a given surname.
     * @param res
     * @param surname {String}
     * @returns {*}
     */
    static getNameBySurname(res, surname)
    {
        return data.query('SELECT name FROM account WHERE surname LIKE \'%' + surname + '%\'', res)
    };

    /**
     * Query for all account names where username is like a given surname.
     * @param res
     * @param username {String}
     * @returns {*}
     */
    static getNameByUsername(res, username)
    {
        return data.query('SELECT name FROM account WHERE username LIKE \'%' + username + '%\'', res)
    };

    /**
     * Query for all account names where email is like a given email.
     * @param res
     * @param email {String}
     * @returns {*}
     */
    static getNameByEmail(res, email)
    {
        return data.query('SELECT name FROM account WHERE email LIKE \'%' + email + '%\'', res)
    };

    //</editor-fold>

    //<editor-fold desc="Surnames Data">

    /**
     * Query for all account surnames.
     * @param res
     * @returns {*}
     */
    static getSurnames(res)
    {
        return data.query('SELECT surname FROM account', res);
    };

    /**
     * Query for all account surnames given an id.
     * @param res
     * @param id {int}
     * @returns {*}
     */
    static getSurnamesById(res, id)
    {
        return data.query('SELECT surname FROM account WHERE id = ' + id, res);
    };

    /**
     * Query for all account surnames where name is like a given name.
     * @param res
     * @param name {String}
     * @returns {*}
     */
    static getSurnamesByName(res, name)
    {
        return data.query('SELECT surname FROM account WHERE name LIKE \'%' + name + '%\'', res)
    };

    /**
     * Query for all account surnames where email is like a given email.
     * @param res
     * @param email {String}
     * @returns {*}
     */
    static getSurnamesByEmail(res, email)
    {
        return data.query('SELECT surname FROM account WHERE email LIKE \'%' + email + '%\'', res);
    };

    /**
     * Query for all account surnames where username is like a given username.
     * @param res
     * @param username {String}
     * @returns {*}
     */
    static getSurnamesByUsername(res, username)
    {
        return data.query('SELECT surname FROM account WHERE username LIKE \'%' + username + '%\'', res);
    };

    //</editor-fold>

    //<editor-fold desc="Full Names Data">

    /**
     * Query for all account full names.
     * @param res
     * @returns {*}
     */
    static getFullNames(res)
    {
        return data.query('SELECT name, surname FROM account', res);
    };

    //</editor-fold>

    //<editor-fold desc="Data and Ids">

    /**
     * Query for all account ids and emails.
     * @param res
     * @returns {*}
     */
    static getEmailsIds(res)
    {
        return data.query('SELECT id, email FROM account', res);
    };

    /**
     * Query for all account ids and full names.
     * @param res
     * @returns {*}
     */
    static getFullnamesIds(res)
    {
        return data.query('SELECT id, name, surname FROM account', res);
    };

    /**
     * Query for all account ids and usernames.
     * @param res
     * @returns {*}
     */
    static getUsernamesIds(res)
    {
        return data.query('SELECT id, username FROM account', res);
    };

    static getPasswordByData(email, name, surname, username, done)
    {
        data.query(`SELECT shadow, salt 
                    FROM account 
                    WHERE email  = '${email}' 
                    AND name     = '${name}' 
                    AND surname  = '${surname}' 
                    AND username = '${username}'`, null, done);
    };

    static getPasswordByEmail(email, done)
    {
        data.query(`SELECT shadow, salt
                    FROM account
                    WHERE email = '${email}'`, null, done);
    };

    //</editor-fold>

    //</editor-fold>

    //<editor-fold desc="PUT"

    static resetPassword(email, name, surname, username, done)
    {
        data.query('SELECT shadow FROM account WHERE email = \'' + email + '\', AND name = \'' + name + '\', ' +
            ' AND surname = \'' + surname + '\', AND username = \'' + username + '\',', null, (shadows) => {
            let shadow = shadows[0].shadow;
            console.log(shadow);
            //data.query('INSERT INTO module (name, account_id) VALUES (\'' + name + '\', ' + account_id + ')', null, done);
        });
    }

    /**
     * Updates a user password and salt given the old password and the old salt.
     * @param newPassword {String}
     * @param oldPassword {String}
     * @param newSalt {String}
     * @param oldSalt {String}
     * @param done {Function}
     */
    static updatePassword(newPassword, oldPassword, newSalt, oldSalt, done)
    {
        data.query(`UPDATE account 
            SET 
                shadow = '${newPassword}', 
                salt = '${newSalt}'
            WHERE shadow = '${oldPassword}'
            AND salt = '${oldSalt}'`, null, done);
    };

    //</editor-fold>
}

module.exports = AccountModel;