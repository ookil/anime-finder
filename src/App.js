import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Anime from "./components/animes/Anime";
import AnimeState from "./context/animes/AnimeState";

function App() {
  return (
    <AnimeState>
      <Router>
        <div className="App">
          <Navbar icon="fab fa-sistrix" title="Anime Finder" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/anime/:mal_id" component={Anime} />
            </Switch>
          </div>
        </div>
      </Router>
    </AnimeState>
  );
}

export default App;
