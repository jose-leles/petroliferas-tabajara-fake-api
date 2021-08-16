var express = require('express');
var router = express.Router();

var repo = require("../repo/pedido.js");

// // middleware para verificar caso a controller seja fechada
// router.use(function timeLog(req, res, next) {
//     if(req.headers["Authentication"].includes("1231231231312312312")){
//         res.status(401);
//     }
//     next();
// });

 
router.get('/', function(req, res) {
    res.json(repo.getAll());
    
});

// define the about route
router.post('/', function(req, res) {
    repo.editPedido(req.body);
    res.status(200);
    res.end();

});

router.put('/', function(req, res) {
    let pedidos = repo.getAll();
    repo.addPedido({
        codigo: pedidos[pedidos.length -1].codigo + 1,
        empresaImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9QDJhzwiQOWmxnU88NomgAKPJ2vF4min-JP0eJhJ1HhRGoUWFi99tJ4yH6ujbAjEMsk&usqp=CAU",
        status:"pending",
        ...req.body
    });
    res.status(200);
    res.end();

});

router.delete('/:codigo', function(req, res) {
    repo.removePedido(req.params.codigo);
    res.status(200);
    res.end();

});

module.exports = router;