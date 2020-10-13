import {
  GET_TOP_ANIME,
  GET_TOP_MANGA,
  SET_LOADING,
  TOGGLE_TOP_ANIME,
} from "../types";

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
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      throw Error(`Unhandled Action: ${action.type}`);
  }
};
