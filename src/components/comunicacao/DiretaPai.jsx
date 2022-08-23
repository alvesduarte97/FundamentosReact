import DiretaFilho from "./DiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default (prps) => {
  return (
    <div>
      <DiretaFilho nome="Junior" idade={20} nerd={true} />
      <DiretaFilho nome="Gabriel" idade={17} nerd={false} />
    </div>
  );
};
