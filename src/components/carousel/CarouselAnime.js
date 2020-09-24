import React, { useEffect, useContext, useState } from "react";
import AnimeContext from "../../context/animes/animeContext";
import { GET_SEASONAL_ANIME, SET_LOADING } from "../../context/types";
import { getSeasonalAnime } from "../../context/animes/actions";
import Carousel from "react-multi-carousel";
import { responsiveCarousel } from "../utilities/mediaQueries";
import CarouselAnimeItem from "./CarouselAnimeItem";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";
import Spinner from "../utilities/spinner/Spinner";

const CarouselAnime = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();

  const [season, setSeason] = useState("spring");

  const { dispatch, seasonalAnime, loading } = useContext(AnimeContext);

  useEffect(() => {
    if (month < 4) setSeason("winter");
    if (month < 5) setSeason("spring");
    if (month < 8) setSeason("summer");
    if (month < 13) setSeason("fall");
  }, [month]);

  useEffect(() => {
    dispatch({ type: SET_LOADING });
    getSeasonalAnime(year, season).then((res) =>
      dispatch({ type: GET_SEASONAL_ANIME, payload: res })
    );
  }, [dispatch, year, season]);

  if (loading) return <Spinner />;
  return (
    <div
      style={{
        position: "relative",
        marginTop: "2rem",
      }}
    >
      <h2 style={{ borderBottom: "1px solid white" }}>
        Anime - {season[0].toUpperCase() + season.substring(1)} {year}
      </h2>

      <Carousel
        responsive={responsiveCarousel}
        infinite={true}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        containerClass="carousel-container"
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        {seasonalAnime.map((anime) => (
          <CarouselAnimeItem key={anime.mal_id} anime={anime} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselAnime;
