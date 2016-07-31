module.exports = function(app) {
    var users = require('../controllers/user');

    app.route('/users')
        .post(users.create)
        .get(users.list);

    app.route('/user/:userId')
        .get(users.read);

    app.param('userId', users.getUserById);
};

