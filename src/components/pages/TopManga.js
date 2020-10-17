import React, { useContext, useEffect } from 'react';
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import TopContext from '../../context/tops/topContext';
import { GET_TOP_MANGA, TOGGLE_TOP_ANIME } from '../../context/types';
import { useMediaQuery } from 'react-responsive';
import { MD, SM } from '../utilities/mediaQueries';
import { getTopManga } from '../../context/tops/actions';
import TopTable from '../topAnimes/TopTable';
import Select from 'react-select';
import TopGrid from '../topAnimes/TopGrid';

const options = [
  { value: '', label: 'All Manga' },
  { value: 'manga', label: 'Top Manga' },
  { value: 'novels', label: 'Top Novels' },
  { value: 'manhwa', label: 'Top Manhwa' },
];

const TopManga = ({ match }) => {
  let history = useHistory();

  const {
    buttonID,
    topMangaAll,
    topManga,
    topNovels,
    topManhwa,
    dispatchTop,
  } = useContext(TopContext);

  useEffect(() => {
    getTopManga().then((res) =>
      dispatchTop({ type: GET_TOP_MANGA, payload: res })
    );
  }, [dispatchTop]);

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
              <Link to={`${match.url}`}>All Manga</Link>
            </h4>
            <h4
              id='manga'
              onClick={toggleType}
              className={buttonID === 'manga' ? 'btn-active' : ''}
            >
              <Link to={`${match.url}/manga`}>Top Manga</Link>
            </h4>
            <h4
              id='novels'
              onClick={toggleType}
              className={buttonID === 'novels' ? 'btn-active' : ''}
            >
              <Link to={`${match.url}/novels`}>Top Novels</Link>
            </h4>
            <h4
              id='manhwa'
              onClick={toggleType}
              className={buttonID === 'manhwa' ? 'btn-active' : ''}
            >
              <Link to={`${match.url}/manhwa`}>Top Manhwa</Link>
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
            {buttonID === 'manga'
              ? 'Top Manga'
              : buttonID === 'novels'
              ? 'Top Novels'
              : buttonID === 'manhwa'
              ? 'Top Manhwa'
              : 'All Manga'}
          </h3>
        </div>
        <div>
          <Switch>
            <Route
              exact
              path={`${match.url}`}
              render={() =>
                isSM ? (
                  <TopGrid topList={topMangaAll} />
                ) : (
                  <TopTable topList={topMangaAll} />
                )
              }
            />
            <Route
              path={`${match.url}/manga`}
              render={() =>
                isSM ? (
                  <TopGrid topList={topManga} />
                ) : (
                  <TopTable topList={topManga} />
                )
              }
            />
            <Route
              path={`${match.url}/novels`}
              render={() =>
                isSM ? (
                  <TopGrid topList={topNovels} />
                ) : (
                  <TopTable topList={topNovels} />
                )
              }
            />
            <Route
              path={`${match.url}/manhwa`}
              render={() =>
                isSM ? (
                  <TopGrid topList={topManhwa} />
                ) : (
                  <TopTable topList={topManhwa} />
                )
              }
            />
          </Switch>
        </div>
      </div>
    </>
  );
};

export default TopManga;
