const express = require('express')
const app = express()

const pedidoController = require('./controllers/pedidoController');

app.use('/pedido', pedidoController)

app.listen(3000);