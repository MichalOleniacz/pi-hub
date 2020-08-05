import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import ProcessMonitor from "./views/ProcessMonitor";

import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/process" component={ProcessMonitor} />
    </Switch>
  );
};

export default App;
