/**
 * Minden dal betöltése DB-ből
 * Eredmény mentve: res.locals.dalok
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const DalModel = requireOption(objectrepository, 'DalModel');
    return function (req, res, next) {
        if(typeof res.locals.eloado === 'undefined') {
            return next();
        }
        DalModel.find({_eloado: res.locals.eloado._id}, (err, dalok) => {
            if(err) {
                return next(err);
            }
            res.locals.dalok = dalok;
            return next();
        })
    };
};