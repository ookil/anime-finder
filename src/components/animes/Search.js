import React, { useState, useContext } from "react";
import AnimeContext from "../../context/animes/animeContext";
import { searchAnimes } from "../../context/animes/actions";
import { SEARCH_ANIMES, SET_LOADING, CLEAR_ANIMES } from "../../context/types";

const Search = () => {
  const { dispatch, animes } = useContext(AnimeContext);

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
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search for anime..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-block btn-dark"
        />
      </form>
      {animes.length > 1 && (
        <button
          className="btn btn-block btn-primary"
          onClick={() => dispatch({ type: CLEAR_ANIMES })}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
