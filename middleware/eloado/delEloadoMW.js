/**
 * Eltávolít egy előadót, használt entitás: res.locals.eloado
 * Redirect to '/'
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const EloadoModel = requireOption(objectrepository, 'EloadoModel');
    return function (req, res, next) {
        if(typeof res.locals.eloado === 'undefined') {
            return next();
        }
        res.locals.eloado.remove((err) => {
            if(err) {
                return next(err);
            }
            return res.redirect('/');
        })
    };
};