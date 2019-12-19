/**
 * Módosít vagy létrehoz egy előadót
 * Ha res.locals.eloado létezik, módosít; egyébként létrehoz
 * Redirect to '/'
 */

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
   return function (req, res, next) {
      if(typeof req.body.eloado_nev === 'undefined' ||
         typeof req.body.mufaj === 'undefined' ||
         typeof req.body.alapitas_ev === 'undefined') {
         return next();
      }
      console.log(req.body);
      return res.redirect('/');
   };
};