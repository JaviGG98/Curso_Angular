const express = require('express');
const bodyParser = require('body-parser');
const libros = require ('./routes/libros.js');

let app = express();
app.use(bodyParser.json());
app.use('/libros', libros);
app.listen(8080);