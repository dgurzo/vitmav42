/**
 * Módosít vagy létrehoz egy dalt
 * Ha res.locals.dal létezik, módosít; egyébként létrehoz
 * Redirect to '/dal/:eloadoid'
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.body.cim === 'undefined' ||
            typeof req.body.album === 'undefined' ||
            typeof req.body.kiadasev === 'undefined') {
                return next();
        }
        console.log(req.body);
        return res.redirect('/dal/01');
    };
};