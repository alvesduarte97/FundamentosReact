

import "./Card.css"
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const { titulo, children } = props;
  return (
    <div className="Card">
      <div className="Title">{ titulo }</div>
      <div className="Content">{ children }</div>
    </div>
  );
};
