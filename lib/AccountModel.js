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
     * @returns {*}
     */
    static getAccountData()
    {
        return data.query('SELECT * FROM account', null, done);
    };

    /**
     * Query for data of the account where data is like @param id.
     * @param id
     * @returns {*}
     */
    static getAccountById(id)
    {
        return data.query('SELECT * FROM account WHERE id = ' + id, null, done);
    };

    /**
     * Query for data of the account/s where emails is like @param email.
     * @param email {String}
     * @returns {*}
     */
    static getAccountByEmail(email)
    {
        return data.query('SELECT * FROM account WHERE email LIKE \'%' + email + '%\'', null, done);
    };

    /**
     * Query for data of the account/s where name is like @param name.
     * @param name {String}
     * @returns {*}
     */
    static getAccountByName(name)
    {
        return data.query('SELECT * FROM account WHERE name LIKE  \'%' + name + '%\'', null, done)
    };

    /**
     * Query for data of the account/s where surname is like @param surname.
     * @param surname {String}
     * @returns {*}
     */
    static getAccountBySurname(surname)
    {
        return data.query('SELECT * FROM account WHERE surname LIKE  \'%' + surname + '%\'', null, done)
    };

    /**
     * Query for data of the account/s where username is like @param username.
     * @param username {String}
     * @returns {*}
     */
    static getAccountByUsername(username)
    {
        return data.query('SELECT * FROM account WHERE username LIKE \'%' + username + '%\'', null, done)
    };

    // </editor-fold>

    //<editor-fold desc="Email Data">

    /**
     * Query for all account emails.
     * @returns {*}
     */
    static getEmails(done)
    {
        return data.query('SELECT email FROM account', null, done);
    };

    /**
     * Query for an email given an id.
     * @param id {int}
     * @returns {*}
     */
    static getEmailById(id)
    {
        return data.query('SELECT email FROM account WHERE id = ' + id, null, done);
    };

    /**
     * Query for emails where name is like a given name.
     * @param name {String}
     * @returns {*}
     */
    static getEmailByName(name)
    {
        return data.query('SELECT email FROM account WHERE name LIKE \'%' + name + '%\'', null, done);
    };

    /**
     * Query for emails where surname is like a given surname.
     * @param surname {String}
     * @returns {*}
     */
    static getEmailBySurname(surname)
    {
        return data.query('SELECT email FROM account WHERE surname LIKE \'%' + surname + '%\'', null, done);
    };

    /**
     * Query for emails where username is like a given username.
     * @param username {String}
     * @returns {*}
     */
    static getEmailByUsername(username)
    {
        return data.query('SELECT email FROM account WHERE username LIKE \'%' + username + '%\'', null, done);
    };

    // </editor-fold>

    //<editor-fold desc="Username Data">

    /**
     * Query for all account user-names.
     * @returns {*}
     */
    static getUserNames()
    {
        return data.query('SELECT username FROM account', null, done);
    };

    /**
     * Query for all account user-names by id.
     * @param id {int}
     * @returns {*}
     */
    static getUsernameById(id)
    {
        return data.query('SELECT username FROM account WHERE id = ' + id, null, done);
    };

    /**
     * Query for all account user-names where name is like a given name.
     * @param name {String}
     * @returns {*}
     */
    static getUsernameByName(name)
    {
        return data.query('SELECT username FROM account WHERE name LIKE \'%' + name + '%\'', null, done);
    };

    /**
     * Query for all account user-names where email is like a given email.
     * @param email {String}
     * @returns {*}
     */
    static getUsernameByEmail(email)
    {
        return data.query('SELECT username FROM account WHERE email LIKE \'%' + email + '%\'', null, done);
    };

    /**
     * Query for all account user-names where surname is like a given surname.
     * @param surname {String}
     * @returns {*}
     */
    static getUsernameBySurname(surname)
    {
        return data.query('SELECT username FROM account WHERE surname LIKE \'%' + surname + '%\'', null, done);
    };

    // </editor-fold>

    //<editor-fold desc="Names Data">
    /**
     * Query for all account names.
     * @returns {*}
     */
    static getNames()
    {
        return data.query('SELECT name FROM account', null, done);
    };

    /**
     * Query for all account names given an id.
     * @param id {int}
     * @returns {*}
     */
    static getNameById(id)
    {
        return data.query(`SELECT name FROM account WHERE id = ${id}`, null, done);
    };

    /**
     * Query for all account names where surname is like a given surname.
     * @param surname {String}
     * @returns {*}
     */
    static getNameBySurname(surname)
    {
        return data.query(`SELECT name FROM account WHERE surname LIKE '%${surname}%'`, null, done)
    };

    /**
     * Query for all account names where username is like a given surname.
     * @param username {String}
     * @returns {*}
     */
    static getNameByUsername(username)
    {
        return data.query(`SELECT name FROM account WHERE username LIKE '%${username}%'`, null, done)
    };

    /**
     * Query for all account names where email is like a given email.
     * @param email {String}
     * @returns {*}
     */
    static getNameByEmail(email)
    {
        return data.query(`SELECT name FROM account WHERE email LIKE '%${email}%'`, null, done);
    };

    //</editor-fold>

    //<editor-fold desc="Surnames Data">

    /**
     * Query for all account surnames.
     * @returns {*}
     */
    static getSurnames()
    {
        return data.query('SELECT surname FROM account', null, done);
    };

    /**
     * Query for all account surnames given an id.
     * @param id {int}
     * @returns {*}
     */
    static getSurnamesById(id)
    {
        return data.query(`SELECT surname FROM account WHERE id = ${id}`, null, done);
    };

    /**
     * Query for all account surnames where name is like a given name.
     * @param name {String}
     * @returns {*}
     */
    static getSurnamesByName(name)
    {
        return data.query(`SELECT surname FROM account WHERE name LIKE '%${name}%'`, res)
    };

    /**
     * Query for all account surnames where email is like a given email.
     * @param email {String}
     * @returns {*}
     */
    static getSurnamesByEmail(email)
    {
        return data.query(`SELECT surname FROM account WHERE email LIKE '%${email}%'`, null, done);
    };

    /**
     * Query for all account surnames where username is like a given username.
     * @param username {String}
     * @returns {*}
     */
    static getSurnamesByUsername(username)
    {
        return data.query(`SELECT surname FROM account WHERE username LIKE '%${username}%'`, null, done);
    };

    //</editor-fold>

    //<editor-fold desc="Full Names Data">

    /**
     * Query for all account full names.
     * @returns {*}
     */
    static getFullNames()
    {
        return data.query('SELECT name, surname FROM account', done);
    };

    //</editor-fold>

    //<editor-fold desc="Data and Ids">

    /**
     * Query for all account ids and emails.
     * @returns {*}
     */
    static getEmailsIds()
    {
        return data.query('SELECT id, email FROM account', null, done);
    };

    /**
     * Query for all account ids and full names.
     * @returns {*}
     */
    static getFullnamesIds()
    {
        return data.query('SELECT id, name, surname FROM account', null, done);
    };

    /**
     * Query for all account ids and usernames.
     * @returns {*}
     */
    static getUsernamesIds()
    {
        return data.query('SELECT id, username FROM account', null, done);
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

    /**
     * Sets a new password for a identified user.
     * @param email {String}
     * @param pass {String}
     * @param done {Function}
     */
    static resetPassword(email, pass, done)
    {
        let salt = data.generateSalt();
        data.query(`UPDATE account 
                    SET
                        shadow = '${data.sha256(pass + salt)}',
                        salt = '${salt}'
                    WHERE email = '${email}'`, null, done);
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