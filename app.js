const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, './public')))

app.listen(3007, () => console.log('Servidor corriendo en puerto 3007'));
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/productCart', (req, res) => {
    res.render('productCart.html')
});