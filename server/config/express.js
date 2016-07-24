var express = require('express');
var session = require('express-session');
var config = require('./env/development');

module.exports = function() {
    var app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.use(express.static('./client'));

    require('../routes/index')(app);
    require('../routes/user')(app);

    return app;
};
