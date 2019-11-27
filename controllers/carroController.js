var listCar = [
    carro1 = {
        cor: "Vermelho",
        combus: "Gasolina"
    },
    carro2 = {
        cor: "Roxo",
        combus: "Alcool"
    }
];

exports.exibirCarros = (req, res) => {
    res.send(JSON.stringify(listCar));
}

///carro/:cor/:combus
exports.inserirCarro = (req, res) => {

    render('/pages/insertCar');

    let carro = {   
        cor: req.body.txt_cor,
        combus: req.body.txt_comb
    };
    
    listCar.push(carro);
   //console.log(listCar);

    res.send(JSON.stringify(listCar));
};