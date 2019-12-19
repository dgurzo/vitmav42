/**
 * Egy adott előadó betöltése DB-ből, :eloadoid paraméterrel
 * Eredmény mentve: res.locals.eloado
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const EloadoModel = requireOption(objectrepository, 'EloadoModel');
    return function (req, res, next) {
        EloadoModel.findOne({_id: req.params.eloadoid},
            (err, eloado) => {
                if(err || !eloado) {
                    return next(err);
                }
                res.locals.eloado = eloado;
                return next();
        });
    };
};