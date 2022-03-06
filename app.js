const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, './public')))
app.set('view engine', 'ejs');

app.listen(3007, () => console.log('Servidor corriendo en puerto 3007'));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/login', (req, res) => {
    res.render('login')
});

app.get('/productCart', (req, res) => {
    res.render('productCart')
});

app.get('/productDetail', (req, res) => {
    res.render('productDetail')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/edit', (req, res) => {
    res.render('edit')
})
