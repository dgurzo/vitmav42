/**
 * Eltávolít egy dalt, használt entitás: res.locals.dal
 * Redirect to: '/dal/:eloadoid'
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof res.locals.dal === 'undefined') {
            return next();
        }
        res.locals.dal.remove((err) => {
            if(err) {
                return next(err);
            }
            return res.redirect('/dal/' + res.locals.eloado._id);
        })
    };
};