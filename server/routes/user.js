module.exports = function(app) {
    var users = require('../controllers/user');
    app.route('/users').post(users.create);
};

