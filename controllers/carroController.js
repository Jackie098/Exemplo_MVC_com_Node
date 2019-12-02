const Carro = require('../models/Carro');
const pool = require('../connection');

const car = new Carro('', '');


exports.home = (req, res) => {
    res.render('./pages/home');
}

exports.exibirCarros = (req, res) => {
    let query = 'SELECT * FROM carros';
    // var vetor = [];
    
    pool.query(query, (err, rows) => {
       if(err) console.log(err);

      // vetor.push(JSON.stringify(rows));
       rows.map((todo) => vetor.push(JSON.stringify(todo.cor)));
       console.log(vetor);       
       //return vetor;  
    });
    //console.log(vetor);
    
    res.render('pages/showCars'); 
}

///carro/:cor/:combus
exports.inserirCarro = (req, res) => {

    let modelo = req.body.txt_modelo;
    let cor =  req.body.txt_cor;
    let combus = req.body.txt_comb;
    
    car.addNewCar(modelo, cor, combus);
    console.log(car.modelo)
    console.log(car.cor)
    console.log(car.combus)

    let query = `INSERT INTO carros VALUES 
            (default, '${car.modelo}','${car.cor}', '${car.combus}')`;
    
    pool.query(query, (err) => {
        if(err) console.log(err);

        console.log(`Succes -> Insertion OK`);
    });
    
    res.render('pages/insertCar');
};

exports.renderInsert = (req, res) => {
    res.render('./pages/insertCar');
}

exports.deleteRecord = (req, res) => {
    let modelo = req.body.txt_modelo;
    let cor = req.body.txt_cor;
    let combus = req.body.txt_comb;

    car.addNewCar(modelo, cor, combus);
    console.log(car.modelo)
    console.log(car.cor)
    console.log(car.combus)

    let query = `DELETE FROM carros WHERE modelo = '${car.modelo}' AND 
            cor = '${car.cor}' AND combustivel = '${car.combus}' `;
    
    pool.query(query, (err) => {
        if(err) console.log(err);

        console.log(`Success -> Delete OK`);
    });      
    
    res.render('pages/deleteCars');
}

exports.renderDelete = (req, res) => res.render('pages/deleteCars');