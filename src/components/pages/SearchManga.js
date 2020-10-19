import React, { Fragment, useContext } from 'react';
import Search from '../utilities/Search';
import TopGrid from '../topAnimes/TopGrid';
import AnimeContext from '../../context/animes/animeContext';

const SearchManga = () => {
  const { query, mangaResult } = useContext(AnimeContext);

  return (
    <Fragment>
      <div style={{ background: '#1b1b1b', padding: '1rem' }}>
        <Search />
        <h2>
          Search results for '<span style={{ color: '#deac3c' }}>{query}</span>'
        </h2>
      </div>
      {mangaResult.length > 0 && (
        <div
          style={{ background: '#1b1b1b', padding: '1rem', marginTop: '10px' }}
        >
          <div>
            <TopGrid topList={mangaResult} typeLink='manga' />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default SearchManga;
