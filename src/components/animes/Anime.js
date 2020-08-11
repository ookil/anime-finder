import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Characters from "./characters/Characters";
import Spinner from "../utilities/spinner/Spinner";

const Anime = (props) => {
  const [data, setData] = useState(false);

  const {
    getAnime,
    anime,
    characters,
    getAnimeCharacters,
    match: { params },
    loading,
  } = props;

  const {
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
  } = anime;

  /* useEffect(() => {
    const fetchData = async () => {
      await getAnime(params.mal_id);
      const thumbnailUrl = getThumbnail(trailer_url);
    };
    fetchData();
  }, []);

  const getThumbnail = (url) => {
    if (url !== "") {
      const x = url.split("/");
      const video_id = x[4].split("?");

      return `http://i3.ytimg.com/vi/${video_id[0]}/mqdefault.jpg`;
    }
  }; */

  useEffect(() => {
    console.log("useEffect");
    getAnime(params.mal_id);
    getAnimeCharacters(params.mal_id);
    // eslint-disable-next-line
  }, []);
  console.log("anime");

  if (loading) {
    return (
      <Fragment>
        <Spinner /> {console.log("spinner")}
      </Fragment>
    );
  } else {
    showTrailer();
  }

  const showTrailer = () => {
    console.log('hey');
  }

  return (
    <div>
      {console.log("return")}
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
          <div style={{ justifySelf: "center" }}>
            <div className="score--wrapper">
              <div className="score bg-success">
                <div className="score-text">SCORE</div>
                <h3 className="score-number">{score}</h3>
              </div>
            </div>
            <div>
              <a href={trailer_url}>
                <img src="" alt="" />
              </a>
            </div>
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
