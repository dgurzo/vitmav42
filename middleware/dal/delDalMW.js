/**
 * Eltávolít egy dalt, használt entitás: res.locals.dal
 * Redirect to: '/dal/:eloadoid'
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};