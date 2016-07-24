var express = require('./server/config/express')
    morgan  = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('./server/config/mongoose'),
    methodOverride = require('method-override'),
    db = mongoose(),
    app = express();


app.set('views', './server/views');
app.set('view engine', 'ejs');
app.use(morgan('combined'));
if(process.env.NODE_ENV === 'development') {

}

app.listen(3000);

console.log('La magia pasa por el puerto 3000');
