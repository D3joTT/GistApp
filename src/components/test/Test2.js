import React, { useContext } from "react";
import Context from "./../../contexts/Context";

const Test2 = () => {
  const [context, setContext] = useContext(Context);
  return (
    <div className="test2">
      <h1>Context: </h1> <p>{context}</p>
    </div>
  );
};

export default Test2;
