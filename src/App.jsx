/* eslint-disable import/no-anonymous-default-export */
import "./App.css";

import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
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
