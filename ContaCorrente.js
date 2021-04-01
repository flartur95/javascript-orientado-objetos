import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        let taxa = 1.1;
        valor = taxa * valor;
        if(this._saldo >= valor){
            this._saldo -= valor; // mesma coisa que this.saldo = this.saldo - valor
            return valor;
        }
    }

}