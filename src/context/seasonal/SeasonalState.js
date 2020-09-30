import React, { useReducer } from "react";
import seasonalReducer from "./seasonalReducer";
import SeasonalContext from "./seasonalContext";

const SeasonalState = (props) => {
    const initialState = {
        seasonalAnime: [],
        year: new Date().getFullYear(),
        season: null

    }

    const [state, dispatch] = useReducer(seasonalReducer, initialState)

    

  return <SeasonalContext.Provider value={{...state, dispatch}} >
      {props.children}
  </SeasonalContext.Provider>
};

export default SeasonalState;
