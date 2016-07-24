module.exports.render = function(req, res, next) {
    if (req.session.ultimaVisita) {
        console.log('Variable de session ultimaVisita: ' + req.session.ultimaVisita);
    }

   req.session.ultimaVisita = new Date();

    res.render('index', { title: 'Hello!', content: 'This is my content site!' });
};
