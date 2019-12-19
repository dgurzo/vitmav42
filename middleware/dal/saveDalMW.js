/**
 * Módosít vagy létrehoz egy dalt
 * Ha res.locals.dal létezik, módosít; egyébként létrehoz
 * Redirect to '/dal/:eloadoid'
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const DalModel = requireOption(objectrepository, 'DalModel');
    return function (req, res, next) {
        if(typeof req.body.cim === 'undefined' ||
            typeof req.body.album === 'undefined' ||
            typeof req.body.kiadasev === 'undefined') {
                return next();
        }
        if(typeof res.locals.dal === 'undefined') {
            res.locals.dal = new DalModel();
        }
        res.locals.dal.cim = req.body.cim;
        res.locals.dal.album = req.body.album;
        res.locals.dal.kiadasev = req.body.kiadasev;
        res.locals.dal._eloado = res.locals.eloado._id;
        res.locals.dal.save((err) => {
            if(err) {
                return next(err);
            }
            return res.redirect('/dal/' + res.locals.eloado._id);
        })  
    };
};