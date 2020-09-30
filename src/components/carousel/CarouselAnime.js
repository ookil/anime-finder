import React, { useContext } from "react";
import SeasonalContext from "../../context/seasonal/seasonalContext";
import Carousel from "react-multi-carousel";
import { responsiveCarousel } from "../utilities/mediaQueries";
import CarouselAnimeItem from "./CarouselAnimeItem";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const CarouselAnime = () => {
  const { year, season, seasonalAnime } = useContext(SeasonalContext);

  return (
    seasonalAnime && (
      <div
        style={{
          position: "relative",
          marginTop: "2rem",
        }}
      >
        <h2 style={{ borderBottom: "1px solid white" }}>
          Anime - {season && season[0].toUpperCase() + season.substring(1)}{" "}
          {year}
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
    )
  );
};

export default CarouselAnime;
