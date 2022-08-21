import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <div>
      {props.children.map((child, index) =>
        React.cloneElement(child, {...props, key: index})
      )}
    </div>
  );
};
