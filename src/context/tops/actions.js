import axios from 'axios';

const jikan = axios.create({
  baseURL: 'https://api.jikan.moe/v3',
});

export const getTopAnime = async () => {
  const all = await jikan.get('/top/anime');

  const airing = await jikan.get('/top/anime/1/airing');

  const upcoming = await jikan.get('/top/anime/1/upcoming');

  const movie = await jikan.get('/top/anime/1/movie');

  return {
    all: all.data.top,
    airing: airing.data.top,
    upcoming: upcoming.data.top,
    movie: movie.data.top,
  };
};

export const getTopManga = async () => {
  const all = await jikan.get('/top/manga');

  const manga = await jikan.get('/top/manga/1/manga');

  const novels = await jikan.get('/top/manga/1/novels');

  const manhwa = await jikan.get('/top/manga/1/manwha');

  const manhua = await jikan.get('/top/manga/manhua');

  return {
    all: all.data.top,
    manga: manga.data.top,
    novels: novels.data.top,
    manhwa: manhwa.data.top,
    manhua: manhua.data.top,
  };
};

