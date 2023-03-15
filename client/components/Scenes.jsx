import styles from "./Scenes.module.scss";
import Image from "next/image";

import { data } from "../constants";

const RecommandCard = ({ imgUrl, title, desc }) => (
  <div className={styles.recommand_card}>
    <Image src={imgUrl} alt="recommand-card" />
    <div className={styles.recommand_card_info}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
);

const Scenes = () => (
  <div className={styles.scenes} id="scenes">
    <div className={styles.scenes_header}>
      <h1>Beautiful Scenes</h1>
    </div>
    <div className={styles.scenes_info_container}>
      {data.places.map((place, index) => (
        <RecommandCard
          key={place.title + index}
          imgUrl={place.imgUrl}
          title={place.title}
          desc={place.desc}
        ></RecommandCard>
      ))}
    </div>
  </div>
);

export default Scenes;
