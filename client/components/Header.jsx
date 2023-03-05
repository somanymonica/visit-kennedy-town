import Image from "next/image";
import Link from "next/link";

import images from "../constants/images";
import styles from "./Header.module.css";

const Header = () => (
  <div className="section__container" id="home">
    <div className={styles.header_img}>
      <Image src={images.kd} alt="header" className={styles.header_img_img} />
    </div>
    <div className={styles.header_info}>
      <h1 className="header_h1">Welcome to Kennedy Town</h1>
      <p className="header_p">
        Kennedy Town is at the western end of Sai Wan on Hong Kong Island in
        Hong Kong.
        <br /> I love Kennedy Town and hope you do too.
      </p>
      <button className="custom_button">
        <Link href="/posts">Explore More</Link>
      </button>
    </div>
  </div>
);

export default Header;
