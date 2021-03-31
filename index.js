import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Artur", 11123233309);

const contaCorrenteArtur = new ContaCorrente(cliente1, 1001);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);




