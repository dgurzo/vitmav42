/**
 * Eltávolít egy előadót, használt entitás: res.locals.eloado
 * Redirect to '/'
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};