const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('static'));


// Load routing
require('./route/index')(app);

app.use((err, req, res, next) => {
    res.end('Baj van!');
    console.log(err);
})

var server = app.listen(3000, function () {
    console.log("On: 3000");
});