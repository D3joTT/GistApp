import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Login from "../components/login/Login";
import CreateGist from "../components/create-gist/CreateGist";
import EditGist from "../components/edit-gist/EditGist";
import Gists from "../components/gists/Gists";

const CreateRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/create" component={CreateGist} />
      <Route path="/edit" component={EditGist} name="" content="" />
      <Route path="/gists" component={Gists} />
    </Switch>
  </Router>
);

export default CreateRoutes;
