let Carro = function (modelo, cor, combus) {
        this.modelo = modelo;
        this.cor = cor;
        this.combus = combus;
        this.listCar = [];
    } 

Carro.prototype.addListCar = function(modelo, cor, combus){
        let carro = new Carro(modelo, cor, combus);

        this.listCar.push(carro);
        console.log(this.listCar);
}

module.exports = Carro;