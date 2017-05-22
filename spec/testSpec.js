/**
 * Created by YasinR on 22/05/2017.
 */
const express  = require('express');
const router   = express.Router();
const base_url = 'https://localhost:3100';

/**
 * Testing Index page status code.
 */
describe('Server Index', function() {
    describe('GET /', function() {
        it('Returns status code 200', function() {
            router.get(base_url, function(req, res, next) {
                expect(res.statusCode).toBe(200);
            });
        });
    });
});

/**
 * Testing User Form page status code.
 */
describe('Index Page', () => {
    describe('GET User Form', () => {
        it('Returns status code 200', () => {
            router.get(base_url + '/newUser', (req, res, next) => {
                expect(res.statusCode).toBe(200);
            });
        });
    });
});

/**
 * Testing All Account data getting.
 */
describe('All Account Data', () => {
    describe('GET All Account Data', () => {
        it('Is Object', () => {
            router.get(base_url + '/data', (req, res, next) => {
                expect(res.data).toBe(Object);
            });
        });
    });
});

/**
 * Testing Account Emails getting.
 */
describe('All Emails', () => {
    describe('GET All Account Emails', () => {
        it('Is Object', () => {
            router.get(base_url + '/data', (req, res, next) => {
                expect(res.data).toBe(Object);
            });
        });
    });
});
