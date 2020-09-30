import {
  GET_TOP_ANIME,
  GET_TOP_ANIME_MOVIE,
  GET_TOP_MANGA,
  GET_TOP_MANHWA,
  GET_TOP_NOVEL,
  SET_LOADING
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TOP_ANIME:
      return {
        ...state,
        topAnimeAll: action.payload.all,
        topAnimeAiring: action.payload.airing,
        topAnimeUpcoming: action.payload.upcoming,
        loading: false,
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
