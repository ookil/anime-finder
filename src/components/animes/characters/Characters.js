import React from "react";
import CharacterItem from "./CharacterItem";

const Characters = ({ characters }) => {
  return (
    <div>
      <h3 style={{ margin: "10px 0" }}>Characters</h3>
      {characters.map((character) => (
        <CharacterItem character={character} key={character.mal_id} />
      ))}
    </div>
  );
};

export default Characters;
