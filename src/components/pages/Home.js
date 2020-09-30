import React, { Fragment } from "react";
import CarouselAnime from "../carousel/CarouselAnime";
import TopAnime from "../topAnimes/TopAnime";

const Home = () => {
  return (
    <Fragment>
      <CarouselAnime />
      <TopAnime />
    </Fragment>
  );
};

export default Home;
