export class ContaCorrente{
    agencia;
    cliente;

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