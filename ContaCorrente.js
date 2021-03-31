import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    agencia;
    
    _cliente;
    _saldo = 0; // convenção atributo privado

    get saldo(){
        return this._saldo;
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    }

    get cliente(){
        return this._cliente;
    }

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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}