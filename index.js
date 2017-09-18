const jsonlint = require('jsonlint-lines');
const tilejsonValidateObject = require('./object');

/**
 * Validates a TileJSON
 * @param {(string|object)} TileJSON as string or object
 * @returns {boolean} true if the validation is successful, false otherwise
 */
function validate(str) {
    let tj;

    if (typeof str === 'object') {
        tj = str;
    } else if (typeof str === 'string') {
        try {
            tj = jsonlint.parse(str);
        } catch (err) {
            return false;
        }
    } else {
        return false;
    }

    return true;
}

module.exports.validate = validate;
