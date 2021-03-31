
class ContaCorrente{
    agencia;
    _saldo = 0; // convenção atributo privado

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor; // mesma coisa que this.saldo = this.saldo - valor
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
           return;
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Artur";
cliente1.cpf = 11123233309;

const cliente2 = new Cliente();
cliente2.nome = "Raquel";
cliente2.cpf = 88823233309;

const contaCorrenteArtur = new ContaCorrente();

contaCorrenteArtur.agencia = 1001;

contaCorrenteArtur.depositar(100);
contaCorrenteArtur.depositar(200);
contaCorrenteArtur.depositar(-1);


let valorSacado = contaCorrenteArtur.sacar(150);


console.log(cliente1);
console.log(cliente2);
console.log(contaCorrenteArtur);
console.log(valorSacado);

