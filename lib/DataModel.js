/**
 * Created by YasinR on 02/05/2017.
 */
'use strict';
const DB    = require('./DB');
const data    = new DB();
const valid = require('./Validator');

class DataModel
{

    //<editor-fold desc="Full Tables Data">

    /**
     * Query for all tables data.
     * @returns {*}
     */
    static getAllData()
    {
        return data.query(`SELECT * FROM account AS a
            INNER JOIN module AS m ON m.account_id = a.id
            INNER JOIN version AS v ON v.module_id = m.id 
            WHERE a.active = 1 AND v.active = 1`, null, done);
    };

    /**
     * Query for all tables data using a given account id.
     * @param id {int}
     * @returns {*}
     */
    static getAllDataByAccountId(id)
    {
        return data.query(`SELECT * FROM account AS a
            INNER JOIN module AS m ON m.account_id = a.id
            INNER JOIN version AS v ON v.module_id = m.id
            WHERE a.id = ${id} 
            AND a.active = 1 AND v.active = 1`, null, done);
    };

    /**
     * Query for all tables data using a given email.
     * @param email {String}
     * @returns {*}
     */
    static getAllDataByEmail(email)
    {
        return data.query(`SELECT * FROM account AS a
            INNER JOIN module AS m ON m.account_id = a.id
            INNER JOIN version AS v ON v.module_id = m.id
            WHERE a.email LIKE '%${email}%' 
            AND a.active = 1 AND v.active = 1`, null, done);
    };

    /**
     * Query for all tables data using a given name.
     * @param name {String}
     * @returns {*}
     */
    static getAllDataByName(name)
    {
        return data.query(`SELECT * FROM account AS a ' +
            'INNER JOIN module AS m ON m.account_id = a.id ' +
            'INNER JOIN version AS v ON v.module_id = m.id ' +
            'WHERE a.name LIKE '%${name}%' 
            AND a.active = 1 AND v.active = 1`, null, done);
    };

    /**
     * Query for all tables data using a given surname.
     * @param surname {String}
     * @returns {*}
     */
    static getAllDataBySurname(surname)
    {
        return data.query(`SELECT * FROM account AS a
            INNER JOIN module AS m ON m.account_id = a.id
            INNER JOIN version AS v ON v.module_id = m.id
            WHERE a.surname LIKE '%${surname}%' 
            AND a.active = 1 AND v.active = 1`, null, done);
    };

    /**
     * Query for all tables data using a given username.
     * @param username {String}
     * @returns {*}
     */
    static getAllDataByUsername(username)
    {
        return data.query(`SELECT * FROM account AS a
            INNER JOIN module AS m ON m.account_id = a.id
            INNER JOIN version AS v ON v.module_id = m.id
            WHERE a.username LIKE '%${username}%' 
            AND a.active = 1 AND v.active = 1`, null, done);
    };

    /**
     * Checks if the given user exists, if true checks his password.
     * @param email {String}
     * @param password {String}
     * @param res {Object}
     */
    static getAllDataByPassEmail(email, password, res)
    {
        data.query(`SELECT salt FROM account WHERE email = '${email}' AND active = 1`, null, (salts) => {
            let salt = salts[0].salt;
            if(salt === null) {
                res.redirect('/error');
            } else {
                data.query(`SELECT * FROM account
                            WHERE email = '${email}'
                            AND shadow = '${data.sha256(password + salt)}'`, null, (acc) => {
                    if(acc !== null) {
                        res.redirect('/dashboard');
                    } else {
                        res.redirect('/error');
                    }
                });
            }
        });

    };

    //</editor-fold>

    //<editor-fold desc="Full Tables Data INSERT">

    /**
     * Inserts a new user into the db given the name and surname.
     * @param res {Object}
     * @param name {String}
     * @param password {String}
     * @param confirm {String}
     * @param surname {String}
     * @param email {String}
     * @param username {String}
     * @param done {Function}
     */
    static insertUser(res, name, surname, password, confirm, email, username, done)
    {
        if(valid.validatePassword(password, confirm)) {
            let salt = data.generateSalt();
            let shadow = data.sha256(password + salt);
            data.query(`INSERT INTO account (name, surname, email, username, salt, shadow, active) VALUES ('${name}', '${surname}', 
                '${email}', '${username}', '${salt}', '${shadow}', 1)`, null, done);
        } else {
            res.send('Passwords don\'t match.');
        }
    };

    /**
     * Inserts a new module given its name and the account email that belongs to.
     * @param name {String}
     * @param email {String}
     * @param done {Function}
     */
    static insertModule(name, email, done)
    {
        data.query(`SELECT id FROM account WHERE email = '${email}'`, null, (accounts) => {
            let account_id = accounts[0].id;
            data.query(`INSERT INTO module (name, account_id) VALUES ('${name}', '${account_id}'`, null, done);
        });
    };

    /**
     * Inserts a new version given the module file and the account email it belongs to.
     * @param name {String}
     * @param ver {String}
     * @param file {File}
     * @param email {String}
     * @param done {Function}
     */
    static insertVersion(name, ver, file, email, done)
    {
        data.query(`SELECT m.id FROM account AS a INNER JOIN module AS m ON m.account_id = a.id WHERE m.name = '${name}' AND a.email = '${email}' 
        AND m.active = 1`,
        null, (modules) => {
           let module_id = modules[0].id ;
           data.query(`INSERT INTO version (version, file, module_id, active) VALUES ('${ver}', '${file}', '${module_id}', 1)`, null,
                done);
        });
    };

    //</editor-fold>

}

module.exports = DataModel;