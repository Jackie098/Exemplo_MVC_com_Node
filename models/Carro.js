let Carro = function (modelo, cor, combus) {
        this.modelo = modelo;
        this.cor = cor;
        this.combus = combus;
    } 

Carro.prototype.addNewCar = function(modelo, cor, combus){
       
        this.modelo = modelo;
        this.cor = cor;
        this.combus = combus;
        // this.listCar.push(carro);
        // console.log(this.listCar);
}

module.exports = Carro;