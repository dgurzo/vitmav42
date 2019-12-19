/**
 * Módosít vagy létrehoz egy előadót
 * Ha res.locals.eloado létezik, módosít; egyébként létrehoz
 * Redirect to '/'
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
   return function (req, res, next) {
      const EloadoModel = requireOption(objectrepository, 'EloadoModel');
      if(typeof req.body.eloado_nev === 'undefined' ||
         typeof req.body.mufaj === 'undefined' ||
         typeof req.body.alapitas_ev === 'undefined') {
         return next();
      }
      if(typeof res.locals.eloado === 'undefined') {
         res.locals.eloado = new EloadoModel();
      }
      res.locals.eloado.eloado_nev = req.body.eloado_nev;
      res.locals.eloado.mufaj = req.body.mufaj;
      res.locals.eloado.alapitas_ev = req.body.alapitas_ev;
      res.locals.eloado.save((err) => {
         if(err) {
            return next(err);
         }
      })
      return res.redirect('/');
   };
};