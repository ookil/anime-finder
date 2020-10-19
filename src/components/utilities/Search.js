import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AnimeContext from "../../context/animes/animeContext";
import { search } from "../../context/animes/actions";
import { SEARCH_ANIME_AND_MANGA, SET_LOADING } from "../../context/types";

const Search = () => {
  const { dispatch } = useContext(AnimeContext);
  let history = useHistory();
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SET_LOADING });
    search(text).then((res) => {
      dispatch({ type: SEARCH_ANIME_AND_MANGA, payload: res });
      setText("");
    });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      history.push("/results");
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} onKeyDown={onKeyDown} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search anime, manga and more..."
          value={text}
          onChange={onChange}
          id="search-bar"
        />
      </form>
    </>
  );
};

export default Search;
