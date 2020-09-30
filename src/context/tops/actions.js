import axios from "axios";

const jikan = axios.create({
  baseURL: "https://api.jikan.moe/v3",
});

export const getTopAnime = async () => {
  const all = await jikan.get("/top/anime");

  const airing = await jikan.get("/top/anime/1/airing");

  const upcoming = await jikan.get("/top/anime/1/upcoming");

  return {
    all: all.data.top,
    airing: airing.data.top,
    upcoming: upcoming.data.top,
  };
};

/* export const getTop = async (type, subtype) => {
  let res;
  if (subtype === undefined) {
    res = await jikan.get(`/top/${type}`);
  } else {
    res = await jikan.get(`/top/${type}/1/${subtype}`);
  }
  return res.data.top;
}; */

export const getTopAnimeAll = () => {};

export const getTopAnimeAiring = () => {};

export const getTopAnimeUpcoming = () => {};

export const getTopAnimeMovie = () => {};

export const getTopManga = () => {};
export const getTopManhwa = () => {};
export const getTopNovel = () => {};
