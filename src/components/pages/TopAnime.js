import React, { useContext, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import TopContext from "../../context/tops/topContext";
import TopTable from "../topAnimes/TopTable";
import TopTable1 from "../topAnimes/TopTable1";

const TopAnime = ({ match }) => {
  const [button, setButton] = useState()
  const { topAnimeAll, topAnimeAiring } = useContext(TopContext);

  return (
    <>
      <div className="sub-page--box">
        <div className="d-flex justify-content-around my-2">
          <h4 onClick={() => setButton(1)} className={button === 1 ? "btn-active" : ""}>
            <Link to={`${match.url}`}>All Anime</Link>
          </h4>
          <h4 onClick={() => setButton(2)} className={button === 2 ? "btn-active" : ""}>
            <Link to={`${match.url}/airing`}>Top Airing Anime</Link>
          </h4>
          <h4 onClick={() => setButton(3)} className={button === 3 ? "btn-active" : ""}>
            <Link to={`${match.url}/upcoming`}>Top Upcoming Anime</Link>
          </h4>
          <h4 onClick={() => setButton(4)} className={button === 4 ? "btn-active" : ""}>
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
          <h3>All Anime</h3>
        </div>
        <div>
          <Switch>
            <Route
              path={`${match.url}/airing`}
              render={() => <TopTable1 topList={topAnimeAiring} />}
            />
            <Route path={`${match.url}/upcoming`} component={TopTable} />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default TopAnime;
