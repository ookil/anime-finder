import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AnimeItem = ({ anime: { mal_id, image_url, title } }) => {
  
  return (
    <Link to={`/anime/${mal_id}`}>
      <div className="card text-center">
        <div className="card--img">
          <img src={image_url} alt="" style={{ height: '100%', width: '100%' }} />
        </div>
        <div className="card--title text-overflow">
          <h5>{title}</h5>
        </div>
      </div>
    </Link>
  );
};

AnimeItem.propTypes = {
  anime: PropTypes.object.isRequired,
};

export default AnimeItem;
