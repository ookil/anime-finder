import { GET_SEASON, GET_SEASONAL_ANIME } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_SEASON:
      return {
        ...state,
        season: action.payload,
      };
    case GET_SEASONAL_ANIME:
      return {
        ...state,
        seasonalAnime: action.payload,
        loading: false,
      };
    default:
      throw Error(`Unhandled Action: ${action.type}`);
  }
};
