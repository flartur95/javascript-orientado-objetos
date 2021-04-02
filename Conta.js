//Classe abstrata
export class Conta {
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente.");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor){
        let taxa = 1;
        return this._sacar(valor, taxa);
    }

    _sacar(valor, taxa){

        valor = taxa * valor;
        if(this._saldo >= valor){
            this._saldo -= valor; // mesma coisa que this.saldo = this.saldo - valor
            return valor;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0){
           return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}