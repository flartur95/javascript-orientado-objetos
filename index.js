class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Artur";
cliente1.cpf = 11123233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Raquel";
cliente2.cpf = 88823233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1);
console.log(cliente2);

