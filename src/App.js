import React, { useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { GistsContext } from "./contexts/GistsContext";
import CreateRoutes from "./routes/CreateRoutes";

const App = () => {
  const [gists, setGists] = useState([]);

  return (
    <Router>
      <Switch>
        <GistsContext.Provider value={[gists, setGists]}>
          {CreateRoutes}
        </GistsContext.Provider>
      </Switch>
    </Router>
  );
};

export default App;
