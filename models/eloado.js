const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Eloado = db.model('Eloado', {
    eloado_nev: String,
    mufaj: String,
    alapitas_ev: Number,
});

module.exports = Eloado;