import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ navItems, classStyle, onMouseLeave, onClick }) => {
  return (
    <>
      <ul className={`dropdown-menu ${classStyle}`} onMouseLeave={onMouseLeave}>
        {navItems.map((item, index) => {
          return (
            <li key={index} className={item.cName} onClick={onClick}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
