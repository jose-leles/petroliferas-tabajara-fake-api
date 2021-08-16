const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

app.use(cors())
app.use(bodyParser());

  
const pedidoController = require('./controllers/pedidoController');

app.use('/pedido', pedidoController)

app.listen(process.env.PORT || 3000);