const Carro = class{
    constructor(cor, combus){
        this.cor = cor;
        this.combus = combus;
        this.listCar = [];
    } 

    addListCar(cor, combus){
        let carro = new Carro(cor, combus);

        this.listCar.push(carro);
        console.log(this.listCar);
    }
}

module.exports = Carro;