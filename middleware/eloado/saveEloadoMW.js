/**
 * Módosít vagy létrehoz egy előadót
 * Ha res.locals.eloado létezik, módosít; egyébként létrehoz
 * Redirect to '/'
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};