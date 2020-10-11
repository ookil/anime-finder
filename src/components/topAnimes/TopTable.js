import React from "react";
import { Link } from "react-router-dom";
import "./table.scss";

const TopTable = ({ topList }) => {
  return (
    <div>
      <div className="d-flex justift-content-between my-2">
        <h4 className="col col-rank">Rank</h4>
        <h4 className="col col-title">Title</h4>
        <h4 className="col col-type">Type</h4>
        <h4 className="col col-score">Score</h4>
      </div>
      {topList.map((anime) => (
        <TableRow anime={anime} key={anime.mal_id} />
      ))}
    </div>
  );
};

const TableRow = ({
  anime: { mal_id, rank, title, image_url, type, score },
}) => {
  return (
    <div className="d-flex align-items-center mb-2">
      <div className="col col-rank">
        <h3>{rank}</h3>
      </div>
      <div className="d-flex align-items-center col col-title">
        <div>
          <img src={image_url} alt={title} />
        </div>
        <div style={{ textAlign: "left", color: '#04216a' }}>
          <Link to={`/anime/${mal_id}`}>
            <h4>{title}</h4>
          </Link>
        </div>
      </div>
      <div className="col col-type">
        <p>{type}</p>
      </div>
      <div className="col col-score">
        <p>{score === 0 ? "N/A" : score}</p>
      </div>
    </div>
  );
};

export default TopTable;
