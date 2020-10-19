import {
  SEARCH_ANIME_AND_MANGA,
  GET_ANIME_AND_CHARACTERS,
  GET_MANGA_AND_CHARACTERS,
  CLEAR_ANIMES,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ANIME_AND_CHARACTERS:
      return {
        ...state,
        anime: action.payload.anime,
        characters: action.payload.characters,
        loading: false,
      };
      case GET_MANGA_AND_CHARACTERS:
      return {
        ...state,
        manga: action.payload.manga,
        characters: action.payload.characters,
        loading: false,
      };
    case SEARCH_ANIME_AND_MANGA:
      return {
        ...state,
        animeResult: action.payload.animeResult,
        mangaResult: action.payload.mangaResult,
        query: action.payload.query,
        loading: false,
      };
    case CLEAR_ANIMES:
      return {
        ...state,
        animes: [],
        loading: false,
      };
    default:
      throw Error(`Unhandled Action: ${action.type}`);
  }
};
