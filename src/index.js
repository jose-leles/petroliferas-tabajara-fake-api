const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser());

  
const pedidoController = require('./controllers/pedidoController');

app.use('/pedido', pedidoController)

app.listen(80);