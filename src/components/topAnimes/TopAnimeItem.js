import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TopAnimeList from "./TopAnimeList";
import TopContext from "../../context/tops/topContext";
import { TOGGLE_TOP_ANIME } from "../../context/types";

const TopAnimeItem = ({ title, top, type }) => {
  const { dispatchTop } = useContext(TopContext);

  const toggleType = (e) => {
    dispatchTop({ type: TOGGLE_TOP_ANIME, payload: e.currentTarget.id });
  };

  return (
    <div className="card-top">
      <Link onClick={toggleType} to={`/topanime${type ? "/" + type : ""}`} id={type ? type : "all"}>
        <div className="card-top--title">
          <h4>{title}</h4>
          <i className="fas fa-arrow-right"></i>
        </div>
      </Link>
      {top.slice(0, 3).map((anime, index) => (
        <TopAnimeList key={index} anime={anime} />
      ))}
    </div>
  );
};

export default TopAnimeItem;
