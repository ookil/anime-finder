import React, { useState, useContext } from "react";
import AnimeContext from "../../context/animes/animeContext";
import { searchAnimes } from "../../context/animes/actions";
import { SEARCH_ANIMES, SET_LOADING } from "../../context/types";

const Search = () => {
  const { dispatch} = useContext(AnimeContext);

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SET_LOADING });
    searchAnimes(text).then((animes) => {
      dispatch({ type: SEARCH_ANIMES, payload: animes });
      setText("");
    });
  };

  return (
    
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search anime, manga and more..."
          value={text}
          onChange={onChange}
          id="search-bar"
        />
      </form>
    
  );
};

export default Search;
