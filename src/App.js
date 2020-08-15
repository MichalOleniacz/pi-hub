import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadGeneralInfo } from "./store/slices/generalInfo";
import { loadUsageInfo } from "./store/slices/usageInfo";

import Homepage from "./views/Homepage";
import ProcessMonitor from "./views/ProcessMonitor";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const generalInfo = useSelector((state) => state.entities.generalInfo.list);
  const usageInfo = useSelector((state) => state.entities.usageInfo.list);

  useEffect(() => {
    dispatch(loadGeneralInfo());
    dispatch(loadUsageInfo());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/process" component={ProcessMonitor} />
    </Switch>
  );
};

export default App;
