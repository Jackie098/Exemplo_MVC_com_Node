let Carro = function (cor, combus) {
        this.cor = cor;
        this.combus = combus;
        this.listCar = [];
    } 

Carro.prototype.addListCar = function(cor, combus){
        let carro = new Carro(cor, combus);

        this.listCar.push(carro);
        console.log(this.listCar);
}

module.exports = Carro;