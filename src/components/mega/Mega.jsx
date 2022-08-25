import { Component } from "react";
import "./Mega.css";
import Display from "./Display";
import QuantidadeNumerosForm from "./QuantidadeNumerosForm";

class Mega extends Component {
  state = {
    numerosSorteados: [1, 2, 3],
    qtdNumeros: this.props.qtdNumeros ?? 3,
    max: this.props.max ?? 100,
    min: this.props.min ?? 1,
  };

  setQtdNumeros = (qtd) => {
    this.setState({
      qtdNumeros: qtd,
    });
  };

  sortear = (listSize) => {
    let { max, min } = this.state;
    let sorteado = Array(listSize)
      .fill(0)
      .reduce((acc) => {
        return [...acc, gerarNumeroNaoContido(min, max, acc)];
      }, [])
      .sort((n1, n2) => n1 - n2);

    this.setState({ numerosSorteados: sorteado });

    function gerarNumeroNaoContido(min, max, array) {
      const aleatorio = Math.floor(Math.random() * (max + 1 - min) + min);
      return array.includes(aleatorio)
        ? gerarNumeroNaoContido(min, max, array)
        : aleatorio;
    }
  };
  render() {
    return (
      <div className="Mega">
        <h2>Sorteio</h2>
        <Display numeros={this.state.numerosSorteados} />
        <QuantidadeNumerosForm
          min={this.state.min + 1}
          max={this.state.max - 1}
          numero={this.state.qtdNumeros}
          setNumero={this.setQtdNumeros}
          sortear={this.sortear}
        />
        <div>
          <button
            onClick={() => {
              this.sortear(this.state.qtdNumeros);
            }}
          >
            {" "}
            Sortear{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Mega;
