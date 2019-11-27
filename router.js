const express = require('express');
const ctrlCar = require('./controllers/carroController');

const router = express.Router();

//HOME
router.get('/', (req, res) => res.render('pages/home'));

router.get('/carros', ctrlCar.exibirCarros);

router.post('/carro', ctrlCar.inserirCarro);

router.get('/carro', (req, res) => res.render('pages/insertCar'));

module.exports = router;