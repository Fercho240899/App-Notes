const express = require ('express');
const exphbs = require('express-handlebars')
const path = require('path');
const morgan = require('morgan');
//initializations
const app = express();
// settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main.hbs',
    LayoutsDir: path.join(app.get('views'), 'layouts'),
    PartialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))

app.set('view engine', '.hbs');
//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//Global Variables
//Routes
// app.get('/', (req, res) => {
//     res.render('index')
// })
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));


//Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;