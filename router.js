const express = require('express');
const ctrlCar = require('./controllers/carroController');

const router = express.Router();

router.get('/carros', ctrlCar.exibirCarros);

router.post('/carro', ctrlCar.inserirCarro);

router.get('/carro', ctrlCar.renderInsert);

//HOME
router.get('/', ctrlCar.home);

module.exports = router;