const pedidos = [
    {
        codigo:1,
        nomeEmpresa:"Posto Shell",
        empresaImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9QDJhzwiQOWmxnU88NomgAKPJ2vF4min-JP0eJhJ1HhRGoUWFi99tJ4yH6ujbAjEMsk&usqp=CAU",
        emailEmpresa:"posto@shell.com",
        cep:"08210791",
        numero: 2134,
        endereco:"Rua Sábado D’Angelo, 2134 - Itaquera, São Paulo - SP",
        dataPrazo: 1630119605,
        observacao: ".",
        status:"pending",
    }
];

module.exports = {
    getAll: () => pedidos,
    addPedido: (pedido) => pedidos.push(pedido),
    editPedido: (pedido) => {
        let index = pedidos.findIndex((p) => p.codigo == pedido.codigo)
        if(index != -1){
            pedidos[index] = pedido;
        }
    },
    removePedido: (codigo) => {
        let index = pedidos.findIndex((p) => p.codigo == codigo)
        if(index != -1){
            pedidos.splice(index, 1);
        }
    } 
};