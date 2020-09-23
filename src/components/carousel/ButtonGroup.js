import React from "react";
import MediaQuery from "react-responsive";
import { SM } from "../utilities/mediaQueries";

const ButtonGroup = ({ next, previous }) => {
  return (
    <MediaQuery minDeviceWidth={SM}>
      <div className="carousel-button-group">
        <i className="fas fa-chevron-left" onClick={() => previous()} />
        <i className="fas fa-chevron-right ml-2" onClick={() => next()} />
      </div>
    </MediaQuery>
  );
};

export default ButtonGroup;
