const express = require('express');
const app = express();
const port = 3000;

let listCar = [
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

    res.send(JSON.stringify(listCar));
});


app.listen(port, () => console.log("Server running -> http://localhost:3000"));