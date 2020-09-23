import React from "react";
import { Link } from "react-router-dom";

const CarouselAnimeItem = ({ anime: { mal_id, image_url, title, genres } }) => {
  return (
    <Link to={`/anime/${mal_id}`}>
      <div className="card-carousel">
        <img src={image_url} alt="thumbnail" />
        <div className="text-overlay">
          {genres[0] && <p className="small">{genres[0].name}</p>}
          <h4>{title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default CarouselAnimeItem;
