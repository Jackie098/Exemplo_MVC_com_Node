let Carro = function () {} 

Carro.prototype.addNewCar = function(placa, modelo, cor, combus){
        this.placa = placa;
        this.modelo = modelo;
        this.cor = cor;
        this.combus = combus;
}

module.exports = Carro;