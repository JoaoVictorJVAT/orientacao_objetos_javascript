// Classe base (abstração)
class Veiculo {
    constructor(nome, capacidade) {
        this.nome = nome;
        this.capacidade = capacidade; // capacidade de passageiros
    }

    detalhes() {
        return `${this.nome} transporta até ${this.capacidade} pessoas.`;
    }
}

// Classe herdeira 1
class Carro extends Veiculo {
    constructor(nome, capacidade, tipo) {
        super(nome, capacidade);
        this.tipo = tipo; // ex: esportivo, SUV
    }

    detalhes() {
        return `${super.detalhes()} É um carro do tipo ${this.tipo}.`;
    }
}

// Classe herdeira 2
class Barco extends Veiculo {
    constructor(nome, capacidade, comprimento) {
        super(nome, capacidade);
        this.comprimento = comprimento; // comprimento do barco em metros
    }

    detalhes() {
        return `${super.detalhes()} Tem um comprimento de ${this.comprimento} metros.`;
    }
}

// Criando instâncias
const carroEsportivo = new Carro("Uno com escada", 5, "esportivo");
const carroFamiliar = new Carro("Corolla", 5, "sedan");
const barcoPesca = new Barco("Barco de Pesca", 6, 15);
const lancha = new Barco("Lancha", 4, 8);

// Exibindo detalhes
console.log(carroEsportivo.detalhes());
console.log(carroFamiliar.detalhes());
console.log(barcoPesca.detalhes());
console.log(lancha.detalhes());