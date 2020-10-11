import React, { Fragment } from "react";
import CarouselAnime from "../carousel/CarouselAnime";
import TopAnimeBox from "../topAnimes/TopAnimeBox";

const Home = () => {
  return (
    <Fragment>
      <CarouselAnime />
      <TopAnimeBox />
    </Fragment>
  );
};

export default Home;
