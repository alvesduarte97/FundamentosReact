/* eslint-disable import/no-anonymous-default-export */
import "./App.css";

import Mega from "./components/mega/Mega";
import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#13 - Mega" color="#4D6684">
        <Mega qtdNumeros={3} min={1} max={60} />
      </Card>
      <Card titulo="#12 - Contador" color="#78C0A8">
        <Contador numeroInicial={10} />
      </Card>
      <Card titulo="#11 - Componente Controlado (Input)" color="#5E412F">
        <Input />
      </Card>
      <Card titulo="#10 - Comunicacao Indireta" color="#D0C91F">
        <IndiretaPai />
      </Card>
      <Card titulo="#09 - Comunicacao Direta" color="#28ABE3">
        <DiretaPai />
      </Card>
      <Card titulo="#08 - Renderizacao Condicional" color="#1FDA9A">
        <ParOuImpar numero={21} />
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
      </Card>
      <Card titulo="#07 - Tabela Produtos" color="#E8B71A">
        <TabelaProdutos />
      </Card>
      <Card titulo="#06 - Repetição" color="#DB3340">
        <ListaAlunos />
      </Card>
      <Card titulo="#05 - Componente com Filhos" color="#FA6900">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>
      <Card titulo="#04 - Desafio Aleatório" color="#69D2E7">
        <Aleatorio min={5} max={100} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#A7DBDB">
        <Fragmento />
      </Card>
      <Card titulo="#02 - Com Parâmetro" color="#E0E4CC">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#F38630">
        <Primeiro />
      </Card>
    </div>
  </div>
);
