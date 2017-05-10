/**
 * Created by YasinR on 04/05/2017.
 */
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
}

module.exports = Validator;