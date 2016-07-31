var mongoose = require('mongoose');
var config = require('./env/development');

module.exports = function() {
    var db = mongoose.connect(config.db);

    mongoose.connection.on('error', function(err){
        console.err('Error DB: ' + err);
    });

    mongoose.connection.on('connected', function(){
        console.log('Connected to database: ' + config.db);
    });

    require('../models/user');

    return db;
};
