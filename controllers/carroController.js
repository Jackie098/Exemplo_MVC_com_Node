const Carro = require('../models/Carro');
const car = new Carro('', '');
// var listCar = [
//     carro1 = {
//         cor: "Vermelho",
//         combus: "Gasolina"
//     },
//     carro2 = {
//         cor: "Roxo",
//         combus: "Alcool"
//     }
// ];

exports.exibirCarros = (req, res) => {
    res.send(JSON.stringify(car.listCar));
}

///carro/:cor/:combus
exports.inserirCarro = (req, res) => {
    
    let cor =  req.body.txt_cor;
    let combus = req.body.txt_comb;
    
    car.addListCar(cor, combus);

    res.render('pages/insertCar');
};

exports.renderInsert = (req, res) => {
    res.render('pages/insertCar');
}