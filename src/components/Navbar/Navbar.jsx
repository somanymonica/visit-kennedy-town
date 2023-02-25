import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./Navbar.css";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={images.logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#intro">Introduction</a>
          </p>
          <p>
            <a href="#scenes">Scenes</a>
          </p>
          <p>
            <a href="#restaurants">Restaurants</a>
          </p>
        </div>
      </div>
      <div className="navbar-login">
        <p>
          <a href="#login">Log in</a>
        </p>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#Scenes">Scenes</a>
              </p>
              <p>
                <a href="#Restaurants">Restaurants</a>
              </p>
            </div>
            <div className="navbar-menu_container-links-login">
              <p>Log in</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
