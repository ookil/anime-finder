import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { LG } from "../utilities/mediaQueries";
import PropTypes from "prop-types";
import NavbarMenu from "../navbars/NavbarMenu";
import Dropdown from "../navbars/Dropdown";
import { mobileItems } from "../navbars/navItems";
import SeasonalContext from "../../context/seasonal/seasonalContext";
import { GET_SEASONAL_ANIME, GET_SEASON } from "../../context/types";
import { getSeason, getSeasonalAnime } from "../../context/seasonal/actions";
import TopContext from "../../context/tops/topContext";
import { getTopAnime } from "../../context/tops/actions";
import { GET_TOP_ANIME, SET_LOADING } from "../../context/types";

const Navbar = ({ title }) => {
  const { dispatch, year, season } = useContext(SeasonalContext);
  const { dispatchTop, day } = useContext(TopContext);

  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => setOpen(!isOpen);

  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-device-width: ${LG}px)`,
  });

  useEffect(() => {
    const res = getSeason();
    dispatch({ type: GET_SEASON, payload: res });
  }, [dispatch]);

  useEffect(() => {
    if (season !== null) {
      getSeasonalAnime(year, season).then((res) =>
        dispatch({ type: GET_SEASONAL_ANIME, payload: res })
      );
    }
  }, [dispatch, year, season]);

  useEffect(() => {
    dispatchTop({ type: SET_LOADING });
    getTopAnime().then((res) =>
      dispatchTop({ type: GET_TOP_ANIME, payload: res })
    );
  }, [dispatchTop, day]);

  return (
    <>
      <nav className="navbar nav-banner">
        <h1
          style={{
            fontFamily: "Roboto Mono",
            fontWeight: "normal",
            textShadow: "0px 4px 4px rgba(255, 255, 255, 0.25)",
          }}
        >
          <Link to="/">{title}</Link>
        </h1>
        <ul>
          {isDesktopOrLaptop ? (
            <>
              <li>
                <Link to="/about" className="btn btn-white-outline-rounded">
                  About
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="ml-2" onClick={handleMenu}>
                <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                {isOpen && (
                  <Dropdown
                    navItems={mobileItems}
                    classStyle={"mobile-menu--dropdown"}
                  />
                )}
              </li>
            </>
          )}
        </ul>
      </nav>
      {!isOpen && <NavbarMenu />}
    </>
  );
};

Navbar.defaultProps = {
  title: "Bling Bling Otaku",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
