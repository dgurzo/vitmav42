/**
 * Minden dal betöltése DB-ből
 * Eredmény mentve: res.locals.dalok
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.dalok = [
            {
            _id: '01',
            dal_id: '1',
            cim: 'Finish Line',
            album: 'Victorious',
            kiadasev: 2014
            }
        ];
        return next();
    };
};