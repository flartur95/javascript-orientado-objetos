import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Artur", 11123233309);
const cliente2 = new Cliente("Raquel", 88823233309);

const contaCorrenteArtur = new ContaCorrente(cliente1, 1001);
const contaCorrenteRaquel = new ContaCorrente(cliente2, 1002);


