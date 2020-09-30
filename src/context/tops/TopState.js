import React, { useReducer } from "react";
import TopContext from "./topContext";
import topReducer from "./topReducer";

const TopState = (props) => {
  const initialState = {
      topAnimeAll: [],
      topAnimeAiring: [],
      topAnimeUpcoming: [],
      topAnimeMovie: [],
      topManga: [],
      topNovels: [],
      topManhwa: [],
      loading: false,
      day: new Date().getDate()
  };

  const [state, dispatchTop] = useReducer(topReducer, initialState);

  return (
    <TopContext.Provider value={{ ...state, dispatchTop }}>
      {props.children}
    </TopContext.Provider>
  );
};

export default TopState;
