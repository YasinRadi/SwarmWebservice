/**
 * Created by YasinR on 02/05/2017.
 */
'use strict';
const DB    = require('./DB');
let data    = new DB();
let crypto  = require('crypto');
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
     */
    static insertUser(res, name, surname, password, confirm, email, username)
    {
        if(valid.validatePassword(password, confirm)) {
            let salt = DataModel.generateSalt();
            let shadow = DataModel.sha256(salt + password);
            data.query('INSERT INTO account (name, surname, email, username, salt, shadow) VALUES (\'' + name + '\', \'' + surname + '\', ' +
                '\'' + email + '\', \'' + username +'\', \'' + salt + '\', \'' + shadow + '\')', res);
        } else {
            res.send('Passwords don\' match.');
        }

    };

    //</editor-fold>

    /**
     * Hashes a given string using sha-256 algorithm and hex base.
     * @param string {String}
     * @returns {*}
     */
    static sha256(string)
    {
        return crypto.createHash('sha256').update(string).digest('hex');
    }

    /**
     * Generates a salt using the current DateTime and hashing it using a sha-256 algorithm.
     * @returns {*}
     */
    static generateSalt()
    {
        return DataModel.sha256(new Date().toString());
    }


}

module.exports = DataModel;