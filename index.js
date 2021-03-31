import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Artur", 11123233309);
const cliente2 = new Cliente("Raquel", 88823233309);

const contaCorrenteArtur = new ContaCorrente();
contaCorrenteArtur.agencia = 1001;
contaCorrenteArtur.cliente = cliente1;
contaCorrenteArtur.depositar(500);

const contaCorrenteRaquel = new ContaCorrente();
contaCorrenteRaquel.agencia = 1002;
contaCorrenteRaquel.cliente = cliente2;

contaCorrenteArtur.transferir(200, contaCorrenteRaquel);


console.log(contaCorrenteArtur);
console.log(contaCorrenteRaquel);

