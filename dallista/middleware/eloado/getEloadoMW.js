/**
 * Egy adott előadó betöltése DB-ből, :eloadoid paraméterrel
 * Eredmény mentve: res.locals.eloado
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.eloado = {
            _id: '01',
            eloado_nev: 'Skillet',
            mufaj: 'Rock',
            alapitas_ev: 1996
        };
        return next();
    };
};