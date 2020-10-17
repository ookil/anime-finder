import React, { useEffect, useContext, useState } from 'react';
import SeasonalContext from '../../context/seasonal/seasonalContext';
import SeasonalCard from '../seasonal/SeasonalCard';
import { useMediaQuery } from 'react-responsive';
import TopGrid from '../topAnimes/TopGrid';
import Select from 'react-select';
import { getSeasonalAnime } from '../../context/seasonal/actions';
import '../seasonal/seasonalStyle.scss';

const SeasonalAnime = () => {
  const isXS = useMediaQuery({
    query: `(max-device-width: 350px)`,
  });

  const { seasonalAnime, year, season } = useContext(SeasonalContext);

  const [selectedSeason, selectSeason] = useState(season);
  const [years, setYears] = useState();
  const [selectedYear, selectYear] = useState(year);
  const [query, setQuery] = useState([]);

  const handleChangeSeason = (e) => {
    selectSeason(e.value);
    getSeasonalAnime(selectedYear, e.value).then((res) => setQuery(res));
  };
  const handleChangeYear = (e) => {
    selectYear(e.label);
    getSeasonalAnime(e.value, selectedSeason).then((res) => setQuery(res));
  };

  useEffect(() => {
    const arr = [];
    for (let x = year + 1; x > year - 11; x--) {
      arr.push({ value: '' + x, label: '' + x });
    }
    setYears(arr);
  }, [year]);

  return (
    <>
      <div className='banner'>
        <div>
          <h1>Seasonal Anime</h1>
          <h2>
            {selectedSeason &&
              selectedSeason[0].toUpperCase() + selectedSeason.substring(1)}
            <span> {selectedYear}</span>
          </h2>
        </div>
        <div>
          <Select
            styles={customStyles}
            options={seasons}
            onChange={handleChangeSeason}
            placeholder='Season'
            isSearchable={false}
          />
          <Select
            styles={customStyles}
            options={years}
            onChange={handleChangeYear}
            placeholder='Year'
            isSearchable={false}
          />
        </div>
      </div>
      {isXS ? (
        <TopGrid topList={query.length ? query : seasonalAnime} />
      ) : (
        <div className='cards'>
          {query.length
            ? query.map((anime) => (
                <SeasonalCard anime={anime} key={anime.mal_id} />
              ))
            : seasonalAnime.map((anime) => (
                <SeasonalCard anime={anime} key={anime.mal_id} />
              ))}
        </div>
      )}
    </>
  );
};

export default SeasonalAnime;

const seasons = [
  { value: 'winter', label: 'Winter' },
  { value: 'spring', label: 'Spring' },
  { value: 'summer', label: 'Summer' },
  { value: 'fall', label: 'Fall' },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected
      ? '#171515'
      : state.isFocused
      ? '#4f4e4e'
      : '#3a3939',
    color: state.isSelected ? '#deac3c' : 'white',
    padding: '15px',
  }),
  menu: (provided) => ({
    ...provided,
    background: '#3a3939',
    width: '200px',
    boxShadow:
      '0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)',
  }),
  control: (provided, state) => ({
    ...provided,
    background: '#1b1b1b',
    border: 'none',
    borderBottom: '1px solid white',
    width: '200px',
  }),
  indicatorSeparator: () => ({}),
  singleValue: () => ({
    color: 'white',
  }),
};
