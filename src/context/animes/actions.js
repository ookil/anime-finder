import axios from 'axios';

const jikan = axios.create({
  baseURL: 'https://api.jikan.moe/v3',
});

export const search = async (text) => {
  const anime = await jikan.get(`/search/anime?q=${text}`);

  const manga = await jikan.get(`/search/manga?q=${text}`);

  return {
    animeResult: anime.data.results,
    mangaResult: manga.data.results,
    query: text,
  };
};

export const getAnimeAndCharacters = async (mal_id) => {
  const anime = await jikan.get(`/anime/${mal_id}`);

  const characters = await jikan.get(`/anime/${mal_id}/characters_staff`);

  return { anime: anime.data, characters: characters.data.characters };
};

export const getMangaAndCharacters = async (mal_id) => {
  const manga = await jikan.get(`/manga/${mal_id}`);

  const characters = await jikan.get(`/manga/${mal_id}/characters`);

  return { manga: manga.data, characters: characters.data.characters };
};