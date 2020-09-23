import React, { useState } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import Search from "../utilities/Search";
import Dropdown from "./Dropdown";
import { LG } from "../utilities/mediaQueries";
import { animeItems } from "./navItems";
import { mangaItems } from "./navItems";

const NavbarMenu = () => {
  const [dropdown, setDropdown] = useState(null);

  const onMouseOver = (e) => {
    e.preventDefault();
    setDropdown(e.target.id);
  };

  const onMouseLeave = (e) => {
    e.preventDefault();
    setDropdown(null);
  };

  const onClick = (e) => {
    setDropdown(null);
  };

  return (
    <nav className="navbar nav-menu">
      <MediaQuery minDeviceWidth={LG}>
        <ul>
          <li>
            <Link
              to="/#"
              className="non-link"
              id="animeItems"
              onMouseOver={onMouseOver}
            >
              Anime
            </Link>
            {dropdown === "animeItems" && (
              <Dropdown
                navItems={animeItems}
                classStyle={"nav-menu--dropdown"}
                onClick={onClick}
                onMouseLeave={onMouseLeave}
              />
            )}
          </li>

          <li className="ml-4">
            <Link
              to="/#"
              className="non-link"
              id="mangaItems"
              onMouseOver={onMouseOver}
            >
              Manga
            </Link>
            {dropdown === "mangaItems" && (
              <Dropdown
                navItems={mangaItems}
                classStyle={"nav-menu--dropdown"}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
              />
            )}
          </li>

          <li className="ml-4">
            <Link to="/#" className="non-link">
              Community
            </Link>
          </li>

          <li className="ml-4">
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </MediaQuery>
      <Search />
    </nav>
  );
};

export default NavbarMenu;
