var express = require('./server/config/express')
    morgan  = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('./server/config/mongoose'),
    methodOverride = require('method-override'),
    db = mongoose(),
    app = express();


