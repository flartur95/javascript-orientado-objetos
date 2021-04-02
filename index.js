import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";


const cliente1 = new Cliente("Artur", 11123233309);

const contaCorrenteArtur = new ContaCorrente(cliente1, 1001);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

const contaSalario =  new ContaSalario(cliente1);
contaSalario.depositar(110.00);
contaSalario.sacar(100.00);

console.log(contaSalario);

// contaCorrenteArtur.depositar(500);
// contaCorrenteArtur.sacar(100);

// contaPoupanca.depositar(500);
// contaPoupanca.sacar(100);

// console.log(contaCorrenteArtur);
// console.log(contaPoupanca);




