/**
 * Created by YasinR on 04/05/2017.
 */
const DB   = require('./DB');
const data = new DB();

class Validator
{
    /**
     * Checks if the user password and the confirm password are exactly the same.
     * @param password {String}
     * @param confirm {String}
     * @returns {boolean}
     */
    static validatePassword(password, confirm)
    {
        return password === confirm;
    }

    /**
     * Checks if the input password is the same as the password saved in the db.
     * @param inputPassword {String}
     * @param dbPassword {String}
     * @param salt {String}
     * @returns {boolean}
     */
    static isSamePassword(inputPassword, dbPassword, salt)
    {
        return data.sha256(inputPassword + salt) === dbPassword;
    };

    /**
     * Checks if the user is logged in.
     * @returns {boolean}
     */
    static isUserLogged()
    {
        return session.email !== null;
    };
}

module.exports = Validator;