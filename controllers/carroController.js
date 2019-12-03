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
            console.log(car.placa);
            console.log(car.modelo);
            console.log(car.cor);
            console.log(car.combus);
            res.render('pages/insertCar')
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
    console.log(placa);

    let query = `DELETE FROM carros WHERE placa = '${placa}'`;
       
    pool.query(query, (err) => {
        if(err) console.log(err);

        console.log(`Success -> Delete OK`);
    });      
    
    res.render('pages/deleteCars');
}

exports.renderDelete = (req, res) => res.render('pages/deleteCars');