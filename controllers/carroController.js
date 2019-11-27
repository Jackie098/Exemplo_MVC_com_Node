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
    let carro = {   
        cor: req.body.cor,
        combus: req.body.combus
    };
    
    listCar.push(carro);

    return res.json(listCar);
};