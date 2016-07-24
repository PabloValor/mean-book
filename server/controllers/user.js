var User = require('mongoose').model('User');

module.exports.create = function(req, res, next) {
    var user = new User(req.body);

    debugger;

    user.save(function(err) {
        if(err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};
