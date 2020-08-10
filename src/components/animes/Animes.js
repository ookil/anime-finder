import React from "react";
import AnimeItem from "./AnimeItem";
import Spinner from "../utilities/spinner/Spinner";

const Animes = ({ animes, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={animeStyle}>
        {animes.map((anime) => (
          <AnimeItem key={anime.mal_id} anime={anime} />
        ))}
      </div>
    );
  }
};

const animeStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
};

export default Animes;
