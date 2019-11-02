/**
 * Egy adott dal betöltése DB-ből, :dalid paraméterrel
 * Eredmény mentve: res.locals.dal
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};