import React from "react";
import { Router } from "@reach/router";
import OnRouteChange from "reach-router-scroll-top";
import HomePage from "./HomePage";
import SecondPage from "./SecondPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/" />
        <SecondPage path="secondpage" />
      </Router>
      <OnRouteChange />
    </div>
  );
}

export default App;
