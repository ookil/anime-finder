import React from "react";
import { Link } from "react-router-dom";
import TopAnimeList from "./TopAnimeList";

const TopAnimeItem = () => {
  const top = {
    mal_id: 39587,
    rank: 1,
    title: "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season",
    url:
      "https://myanimelist.net/anime/39587/Re_Zero_kara_Hajimeru_Isekai_Seikatsu_2nd_Season",
    image_url:
      "https://cdn.myanimelist.net/images/anime/1444/108005.jpg?s=b998e66dcfad4bbd4510b9ece4c9eb99",
    type: "TV",
    episodes: 13,
    start_date: "Jul 2020",
    end_date: "Sep 2020",
    members: 413470,
    score: 8.64,
  };

  return (
    <div className="card-top">
      <Link to="/top">
        <div className="card-top--title" >
          <h4>Top Airing Anime </h4>
          <i className="fas fa-arrow-right"></i>
        </div>
      </Link>
      <TopAnimeList top={top} />
    </div>
  );
};

export default TopAnimeItem;
