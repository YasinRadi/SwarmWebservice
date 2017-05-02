/**
 * Created by YasinR on 02/05/2017.
 */
'use strict';
const DB    = require('./DB');
let data    = new DB();

class FullDataModel
{

    //<editor-fold desc="Full Tables Data">

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
            'INNER JOIN version AS v ON v.module_id = m.id' +
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
}

module.exports = FullDataModel;