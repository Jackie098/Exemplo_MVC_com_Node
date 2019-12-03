const pool = require('../connection');

let Carro = function () {} 

Carro.prototype.addNewCar = function(placa, modelo, cor, combus){
        this.placa = placa;
        this.modelo = modelo;
        this.cor = cor;
        this.combus = combus;

        let query = `INSERT INTO carros VALUES 
            (default, '${this.placa}', '${this.modelo}', '${this.cor}', '${this.combus}')`;
    
        pool.query(query, (err) => {
            return new Promise((resolve, reject) => {
                if(err)
                   reject(`Erro ao inserir carro: ${err}`);
                else
                   resolve(`Inserção OK`);
            });
        });
}

Carro.prototype.removeCar = function(placa){
        
}

Carro.prototype.viewCars = function(){
        
}

module.exports = Carro;