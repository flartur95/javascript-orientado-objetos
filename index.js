import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Artur", 10000, 12323432432);
const gerente = new Gerente("Legolas", 5000, 201210291029121);

const estaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(estaLogado);




