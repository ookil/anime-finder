import React, { Fragment, useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Characters from "../characters/Characters";
import Spinner from "../utilities/spinner/Spinner";
import AnimeContext from "../../context/animes/animeContext";
import { getAnimeAndCharacters } from "../../context/animes/actions";
import { GET_ANIME_AND_CHARACTERS, SET_LOADING } from "../../context/types";
import ModalVideo from "react-modal-video";

const Anime = ({ match: { params } }) => {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const {
    anime: {
      title,
      title_english,
      episodes,
      image_url,
      score,
      status,
      trailer_url,
      synopsis,
      type,
      background,
      premiered,
      duration,
      rating,
      aired,
    },
    dispatch,
    characters,
    loading,
  } = useContext(AnimeContext);

  useEffect(() => {
    dispatch({ type: SET_LOADING });
    getAnimeAndCharacters(params.mal_id).then((res) => {
      dispatch({ type: GET_ANIME_AND_CHARACTERS, payload: res });
    });
  }, [dispatch, params.mal_id]);

  const showTrailer = (url) => {
    const video_id = getVideoId(url);
    return `http://i3.ytimg.com/vi/${video_id}/mqdefault.jpg`;
  };

  const getVideoId = (url) => {
    if (url !== undefined) {
      console.log(url);
      const x = url.split("/");
      const video_id = x[4].split("?");
      return video_id[0];
    }
  };

  if (loading)
    return (
      <Fragment>
        <Spinner />
      </Fragment>
    );

  return (
    <div>
      <Fragment>
        <Link to="/" className="btn btn-dark mb-1">
          Back to search
        </Link>
        <div style={animeStyle}>
          <div>
            <img
              src={image_url}
              alt="anime cover"
              style={{ maxHeight: "350px" }}
            />
          </div>
          <div>
            <h2 className="anime-title">{title_english}</h2>
            <p className="anime-subtitle">{title}</p>
            <div className="d-flex flex-col " style={{ height: "100%" }}>
              <p>
                <strong>Type: </strong>
                {type}
              </p>
              <p>
                <strong>Episodes: </strong>
                {episodes}
              </p>
              <p>
                <strong>Status: </strong>
                {status}
              </p>
              <p>
                <strong>Aired: </strong>
                {aired?.string}
              </p>
              <p>
                <strong>Premiered: </strong>
                {premiered}
              </p>
              <p>
                <strong>Duration: </strong>
                {duration}
              </p>
              <p>
                <strong>Rating: </strong>
                {rating}
              </p>
            </div>
          </div>
          <div className="d-flex flex-col align-items-center">
            <div className="score--wrapper">
              <div className="score bg-success">
                <div className="score-text">SCORE</div>
                <h3 className="score-number">{score}</h3>
              </div>
            </div>
            {trailer_url !== null && (
              <div className="thumbnail--wrapper">
                <a onClick={() => setOpen(true)}>
                  <img
                    src={showTrailer(trailer_url)}
                    alt="Trailer Thumbnail"
                    style={{ maxWidth: "250px" }}
                  />
                  <i className="far fa-play-circle fa-2x play"></i>
                </a>
              </div>
            )}
          </div>
        </div>
        {synopsis && (
          <div style={animeInfo}>
            <h3 style={{ margin: "10px 0" }}>Synopsis</h3>
            <div>{synopsis}</div>
          </div>
        )}
        {background && (
          <div style={animeInfo}>
            <h3 style={{ margin: "10px 0" }}>Background</h3>
            <div>{background}</div>
          </div>
        )}
        <Characters characters={characters} />
      </Fragment>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={getVideoId(trailer_url)}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

const animeStyle = {
  display: "grid",
  gridTemplateColumns: "auto 2fr 1fr",
  gridColumnGap: "1rem",
  fontFamily: "Roboto Mono",
  borderBottom: "1px dashed #B8B8B8",
  paddingBottom: "10px",
};

const animeInfo = {
  paddingBottom: "20px",
  borderBottom: "1px dashed #B8B8B8",
};

export default Anime;
