const express = require('express');
const ctrlCar = require('./controllers/carroController');

const router = express.Router();

router.get('/carros', ctrlCar.exibirCarros);

router.post('/carro', ctrlCar.inserirCarro);

router.get('/carro', ctrlCar.renderInsert/*res.render('pages/insertCar')*/);

//HOME
router.get('/', ctrlCar.home/*res.render('pages/home')*/);

module.exports = router;