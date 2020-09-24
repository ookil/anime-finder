import React, { Fragment } from "react";
import CarouselAnime from "../carousel/CarouselAnime";
import TopAnimeItem from '../topAnimes/TopAnimeItem'

const Home = () => {
  

  return (
    <Fragment>
      <CarouselAnime />
      <TopAnimeItem />
    </Fragment>
  );
};

export default Home;
