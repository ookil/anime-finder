import React from 'react';
import { Link } from 'react-router-dom';
import './seasonalStyle.scss';

const SeasonalCard = ({
  anime: {
    mal_id,
    title,
    image_url,
    type,
    airing_start,
    episodes,
    score,
    synopsis,
    genres,
    source,
    producers,
  },
}) => {
  return (
    <div className='card-seasonal'>
      <div className='title-se'>
        <Link to={`/anime/${mal_id}`}>
          <h3>{title}</h3>
        </Link>
      </div>
      <div className='info'>
        <p>{producers[0] && producers[0].name }</p>
        <p>{episodes !== null ? episodes + ' eps.' : ''}</p>
        <p>{source ? score : "N/A"}</p>
      </div>
      <div className='genres'>
        {genres.map((genre, index) => (
          <p key={index}>{genre.name} </p>
        ))}
      </div>
      <div className='main-content'>
        <Link to={`/anime/${mal_id}`}>
          <img src={image_url} alt={title} />
        </Link>
        <p className='synopsis'>{synopsis}</p>
      </div>
      <div className='date'>
        <p>
          {type} - <span>{new Date(airing_start).toDateString()}</span>
        </p>
        <p>
          <i className='fas fa-star' />
          {' ' + score}
        </p>
      </div>
    </div>
  );
};

export default SeasonalCard;
