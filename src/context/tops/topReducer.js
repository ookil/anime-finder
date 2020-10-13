import {
  GET_TOP_ANIME,
  GET_TOP_MANGA,
  SET_LOADING,
  TOGGLE_TOP_ANIME,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_TOP_ANIME:
      return {
        ...state,
        topAnimeAll: action.payload.all,
        topAnimeAiring: action.payload.airing,
        topAnimeUpcoming: action.payload.upcoming,
        topAnimeMovie: action.payload.movie,
        loading: false,
      };
    case TOGGLE_TOP_ANIME:
      return {
        ...state,
        buttonID: action.payload,
      };
    case GET_TOP_MANGA:
      return {
        ...state,
        topMangaAll: action.payload.all,
        topManga: action.payload.manga,
        topNovels: action.payload.novels,
        topManhwa: action.payload.manhwa,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      throw Error(`Unhandled Action: ${action.type}`);
  }
};
