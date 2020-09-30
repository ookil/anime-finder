import React from "react";
import { Link } from "react-router-dom";
import TopAnimeList from "./TopAnimeList";

const TopAnimeItem = ({ title, top, type }) => {
  return (
    <div className="card-top">
      <Link to={`/topanime/${type ? type : ''}`}>
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
