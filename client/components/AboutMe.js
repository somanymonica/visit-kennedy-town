import Image from "next/image";

import { data } from "../constants";
import styles from "./AboutMe.module.scss";

const AboutMe = () => (
  <div className={styles.about}>
    <Image
      priority
      src={data.aboutMe.avatar}
      height={200}
      width={200}
      alt="avatar"
    />
    <h1>{data.aboutMe["name"]}</h1>
    <div
      className={styles.desc}
      dangerouslySetInnerHTML={{ __html: data.aboutMe.desc }}
    />
  </div>
);

export default AboutMe;
