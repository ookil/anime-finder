import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
      e.preventDefault()
      props.searchAnimes(text)
  }

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
    </div>
  );
};

export default Search;
