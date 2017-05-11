/**
 * Created by YasinR on 24/04/2017.
 */
'use strict';

const pg = require('pg');
let crypto  = require('crypto');

class DB
{
    constructor()
    {
        /**
         * Connection configuration.
         */
        this.config = {
            /**
             * DB Connection user.
             */
            user: 'postgres',

            /**
             * DB name.
             */
            database: 'SwarmModules',

            /**
             * Connection password.
             */
            password: 'root',

            /**
             * Server host.
             */
            host: 'localhost',

            /**
             * Server port.
             */
            port: 5432,

            /**
             * Pool max client num.
             */
            max: 10,

            /**
             * Client max IDLE time.
             */
            idvarimeoutMillis: 30000
        };

        /**
         * Pool Connection.
         */
        this.pool = new pg.Pool(this.config);

        /**
         * If client gets error while in IDLE.
         */
        this.pool.on('error', function (err, client) {
            console.error('IDLE Client Error.', err.message, err.stack);
        });
    };

    /**
     * Realize a connection to DB and execute a query.
     * @param queryString {String}
     * @param res
     */
    query(queryString, res, onDone)
    {
        return this.pool.connect((err, client, done) => {

            /**
             * Result array.
             */
            let results = [];

            /**
             * Handle connection errors.
             */
            if(err) {
                done();
                console.log(err);
                return res.status(500).json({success: false, data: err});
            }

            const query = client.query(queryString);

            /**
             * Stream results back one row at a time.
             */
            query.on('row', (row) => {
                results.push(row);
            });

            /**
             * After all data is returned, close connection and return results.
             */
            query.on('end', () => {
                done();
                if (!!res) res.send(results);
                onDone(results);
            });
        });
    }

    /**
     * Hashes a given string using sha-256 algorithm and hex base.
     * @param string {String}
     * @returns {*}
     */
    sha256(string)
    {
        return crypto.createHash('sha256').update(string).digest('hex');
    };

    /**
     * Generates a salt using the current DateTime and hashing it using a sha-256 algorithm.
     * @returns {*}
     */
    generateSalt()
    {
        return this.sha256(new Date().toString());
    };
}

module.exports = DB;