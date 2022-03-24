//Dependencies
require('dotenv').config();
const express = require('express');
const app = express();

// SETTINGS
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// MIDDLEWARES
app.use('/places', require('./controllers/places'));

//Routes
app.get('/', (req,res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.status(404).render('error404');
})

app.listen(process.env.PORT);