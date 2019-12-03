let Carro = function (placa, modelo, cor, combus) {
        this.placa = placa;
        this.modelo = modelo;
        this.cor = cor;
        this.combus = combus;
    } 

Carro.prototype.addNewCar = function(placa, modelo, cor, combus){
        this.placa = placa;
        this.modelo = modelo;
        this.cor = cor;
        this.combus = combus;
        // this.listCar.push(carro);
        // console.log(this.listCar);
}

module.exports = Carro;