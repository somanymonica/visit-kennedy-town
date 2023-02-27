import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";

import styles from "./Navbar.module.css";
import images from "../../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_links}>
        <div className={styles.navbar_links_logo}>
          <Image src={images.logo} alt="logo" />
        </div>
        <div className={styles.navbar_links_container}>
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
      <div className={styles.navbar_login}>
        <p>
          <a href="#login">Log in</a>
        </p>
      </div>

      <div className={styles.navbar_menu}>
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="{styles.navbar_menu_container} scale-up-center">
            <div className={styles.navbar_menu_container_links}>
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
            <div className={styles.navbar_menu_container_links_login}>
              <p>Log in</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
