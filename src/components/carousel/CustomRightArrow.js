import React from "react";

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType } 
  } = rest;
  return <i onClick={() => onClick} className="fas fa-chevron-right arrow--right" />;
};

export default CustomRightArrow;
