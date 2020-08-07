import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Anime = (props) => {
  const [thumbnail_id, setThumbnail_id] = useState("");

  const {
    getAnime,
    anime,
    match: { params },
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

  useEffect(() => {
    getAnime(params.mal_id);
    console.log("anime-load:");
    console.log(trailer_url)
    console.log(title)
    console.log(aired?.string)

  }, []);

  useEffect(() => {
    console.log('thumbnail')
    getThumbnail(trailer_url);
  }, []);


  const getThumbnail = (url) => {
    if (url !== "") {
      console.log("url-load");
      console.log(url);
      /*       const x = url.split("/")
      const video_id = x[4].split("?")
  
      setThumbnail_id(video_id[0]) */
    }
  };

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
                {}
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
              <a href=""></a>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

const animeStyle = {
  display: "grid",
  gridTemplateColumns: "auto 2fr 1fr",
  gridColumnGap: "1rem",
  fontFamily: "Roboto Mono",
};

export default Anime;
