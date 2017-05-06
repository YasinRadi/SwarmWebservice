/**
 * Created by YasinR on 24/04/2017.
 */
'use strict';

const pg = require('pg');

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
    query(queryString, res)
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
                return res.send(results);
            });
        });
    }
}

module.exports = DB;