import React, { useContext } from "react";
import TopAnimeItem from "./TopAnimeItem";
import TopContext from "../../context/tops/topContext";

const TopAnimeBox = () => {
  const {
    topAnimeAll,
    topAnimeAiring,
    topAnimeUpcoming,
  } = useContext(TopContext);


  return (
    <div className="top-anime">
      <TopAnimeItem
        title="Top Airing Anime"
        top={topAnimeAiring}
        type="airing"
      />
      <TopAnimeItem
        title="Top Upcoming Anime"
        top={topAnimeUpcoming}
        type="upcoming"
      />
      <TopAnimeItem title="Top Popular Anime" top={topAnimeAll} />
    </div>
  );
};

export default TopAnimeBox;
