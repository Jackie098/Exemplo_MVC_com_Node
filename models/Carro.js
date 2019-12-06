const pool = require('../connection');

let Carro = function () {} 

Carro.prototype.addNewCar = function(placa, modelo, cor, combus){
    this.placa = placa;
    this.modelo = modelo;
    this.cor = cor;
    this.combus = combus;

    let query = `INSERT INTO carros VALUES 
        (default, '${this.placa}', '${this.modelo}', '${this.cor}', '${this.combus}')`;
    
    return new Promise((resolve, reject) => {
        pool.query(query, (err) => {    
            if(err)
               reject(`Erro ao inserir carro: ${err}`);
            else
               resolve(`Inserção OK`);
        });
    });
}

Carro.prototype.removeCar = function(placa){
    let query = `DELETE FROM carros WHERE placa = '${placa}'`;
    
    return new Promise((resolve, reject) => {
        pool.query(query, (err) => {
            if(err) 
                reject(`Erro ao apagar carro ${err}`);
    
            resolve(`Success -> Delete OK`);
        });      
    });
}

Carro.prototype.viewCars = function(){
    let query = 'SELECT * FROM carros';
    
    return new Promise((resolve, reject) => {
        pool.query(query, (err, rows) => {
            if(err) reject(err);      
     
            resolve(rows);  
         });
    });    
}

Carro.prototype.atualizarCarro = function(delPlaca, placa, modelo, cor, combustivel){

    let query = `UPDATE carros SET placa = '${placa}', modelo = '${modelo}', 
                cor = '${cor}', combustivel = '${combustivel}' WHERE placa = '${delPlaca}'`;
    
    return new Promise((resolve, reject) => {
        pool.query(query, (err) => {    
            if(err)
               reject(`Erro ao atualizar carro: ${err}`);
            else
               resolve(`Atualizacao OK`);
        });
    });
}

module.exports = Carro;