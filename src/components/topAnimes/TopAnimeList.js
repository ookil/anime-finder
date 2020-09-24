import React from "react";
import {Link} from 'react-router-dom'

const TopAnimeList = ({
  top: { mal_id, rank, title, image_url, type, score },
}) => {
  return (
    <div className="list-item">
      <h3>{rank}</h3>
      <div>
        <img src={image_url} alt={title} />
      </div>
      <div>
        <div className="list-item--title">
          <Link to={`anime/${mal_id}`}>
            {title}
          </Link>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <p className="small">
            {type}, scored {score}
          </p>
          <span>
            <i className="fas fa-plus-circle"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopAnimeList;
