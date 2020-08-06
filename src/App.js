import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Search from "./components/animes/Search";
import Animes from "./components/animes/Animes";
import Anime from "./components/animes/Anime";
import axios from "axios";

function App() {
  const [animes, setAnimes] = useState([]);
  const [anime, setAnime] = useState({});

  const searchAnimes = async (text) => {
    const res = await axios.get(
      `http://api.jikan.moe/v3/search/anime?q=${text}`
    );

    setAnimes(res.data.results);
  };

  const getAnime = async (mal_id) => {
    const res = await axios.get(`http://api.jikan.moe/v3/anime/${mal_id}`);

    setAnime(res.data);
  };

  return (
    <Router>
      <div className="App">
        <Navbar icon="fab fa-sistrix" title="Anime Finder" />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Fragment>
                  <Search searchAnimes={searchAnimes} />
                  <Animes animes={animes} />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/anime/:mal_id"
              render={(props) => (
                <Anime {...props} getAnime={getAnime} anime={anime} />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
