import React from 'react';
import { Link } from 'react-router-dom';
import './TopGrid.scss';

const TopGrid = ({ topList, typeLink }) => {
  return (
    <div className='d-flex flex-wrap justify-content-center mt-2'>
      {topList.map((anime) => (
        <Card anime={anime} key={anime.mal_id} typeLink={typeLink} />
      ))}
    </div>
  );
};

const Card = ({
  typeLink,
  anime: { mal_id, title, image_url, type, score },
}) => {
  return (
    <Link to={`/${typeLink}/${mal_id}`}>
      <div
        style={{
          margin: '0 5px',
          position: 'relative',
          minWidth: '100px',
          maxWidth: '130px',
          flex: 1,
        }}
      >
        <img
          src={image_url}
          alt={title}
          style={{ height: '200px', width: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            background: 'rgba(0,0,0,.7)',
            bottom: '7px',
            color: 'white',
            width: '100%',
          }}
        >
          <h5 className='title'>{title}</h5>
          <div className='misc'>
            <span>{type}</span>
            <span>
              <i className='fas fa-star ml-1' />
              {score}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default TopGrid;
