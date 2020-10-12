import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Results from "./components/pages/Results";
import TopAnime from "./components/pages/TopAnime";

import About from "./components/pages/About";
import Anime from "./components/animes/Anime";
import AnimeState from "./context/animes/AnimeState";
import TopState from "./context/tops/TopState";
import SeasonalState from "./context/seasonal/SeasonalState";

function App() {
  return (
    <AnimeState>
      <SeasonalState>
        <TopState>
          <Router>
            <div className="App">
              <div className="background-wrapper">
                <Navbar title="BLING BLING OTAKU" />
                <div className="container">
                  
                  <Switch>
                    <Route path="/topanime" component={TopAnime} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/results" component={Results} />
                    <Route exact path="/anime/:mal_id" component={Anime} />
                    <Route exact path="/" component={Home} />
                  </Switch>
                </div>
              </div>
            </div>
          </Router>
        </TopState>
      </SeasonalState>
    </AnimeState>
  );
}

export default App;
