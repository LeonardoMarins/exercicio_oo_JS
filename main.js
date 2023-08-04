function Carro(placa) { // funcao construtora
    this.placa = placa;
}

function Gol(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;

    Carro.call(this,"20201");
}
function Fiat(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;

    Carro.call(this,"201293");
}


const golLeo = new Gol("Rallye",2009);
const fiatLeo = new Fiat("Track",2009);
const fiatRodrigo = new Fiat("teste",2019);


console.log(fiatLeo);
console.log(golLeo);
console.log(fiatRodrigo);