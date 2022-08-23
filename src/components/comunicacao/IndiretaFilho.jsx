// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const min = 50;
  const max = 80;
  const gerarIdade = () => Math.floor(Math.random() * (max - min)) + min;
  const gerarNerd = () => Math.random() > 0.5;
  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(_) => props.quandoClicar("Junior", gerarIdade(), gerarNerd())}
      >
        Fornecer Informacoes
      </button>
    </div>
  );
};
