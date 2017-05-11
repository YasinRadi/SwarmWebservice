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
     * @param res
     * @returns {*}
     */
    static getAllData(res)
    {
        return data.query('SELECT * FROM account AS a ' +
            'INNER JOIN module AS m ON m.account_id = a.id ' +
            'INNER JOIN version AS v ON v.module_id = m.id', res);
    };

    /**
     * Query for all tables data using a given account id.
     * @param res
     * @param id {int}
     * @returns {*}
     */
    static getAllDataByAccountId(res, id)
    {
        return data.query('SELECT * FROM account AS a ' +
            'INNER JOIN module AS m ON m.account_id = a.id ' +
            'INNER JOIN version AS v ON v.module_id = m.id ' +
            'WHERE a.id = ' + id, res);
    };

    /**
     * Query for all tables data using a given email.
     * @param res
     * @param email {String}
     * @returns {*}
     */
    static getAllDataByEmail(res, email)
    {
        return data.query('SELECT * FROM account AS a ' +
            'INNER JOIN module AS m ON m.account_id = a.id ' +
            'INNER JOIN version AS v ON v.module_id = m.id ' +
            'WHERE a.email LIKE \'%' + email + '%\'', res);
    };

    /**
     * Query for all tables data using a given name.
     * @param res
     * @param name {String}
     * @returns {*}
     */
    static getAllDataByName(res, name)
    {
        return data.query('SELECT * FROM account AS a ' +
            'INNER JOIN module AS m ON m.account_id = a.id ' +
            'INNER JOIN version AS v ON v.module_id = m.id ' +
            'WHERE a.name LIKE \'%' + name + '%\'', res);
    };

    /**
     * Query for all tables data using a given surname.
     * @param res
     * @param surname {String}
     * @returns {*}
     */
    static getAllDataBySurname(res, surname)
    {
        return data.query('SELECT * FROM account AS a ' +
            'INNER JOIN module AS m ON m.account_id = a.id ' +
            'INNER JOIN version AS v ON v.module_id = m.id ' +
            'WHERE a.surname LIKE \'%' + surname + '%\'', res);
    };

    /**
     * Query for all tables data using a given username.
     * @param res
     * @param username {String}
     * @returns {*}
     */
    static getAllDataByUsername(res, username)
    {
        return data.query('SELECT * FROM account AS a ' +
            'INNER JOIN module AS m ON m.account_id = a.id ' +
            'INNER JOIN version AS v ON v.module_id = m.id ' +
            'WHERE a.username LIKE \'%' + username + '%\'', res);
    };

    //</editor-fold>

    //<editor-fold desc="Full Tables Data INSERT">

    /**
     * Inserts a new user into the db given the name and surname.
     * @param res
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
            data.query('INSERT INTO account (name, surname, email, username, salt, shadow) VALUES (\'' + name + '\', \'' + surname + '\', ' +
                '\'' + email + '\', \'' + username +'\', \'' + salt + '\', \'' + shadow + '\')', null, done);
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
        data.query('SELECT id FROM account WHERE email = \'' + email + '\'', null, (accounts) => {
            let account_id = accounts[0].id;
            data.query('INSERT INTO module (name, account_id) VALUES (\'' + name + '\', ' + account_id + ')', null, done);
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
        data.query('SELECT m.id FROM account AS a INNER JOIN module AS m ON m.account_id = a.id WHERE m.name = \'' + name + '\' AND a.email = \'' + email + '\'',
        null, (modules) => {
           let module_id = modules[0].id ;
           data.query('INSERT INTO version (version, file, module_id) VALUES (\'' + ver +'\', \'' + file + '\', ' + module_id +')', null,
                done);
        });
    };

    //</editor-fold>

    //<editor-fold desc="UPDATE">


    //</editor-fold>
}

module.exports = DataModel;