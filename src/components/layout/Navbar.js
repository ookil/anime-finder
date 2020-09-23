import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { LG } from "../utilities/mediaQueries";
import PropTypes from "prop-types";
import NavbarMenu from "../navbars/NavbarMenu";
import Dropdown from "../navbars/Dropdown";
import { mobileItems } from "../navbars/navItems";

const Navbar = ({ title }) => {
  const [isOpen, setOpen] = useState(false);

  const handleMenu = () => setOpen(!isOpen);

  const loggedIn = true;

  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-device-width: ${LG}px)`,
  });

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
                <Link
                  to={loggedIn ? "/profile" : "/login"}
                  className="btn btn-white-rounded box-shadow"
                >
                  {loggedIn ? "Profile" : "Login"}
                </Link>
              </li>
              <li>
                <Link
                  to={loggedIn ? "/#" : "/signup"}
                  className="btn btn-white-outline-rounded"
                >
                  {loggedIn ? "Log Out" : "Sign Up"}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/profile">
                  <i className="fas fa-user"></i>
                </Link>
              </li>
              <li className="ml-2" onClick={handleMenu}>
                <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                {isOpen && <Dropdown navItems={mobileItems} classStyle={"mobile-menu--dropdown"}/>}
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
