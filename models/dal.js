const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Dal = db.model('Dal', {
    cim: String,
    album: String,
    kiadasev: Number,
    _eloado: {
        type: Schema.Types.ObjectId,
        ref: 'Eloado'
    }
});

module.exports = Dal;