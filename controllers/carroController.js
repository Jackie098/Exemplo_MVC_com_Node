const Carro = require('../models/Carro');
const car = new Carro('', '');

exports.home = (req, res) => {
    res.render('./pages/home');
}

exports.exibirCarros = (req, res) => {
    res.send(JSON.stringify(car.listCar));
}

///carro/:cor/:combus
exports.inserirCarro = (req, res) => {

    let modelo = req.body.txt_modelo;
    let cor =  req.body.txt_cor;
    let combus = req.body.txt_comb;
    
    car.addListCar(modelo, cor, combus);
    
    res.render('./pages/insertCar');
};

exports.renderInsert = (req, res) => {
    res.render('./pages/insertCar');
}