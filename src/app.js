const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, './public')))

app.listen(3007, () => console.log('Servidor corriendo en puerto 3007'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
});