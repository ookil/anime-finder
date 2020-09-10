import React from "react";

const CharacterItem = ({character}) => {
  const { image_url, name } = character;

  return (
    <div className="wrapper">
      <img className="character--img" src={image_url} alt={name} />
      <div className="overlay">
        <div className="text">{name}</div>
      </div>
    </div>
  );
};

export default CharacterItem;
