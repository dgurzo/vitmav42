/**
 * Előadók betöltése DB-ből
 * Eredmény mentve: res.locals.eloadok
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const EloadoModel = requireOption(objectrepository, 'EloadoModel');
    return function (req, res, next) {
        EloadoModel.find({}, (err, eloadok) => {
            if(err) {
                return next(err);
            }
            res.locals.eloadok = eloadok;
            return next();
        });    
    };
};