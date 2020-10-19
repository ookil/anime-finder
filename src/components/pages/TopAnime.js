import React, { useContext } from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import TopContext from '../../context/tops/topContext';
import { TOGGLE_TOP_ANIME } from '../../context/types';
import TopTable from '../topAnimes/TopTable';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import { MD, SM } from '../utilities/mediaQueries';
import TopGrid from '../topAnimes/TopGrid';

const options = [
  { value: '', label: 'All Anime' },
  { value: 'airing', label: 'Top Airing Anime' },
  { value: 'upcoming', label: 'Top Upcoming Anime' },
  { value: 'movies', label: 'Top Movies' },
];

const TopAnime = ({ match }) => {
  let history = useHistory();

  const {
    buttonID,
    topAnimeAll,
    topAnimeAiring,
    topAnimeUpcoming,
    topAnimeMovie,
    dispatchTop,
  } = useContext(TopContext);

  const toggleType = (e) => {
    dispatchTop({ type: TOGGLE_TOP_ANIME, payload: e.currentTarget.id });
  };

  const isTabletOrDesktop = useMediaQuery({
    query: `(min-device-width: ${MD}px)`,
  });

  const isSM = useMediaQuery({
    query: `(max-device-width: ${SM}px)`,
  });

  const handleChange = (e) => {
    if (e.value !== '') {
      history.push(match.url + '/' + e.value);
    } else {
      history.push(match.url);
    }
    dispatchTop({ type: TOGGLE_TOP_ANIME, payload: e.value });
  };

  return (
    <>
      <div className='sub-page--box'>
        {isTabletOrDesktop ? (
          <div className='d-flex justify-content-around my-2'>
            <h4
              id='all'
              onClick={toggleType}
              className={buttonID === 'all' ? 'btn-active' : ''}
            >
              <Link to={`${match.url}`}>All Anime</Link>
            </h4>
            <h4
              id='airing'
              onClick={toggleType}
              className={buttonID === 'airing' ? 'btn-active' : ''}
            >
              <Link to={`${match.url}/airing`}>Top Airing Anime</Link>
            </h4>
            <h4
              id='upcoming'
              onClick={toggleType}
              className={buttonID === 'upcoming' ? 'btn-active' : ''}
            >
              <Link to={`${match.url}/upcoming`}>Top Upcoming Anime</Link>
            </h4>
            <h4
              id='movies'
              onClick={toggleType}
              className={buttonID === 'movies' ? 'btn-active' : ''}
            >
              <Link to={`${match.url}/movies`}>Top Movies</Link>
            </h4>
          </div>
        ) : (
          <Select options={options} onChange={handleChange} />
        )}
        <div
          style={{
            background: '#AFDEFF',
            padding: '20px',
            textAlign: 'center',
            marginTop: '30px',
          }}
        >
          <h3>
            {buttonID === 'airing'
              ? 'Top Airing Anime'
              : buttonID === 'upcoming'
              ? 'Top Upcoming Anime'
              : buttonID === 'movies'
              ? 'Top Movies'
              : 'All Anime'}
          </h3>
        </div>
        <div>
          <Switch>
            <Route
              exact
              path={`${match.url}`}
              render={() =>
                isSM ? (
                  <TopGrid topList={topAnimeAll} typeLink="anime"/>
                ) : (
                  <TopTable topList={topAnimeAll} typeLink="anime"/>
                )
              }
            />
            <Route
              path={`${match.url}/airing`}
              render={() =>
                isSM ? (
                  <TopGrid topList={topAnimeAiring} typeLink="anime"/>
                ) : (
                  <TopTable topList={topAnimeAiring} typeLink="anime"/>
                )
              }
            />
            <Route
              path={`${match.url}/upcoming`}
              render={() =>
                isSM ? (
                  <TopGrid topList={topAnimeUpcoming} typeLink="anime"/>
                ) : (
                  <TopTable topList={topAnimeUpcoming} typeLink="anime"/>
                )
              }
            />
            <Route
              path={`${match.url}/movies`}
              render={() =>
                isSM ? (
                  <TopGrid topList={topAnimeMovie} typeLink="anime"/>
                ) : (
                  <TopTable topList={topAnimeMovie} typeLink="anime"/>
                )
              }
            />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default TopAnime;
