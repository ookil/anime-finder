import React, { Fragment, useEffect, useContext, useState } from 'react';
import Characters from '../characters/Characters';
import Spinner from '../utilities/spinner/Spinner';
import AnimeContext from '../../context/animes/animeContext';
import { getMangaAndCharacters } from '../../context/animes/actions';
import { GET_MANGA_AND_CHARACTERS, SET_LOADING } from '../../context/types';

const Manga = ({ match: { params } }) => {
  const {
    manga: {
      title,
      title_english,
      image_url,
      score,
      status,
      synopsis,
      type,
      background,
      published,
      volumes,
      chapters,
    },
    dispatch,
    characters,
    loading,
  } = useContext(AnimeContext);

  useEffect(() => {
    dispatch({ type: SET_LOADING });
    getMangaAndCharacters(params.mal_id).then((res) => {
      dispatch({ type: GET_MANGA_AND_CHARACTERS, payload: res });
    });
  }, [dispatch, params.mal_id]);

  if (loading)
    return (
      <Fragment>
        <Spinner />
      </Fragment>
    );

  return (
    <div className='sub-page--box'>
      <Fragment>
        <div className='d-flex flex-wrap ' style={animeInfo}>
          <div className='anime-img'>
            <img
              src={image_url}
              alt='anime cover'
              style={{ maxHeight: '350px' }}
            />
          </div>
          <div className='anime-description'>
            <h2 className='anime-title'>
              {title_english ? title_english : title}
            </h2>
            <p className='anime-subtitle'>{title_english ? title : null}</p>
            <div className='d-flex flex-col ' style={{ height: '100%' }}>
              <p>
                <strong>Type: </strong>
                {type}
              </p>
              <p>
                <strong>Volumes: </strong>
                {volumes}
              </p>

              <p>
                <strong>Chapters: </strong>
                {chapters}
              </p>
              <p>
                <strong>Status: </strong>
                {status}
              </p>
              <p>
                <strong>Published: </strong>
                {published && published.string}
              </p>
            </div>
          </div>
          <div className='score--video '>
            {score !== null && (
              <div className='score--wrapper'>
                <div className='score bg-success'>
                  <div className='score-text'>SCORE</div>
                  <h3 className='score-number'>{score}</h3>
                </div>
              </div>
            )}
          </div>
        </div>
        {synopsis && (
          <div style={animeInfo}>
            <h3 style={{ margin: '10px 0' }}>Synopsis</h3>
            <div>{synopsis}</div>
          </div>
        )}
        {background && (
          <div style={animeInfo}>
            <h3 style={{ margin: '10px 0' }}>Background</h3>
            <div>{background}</div>
          </div>
        )}
        {characters && <Characters characters={characters} />}
      </Fragment>
    </div>
  );
};

const animeInfo = {
  paddingBottom: '20px',
  borderBottom: '1px dashed #B8B8B8',
};

export default Manga;
