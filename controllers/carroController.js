const Carro = require('../models/Carro');

const car = new Carro();

exports.home = (req, res) => {
    res.render('./pages/home');
}

exports.exibirCarros = (req, res) => {
    car.viewCars()
        .then(result => {
            res.render('pages/showCars', {carros : result});
        })
        .catch(err => {
            console.log(err);
        });
}

///carro/:cor/:combus
exports.inserirCarro = (req, res) => {
    let placa = req.body.txt_placa.toUpperCase();
    let modelo = req.body.txt_modelo;
    let cor =  req.body.txt_cor;
    let combus = req.body.txt_comb;
    
    car.addNewCar(placa, modelo, cor, combus)
        .then((result) => {
            console.log(result);
            res.render('pages/insertCar');
           
            })
        .catch(err => {
            console.log(err);
        });
};

exports.renderInsert = (req, res) => {
    res.render('./pages/insertCar');
}

exports.deleteRecord = (req, res) => {
    let placa = req.body.txt_placa.toUpperCase();

    car.removeCar(placa)
        .then((result) => {
            console.log(result);
            res.render('pages/deleteCars');
        })
        .catch(err => console.log(err));    
}

exports.renderDelete = (req, res) => res.render('pages/deleteCars');

exports.atualizarCarro = (req, res)=>{
    let delPlaca = req.body.txt_delPlaca.toUpperCase();
    let placa = req.body.txt_placa.toUpperCase();
    let modelo = req.body.txt_modelo;
    let cor =  req.body.txt_cor;
    let combus = req.body.txt_comb;

    car.atualizarCarro(delPlaca, placa, modelo,cor, combus)
        .then((result) => {
            console.log(result);
            res.render('pages/attCarro');
        }).catch(err => console.log(err));
}

exports.renderUpdate = (req, res) =>{
    res.render('./pages/attCarro');
}

