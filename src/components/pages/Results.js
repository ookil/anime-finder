import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import Search from '../utilities/Search';
import TopGrid from '../topAnimes/TopGrid';
import AnimeContext from '../../context/animes/animeContext';

const Results = () => {
  const { query, animeResult, mangaResult } = useContext(AnimeContext);

  return (
    <Fragment>
      <div style={{ background: '#1b1b1b', padding: '1rem' }}>
        <Search />
        <h2>
          Search results for '<span style={{ color: '#deac3c' }}>{query}</span>'
        </h2>
      </div>
      <div
        style={{ background: '#1b1b1b', padding: '1rem', marginTop: '10px' }}
      >
        <div style={{ textAlign: 'center' }}>
          <h4 style={{ borderBottom: '1px solid white' }}>Anime</h4>
          <TopGrid topList={animeResult.slice(0, 32)} typeLink='anime' />

          <Link
            to='/search-anime'
            className='btn btn-white-outline-rounded mt-2'
          >
            Search for '{query}' in Anime
          </Link>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <h4 style={{ borderBottom: '1px solid white' }}>Manga</h4>
          <TopGrid topList={mangaResult.slice(0, 32)} typeLink='manga' />

          <Link
            to='/search-manga'
            className='btn btn-white-outline-rounded mt-2'
          >
            Search for '{query}' in Manga
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Results;
