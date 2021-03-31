import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

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

