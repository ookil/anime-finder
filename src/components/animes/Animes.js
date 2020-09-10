import React, { useContext } from "react";
import AnimeItem from "./AnimeItem";
import Spinner from "../utilities/spinner/Spinner";
import AnimeContext from "../../context/animes/animeContext";

const Animes = () => {
  const { animes, loading } = useContext(AnimeContext);

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
