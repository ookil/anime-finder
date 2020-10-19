import React, { useReducer } from "react";
import AnimeContext from "./animeContext";
import animeReducer from "./animeReducer";

const AnimeState = (props) => {
  const initialState = {
    animeResult: [],
    mangaResult: [],
    anime: {},
    manga: {},
    characters: null,
    loading: false,
    query: null
  };

  const [state, dispatch] = useReducer(animeReducer, initialState);

  return (
    <AnimeContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </AnimeContext.Provider>
  );
};

export default AnimeState;
