/**
 * Egy adott dal betöltése DB-ből, :dalid paraméterrel
 * Eredmény mentve: res.locals.dal
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const DalModel = requireOption(objectrepository, 'DalModel');
    return function (req, res, next) {
        DalModel.findOne({_id: req.params.dalid}, 
            (err, dal) => {
                if(err || !dal) {
                    return next(err);
                }
                res.locals.dal = dal;
                return next();
        });
    };
};