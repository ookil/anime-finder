import React from "react";
import AnimeItem from "./AnimeItem";

const Animes = ({ animes }) => {

  return (
    <div style={animeStyle}>
      {animes.map((anime) => (
        <AnimeItem key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

const animeStyle = {
  display: "flex",
  justifyContent: 'center',
  flexWrap: 'wrap'
};

export default Animes;
