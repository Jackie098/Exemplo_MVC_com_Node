const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view','view');         //Setando a view
app.set('view engine', 'ejs');      //Definindo a engine
app.use(express.static('public'));      //Mudando a permissão para GLOBAL

app.use(express.json());     
//Diz ao programa que retornarei JSON como resposta
//SUpre a necessidade do BODYPARSER 
//Baseado no body-parser

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