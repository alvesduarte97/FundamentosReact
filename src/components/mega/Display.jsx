// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const generateDisplay = (numeros) => {
    return numeros.map((numero, i) => {
      return <h3 key={i + numero}>{numero}</h3>;
    });
  };
  return <div className="Display"> {generateDisplay(props.numeros)} </div>;
};
