import Image from "next/image";

import { data } from "../../constants";
import styles from "./AboutMe.module.css";

const AboutMe = () => (
  <div className={styles.about}>
    <Image
      priority
      src={data.aboutMe.avatar}
      height={200}
      width={200}
      alt="avatar"
    />
    <h1 className="header_h1">{data.aboutMe["name"]}</h1>
    <p className="header_p">{data.aboutMe.desc}</p>
  </div>
);

export default AboutMe;
