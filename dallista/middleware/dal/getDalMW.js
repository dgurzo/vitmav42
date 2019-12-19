/**
 * Egy adott dal betöltése DB-ből, :dalid paraméterrel
 * Eredmény mentve: res.locals.dal
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.dal = {
            _id: '01',
            dal_id: '1',
            cim: 'Finish Line',
            album: 'Victorious',
            kiadasev: 2014
        };
        return next();
    };
};