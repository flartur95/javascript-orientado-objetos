class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor; // mesma coisa que this.saldo = this.saldo - valor
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Artur";
cliente1.cpf = 11123233309;

const cliente2 = new Cliente();
cliente2.nome = "Raquel";
cliente2.cpf = 88823233309;

const contaCorrenteArtur = new ContaCorrente();
contaCorrenteArtur.saldo = 100;
contaCorrenteArtur.agencia = 1001;

contaCorrenteArtur.sacar(50);


console.log(cliente1);
console.log(cliente2);
console.log(contaCorrenteArtur);

