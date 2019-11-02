const renderMW = require('../middleware/renderMW');

const getEloadokMW = require('../middleware/eloado/getEloadokMW');
const getEloadoMW = require('../middleware/eloado/getEloadoMW');
const saveEloadoMW = require('../middleware/eloado/saveEloadoMW');
const delEloadoMW = require('../middleware/eloado/delEloadoMW');

const getDalokMW = require('../middleware/dal/getDalokMW');
const getDalMW = require('../middleware/dal/getDalMW');
const saveDalMW = require('../middleware/dal/saveDalMW');
const delDalMW = require('../middleware/dal/delDalMW');


module.exports = function (app) {
    const objRepo = {};

    app.get('/',
        getEloadokMW(objRepo),
        renderMW(objRepo, 'index'));
    app.use('/eloado/new',
        saveEloadoMW(objRepo),
        renderMW(objRepo, 'eloado_hozzaad'));
    app.use('/eloado/edit/:eloadoid',
        getEloadoMW(objRepo),
        saveEloadoMW(objRepo),
        renderMW(objRepo, 'eloado_modosit'));
    app.get('/eloado/del/:eloadoid',
        getEloadoMW(objRepo),
        delEloadoMW(objRepo));

    app.get('/dal/:eloadoid',
        getEloadoMW(objRepo),
        getDalokMW(objRepo),
        renderMW(objRepo, 'dalok'));
    app.use('/dal/:eloadoid/new',
        getEloadoMW(objRepo),
        saveDalMW(objRepo),
        renderMW(objRepo, 'dal_hozzaad'));
    app.use('/dal/:eloadoid/edit/:dalid',
        getEloadoMW(objRepo),
        getDalMW(objRepo),
        saveDalMW(objRepo),
        renderMW(objRepo, 'dal_modosit'));
    app.get('/dal/:eloadoid/del/:dalid',
        getEloadoMW(objRepo),
        getDalMW(objRepo),
        delDalMW(objRepo));
};