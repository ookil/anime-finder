import {
  SEARCH_ANIMES,
  GET_ANIME_AND_CHARACTERS,
  CLEAR_ANIMES,
  SET_LOADING,
  GET_SEASONAL_ANIME
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_SEASONAL_ANIME:
      return {
        ...state,
        seasonalAnime: action.payload,
        loading: false
      }  
    case GET_ANIME_AND_CHARACTERS:
      return {
        ...state,
        anime: action.payload.anime,
        characters: action.payload.characters,
        loading: false,
      };
    case SEARCH_ANIMES:
      return {
        ...state,
        animes: action.payload,
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
