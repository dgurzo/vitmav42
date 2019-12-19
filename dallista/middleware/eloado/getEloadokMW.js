/**
 * Előadók betöltése DB-ből
 * Eredmény mentve: res.locals.eloadok
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        setTimeout(function() {
            res.locals.eloadok = [
                {
                    _id: '01',
                    eloado_nev: 'Skillet',
                    mufaj: 'Rock',
                    alapitas_ev: 1996
                }, 
                {
                    _id: '02',
                    eloado_nev: 'asdasd',
                    mufaj: 'Ro',
                    alapitas_ev: 1222
                }
            ];
            return next();
        }, 30);
        

        
    };
};