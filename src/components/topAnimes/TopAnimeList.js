import React from "react";
import {Link} from 'react-router-dom'

const TopAnimeList = ({
  anime: { mal_id, rank, title, image_url, type, score },
}) => {
  return (
    <div className="list-item">
      <h3>{rank}</h3>
      <div className="list-item--img">
        <img src={image_url} alt={title} />
      </div>
      <div style={{width: "100%"}}>
        <div className="list-item--title">
          <Link to={`anime/${mal_id}`}>
            {title}
          </Link>
        </div>
        <div className='d-flex justify-content-between align-items-center'>
          <p className="small">
            {type}, scored {score === 0 ? 'N/A' : score}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopAnimeList;
