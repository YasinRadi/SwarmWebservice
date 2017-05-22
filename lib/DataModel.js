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
     * @param res {Object}
     * @returns {*}
     */
    static getAllData(done)
    {
        data.query(`SELECT * FROM account AS a
            INNER JOIN module AS m ON m.account_id = a.id
            INNER JOIN version AS v ON v.module_id = m.id 
            WHERE a.active = 1`, null, done);
    }

    /**
     * Query for all tables data using a given account id.
     * @param id {int}
     * @returns {*}
     */
    static getAllDataByAccountId(id)
    {
        data.query(`SELECT * FROM account AS a
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
        data.query(`SELECT * FROM account WHERE email = '${email}'`, null, (mails) => {
            if(typeof mails[0] === 'undefined') {
                session.email = undefined;
                res.render('no_exist_email');
            }  else {
                data.query(`SELECT salt FROM account WHERE email = '${email}' AND active = 1`, null, (salts) => {
                    if(typeof salts[0] === 'undefined') {
                        session.email = undefined;
                        res.render('account_disabled');
                    } else {
                        let salt = salts[0].salt;
                        data.query(`SELECT * FROM account
                            WHERE email = '${email}'
                            AND shadow = '${data.sha256(password + salt)}'`, null, (acc) => {
                            if(typeof acc[0] !== 'undefined') {
                                res.redirect('/dashboard');
                            } else {
                                res.render('wrong_pass');
                            }
                        });
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
            data.query(`SELECT * FROM account WHERE email = '${email}'`, null, (a) => {
                if(typeof a[0] === 'undefined') {
                    data.query(`INSERT INTO account (name, surname, email, username, salt, shadow, active) VALUES ('${name}', '${surname}', 
                        '${email}', '${username}', '${salt}', '${shadow}', 1)`, null, done);
                } else {
                    res.render('already_exists');
                }
            });
        } else {
            res.render('pass_dont_match');
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
        data.query(`SELECT id FROM account WHERE email = '${email}' AND active = 1`, null, (accounts) => {
            if(typeof accounts[0] !== 'undefined') {
                let account_id = accounts[0].id;
                data.query(`INSERT INTO module (name, account_id) VALUES ('${name}', '${account_id}')`, null, done);
            } else {
                res.render('error');
            }
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
        data.query(`SELECT m.id FROM account AS a INNER JOIN module AS m ON m.account_id = a.id 
        WHERE m.name = '${name}' AND a.email = '${email}' AND a.active = 1`,
        null, (modules) => {
           let module_id = modules[0].id ;
           data.query(`UPDATE version
                        SET
                            active = 0 
                        WHERE module_id = ${module_id}`, null, () => {
               data.query(`INSERT INTO version (version, file, module_id, active) VALUES ('${ver}', '${file}', '${module_id}', 1)`, null,
                   done);
           });
        });
    };

    //</editor-fold>

    //<editor-fold desc="UPDATE">

    /**
     * Updates a user data.
     * @param user {Object}
     * @param done {Function}
     */
    static updateUser(user, done)
    {
        data.query(`UPDATE account
                    SET 
                        name = '${user.first_name}',
                        surname = '${user.last_name}',
                        username = '${user.username}' 
                    WHERE email = '${session.email}'`, null, done);
    };

    /**
     * Deactivates a user account.
     * @param done {Function}
     */
    static deactivateUser(done)
    {
        data.query(`UPDATE account 
                    SET
                        active = 0
                    WHERE email = '${session.email}'`, null, done);
    };

    /**
     * Checks if the given email and password exists and match, after that reactivates a user account.
     * @param user {Object}
     * @param done {Function}
     */
    static activateUser(user, done)
    {
        data.query(`SELECT * FROM account WHERE email = '${user.email}'`, null, (dt) => {
            if(typeof dt[0] === 'undefined') {
                res.redirect('no_exist_email');
            } else {
                data.query(`SELECT salt FROM account WHERE email = '${user.email}'`, null, (salts) => {
                    if(typeof salts[0] === 'undefined') {
                        res.render('wrong_pass');
                    } else {
                        let salt = salts[0].salt;
                        let pass = data.sha256(user.password + salt);
                        data.query(`SELECT * FROM account
                            WHERE email = '${user.email}'
                            AND shadow = '${pass}'`, null, (acc) => {
                            if(typeof acc[0] !== 'undefined') {
                                data.query(`UPDATE account 
                                            SET 
                                                active = 1 
                                             WHERE email = '${user.email}'`, null, done);
                            }
                        });
                    }
                });
            }
        });
    };

    //</editor-fold>
}

module.exports = DataModel;