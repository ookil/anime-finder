import React, { useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import TopContext from "../../context/tops/topContext";
import { TOGGLE_TOP_ANIME } from "../../context/types";
import TopTable from "../topAnimes/TopTable";

const TopAnime = ({ match }) => {
  const {
    buttonID,
    topAnimeAll,
    topAnimeAiring,
    topAnimeUpcoming,
    topAnimeMovie,
    dispatchTop,
  } = useContext(TopContext);

  const toggleType = (e) => {
    dispatchTop({ type: TOGGLE_TOP_ANIME, payload: e.currentTarget.id });
  };

  return (
    <>
      <div className="sub-page--box">
        <div className="d-flex justify-content-around my-2">
          <h4
            id="all"
            onClick={toggleType}
            className={buttonID === "all" ? "btn-active" : ""}
          >
            <Link to={`${match.url}`}>All Anime</Link>
          </h4>
          <h4
            id="airing"
            onClick={toggleType}
            className={buttonID === "airing" ? "btn-active" : ""}
          >
            <Link to={`${match.url}/airing`}>Top Airing Anime</Link>
          </h4>
          <h4
            id="upcoming"
            onClick={toggleType}
            className={buttonID === "upcoming" ? "btn-active" : ""}
          >
            <Link to={`${match.url}/upcoming`}>Top Upcoming Anime</Link>
          </h4>
          <h4
            id="movie"
            onClick={toggleType}
            className={buttonID === "movie" ? "btn-active" : ""}
          >
            <Link to={`${match.url}/movies`}>Top Movies</Link>
          </h4>
        </div>
        <div
          style={{
            background: "#AFDEFF",
            padding: "20px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <h3>
            {buttonID === "all"
              ? "All Anime"
              : buttonID === "airing"
              ? "Top Airing Anime"
              : buttonID === "upcoming"
              ? "Top Upcoming Anime"
              : "Top Movies"}
          </h3>
        </div>
        <div>
          <Switch>
            <Route
              exact
              path={`${match.url}`}
              render={() => <TopTable topList={topAnimeAll} />}
            />
            <Route
              path={`${match.url}/airing`}
              render={() => <TopTable topList={topAnimeAiring} />}
            />
            <Route
              path={`${match.url}/upcoming`}
              render={() => <TopTable topList={topAnimeUpcoming} />}
            />
            <Route
              path={`${match.url}/movies`}
              render={() => <TopTable topList={topAnimeMovie} />}
            />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default TopAnime;
