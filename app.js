const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, './public')))

app.listen(3007, () => console.log('Servidor corriendo en puerto 3007'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

/* Link del error que tengo https://gist.github.com/claraj/e5563befe6c2fb108ad0efb6de47f265 */ 