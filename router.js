const express = require('express');
const router = express.Router();

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

//EXAMPLE
router.get('/', (req, res) => res.render('pages/home'));

router.get('/carros', (req, res) => {
    // listCar.map( todo => `<h2>${todo}</h2>`);

    //return res.json(listCar);
    res.send(JSON.stringify(listCar));
});

///carro/:cor/:combus
router.post('/carro', (req, res) => {
    let carro = {
        cor: req.body.cor,
        combus: req.body.combus
    };
    
    listCar.push(carro);

    return res.json(listCar);
});

module.exports = router;