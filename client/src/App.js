import React, { useEffect } from "react";
// import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

import { useDispatch } from "react-redux";
// import { getAgendas } from "./actions/agendas";

export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAgendas());
  // }, [dispatch]);

  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/edit" exact component={Edit} />
      </Switch>
    </Router>
  );
}
