/**
 * Minden dal betöltése DB-ből
 * Eredmény mentve: res.locals.dalok
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};