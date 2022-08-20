/* eslint-disable import/no-anonymous-default-export */
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Aleatorio min={5} max={100} />
    <Fragmento />
    <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={9.3} />
    <Primeiro />
  </div>
);
