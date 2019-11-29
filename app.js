const express = require('express');
const path = require('path');
const app = express();
const router = require('./router')
const port = 3000;

app.set('views','./view');         //Setando a view
app.set('view engine', 'ejs');      //Definindo a engine

app.use(express.static('public'));      //Mudando a permissão para GLOBAL

app.use(express.json());
app.use(express.urlencoded({extended:false}));     
//Diz ao programa que retornarei JSON como resposta
//Supre a necessidade do BODYPARSER 

app.use('/', router);   //Roteamento


app.listen(port, () => console.log("Server running -> http://localhost:3000"));