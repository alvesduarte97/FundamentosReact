import If, { Else } from "./If";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const { usuario } = props;
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem Vindo <strong> {usuario?.nome} </strong>
        <Else>Seja bem Vindo <strong> Amigao</strong></Else>
      </If>
    </div>
  );
};
