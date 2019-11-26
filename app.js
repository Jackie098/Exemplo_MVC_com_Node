const express = require('express');
const app = express();
const port = 3000;

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

app.get('/', (req, res) => res.send('Hello World'));

app.get('/carros', (req, res) => {
    // listCar.map( todo => `<h2>${todo}</h2>`);

    //return res.json(listCar);
    res.send(JSON.stringify(listCar));
});

///carro/:cor/:combus
app.post('/carro', (req, res) => {
    let carro = {
        cor: req.body.cor,
        combus: req.body.combus
    };
    
    listCar.push(carro);

    return res.json(listCar);
})


app.listen(port, () => console.log("Server running -> http://localhost:3000"));