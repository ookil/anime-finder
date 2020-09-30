import axios from "axios";


export const getSeason = () => {
  const month = new Date().getMonth()
  if (month < 4) return "winter";
  if (month < 5) return "spring";
  if (month < 8) return "summer";
  if (month < 13) return "fall";
};


export const getSeasonalAnime = async (year, season) => {
  
    const res = await axios.get(`https://api.jikan.moe/v3/season/${year}/${season}`)
  
    return res.data.anime
  
  }
