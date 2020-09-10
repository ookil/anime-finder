import axios from "axios";

const jikan = axios.create({
  baseURL: "https://api.jikan.moe/v3",
});

export const searchAnimes = async (text) => {
  const res = await jikan.get(`/search/anime?q=${text}`);

  return res.data.results;
};

export const getAnimeAndCharacters = async (mal_id) => {
  const anime = await jikan.get(`/anime/${mal_id}`);

  const characters = await jikan.get(`/anime/${mal_id}/characters_staff`);

  return { anime: anime.data, characters: characters.data.characters };
};
