var User = require('mongoose').model('User');
var passport = require('passport');

function create(req, res, next) {
    var user = new User(req.body);

    user.save(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};

function list(req, res, next) {
    User.find(function(err, users) {
        if(err) {
            next(err);
        } else {
            res.json(users);
        }
    });
};

function read(req, res, next) {
    return res.json(req.user);
}

function getUserById(req, res, next, id) {
    User.findOne({
        _id: id,
    }, function(err, user) {
        if(err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
       }
    );
}

module.exports = {
    create: create,
    list: list,
    read: read,
    getUserById: getUserById
};
