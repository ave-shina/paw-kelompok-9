// import React, { useEffect } from "react";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import "./App.css";

// import { useDispatch } from "react-redux";
// import { getAgendas } from "./actions/agendas";

export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAgendas());
  // }, [dispatch]);

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/edit" exact component={Edit} />
      </Routes>
    </BrowserRouter>
  );
}
