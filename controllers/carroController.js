const Carro = require('../models/Carro');
const pool = require('../connection');

const car = new Carro();

exports.home = (req, res) => {
    res.render('./pages/home');
}

exports.exibirCarros = (req, res) => {
    let query = 'SELECT * FROM carros';
    
    pool.query(query, (err, rows) => {
       if(err) console.log(err);      

       res.render('pages/showCars', {carros : rows});  
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