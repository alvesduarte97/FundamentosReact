// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div>
      <label htmlFor="qtdNumerosInput">Quantidade de Números: </label>
      <input
        id="qtdNumerosInput"
        value={props.numero}
        onChange={(e) => {
          props.setNumero(+e.target.value);
          props.sortear(+e.target.value);
        }}
        min={props.min}
        max={props.max}
        type="number"
      />
    </div>
  );
};
