const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mk9fbf', { useNewUrlParser: true });

module.exports = mongoose;