import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.scss";
import images from "../constants/images";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_foreground}>
        <div className={styles.navbar_links}>
          <div className={styles.navbar_links_logo}>
            <Link href="/"></Link>
          </div>
          <div className={styles.navbar_links_container}>
            <p>
              <Link href="/#home">Home</Link>
            </p>
            <p>
              <Link href="/#scenes">Scenes</Link>
            </p>
            <p>
              <Link href="/#restaurants">Restaurants</Link>
            </p>
            <p>
              <Link href="/about">About</Link>
            </p>
          </div>
        </div>
        <div className={styles.navbar_login}>
          <p>
            <Link href="/#login">Log in</Link>
          </p>
        </div>

        <div className={styles.navbar_menu}>
          {toggleMenu ? (
            <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
          ) : (
            <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
          )}
          {toggleMenu && (
            <div className={styles.navbar_menu_container}>
              <div className={styles.navbar_menu_container_links}>
                <p>
                  <Link href="/#home">Home</Link>
                </p>
                <p>
                  <Link href="/#Scenes">Scenes</Link>
                </p>
                <p>
                  <Link href="/#Restaurants">Restaurants</Link>
                </p>
                <p>
                  <Link href="/about">About</Link>
                </p>
                <p>Log in</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
