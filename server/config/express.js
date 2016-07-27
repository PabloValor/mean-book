var express = require('express');
var session = require('express-session');
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
    app.use(morgan('combined'));
    if(process.env.NODE_ENV === 'development') {

    }

    app.listen(3000);

    console.log('Servidor corriendo en localhost:3000');

    require('../routes/index')(app);
    require('../routes/user')(app);

    return app;
};
