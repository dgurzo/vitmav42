/**
 * Módosít vagy létrehoz egy dalt
 * Ha res.locals.dal létezik, módosít; egyébként létrehoz
 * Redirect to '/dal/:eloadoid'
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};