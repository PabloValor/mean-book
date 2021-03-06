var express = require('express');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var config = require('./env/' + (process.env.NODE_ENV || 'development'));

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
    app.set('views', './server/views');
    app.set('view engine', 'ejs');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(morgan('combined'));
    if(process.env.NODE_ENV === 'development') {

    }

    app.listen(3000);

    console.log('Servidor corriendo en localhost:3000');

    // Routes
    require('../routes/index')(app);
    require('../routes/user')(app);

    return app;
};
