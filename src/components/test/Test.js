import React, { useContext } from "react";
import Context from "./../../contexts/Context";

const Test = () => {
  const [context, setContext] = useContext(Context);

  return (
    <div className="test">
      <h1>CLICK HERE: </h1>
      <button onClick={() => setContext("LOL")}>change</button>
    </div>
  );
};

export default Test;
