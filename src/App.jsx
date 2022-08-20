/* eslint-disable import/no-anonymous-default-export */
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Card titulo="#04 - Desafio Aleatório">
      <Aleatorio min={5} max={100} />
    </Card>
    <Card titulo="#03 - Fragmento">
      <Fragmento />
    </Card>
    <Card titulo="#02 - Com Parâmetro">
      <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={9.3} />
    </Card>
    <Card titulo="#01 - Primeiro Componente">
      <Primeiro />
    </Card>
  </div>
);
